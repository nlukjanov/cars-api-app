const Car = require('../models/carsModel')

function home(req, res) {
  return res.status(200).json('ok')
}

function index(req, res) {
  Car.find()
    .populate('user')
    .then(foundCars => {
      res.status(200).json(foundCars)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

function create(req, res) {
  req.body.user = req.currentUser
  Car.create(req.body)
    .then(createdCar => {
      res.status(201).json(createdCar)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

function show(req, res) {
  Car.findById(req.params.id)
    .populate('user')
    .populate('comments.user')
    .then(foundCar => {
      res.status(200).json(foundCar)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

function update(req, res) {
  Car.findById(req.params.id)
    .then(foundCar => {
      if (!foundCar) return res.status(404).json({ message: 'Not found' })
      if (!foundCar.user.equals(req.currentUser._id))
        return res.status(401).json({ message: 'Unauthorized' })

      Object.assign(foundCar, req.body)
      return foundCar.save()
    })
    .then(updatedCar => res.status(202).json(updatedCar))
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

function remove(req, res) {
  Car.findByIdAndDelete(req.params.id)
    .then(foundCar => {
      if (!foundCar) return res.status(404).json({ message: 'not found' })
      if (!foundCar.user.equals(req.currentUser._id))
        return res.status(401).json({ message: 'Unauthorized' })
      return foundCar.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

// comments
function createComment(req, res) {
  req.body.user = req.currentUser
  Car.findById(req.params.id)
    .populate('user')
    .then(foundCar => {
      if (!foundCar) return res.status(404).json({ message: 'Not found' })
      foundCar.comments.push(req.body)
      return foundCar.save()
    })
    .then(updatedCar => res.status(201).json(updatedCar))
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

function deleteComment(req, res) {
  req.body.user = req.currentUser
  Car.findById(req.params.id)
    .then(foundCar => {
      if (!foundCar) return res.status(404).json({ message: 'Not found' })
      const comment = foundCar.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id) && !foundCar.user.equals(req.currentUser._id))
        return res.status(401).json({ message: 'Unauthorized' })
      comment.remove()
      return foundCar.save()
    })
    .then(updatedCar => res.status(202).json(updatedCar))
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

module.exports = {
  home,
  index,
  create,
  show,
  update,
  remove,
  createComment,
  deleteComment
}
