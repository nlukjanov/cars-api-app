const User = require('../models/userModel')

function createFavorite(req, res) {
  User.findById(req.params.id)
    .then(foundUser => {
      if (!foundUser) return res.status(404).json({ message: 'Not found' })
      foundUser.favorites.push(req.body)
      return foundUser.save()
    })
    .then(updatedCar => res.status(201).json(updatedCar))
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

function getFavorites(req, res) {
  User.findById(req.params.id)
    .populate('favorites')
    .then(foundUser => {
      if (!foundUser) return res.status(404).json({ message: 'User Not found' })
      return res.status(200).json(foundUser.favorites)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(404)
    })
}

module.exports = {
  createFavorite,
  getFavorites
}
