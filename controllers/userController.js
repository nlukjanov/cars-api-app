const User = require('../models/userModel')

function createFavorite(req, res) {
  console.log(req.body)
  User.findById(req.params.id)
    .then(foundUser => {
      console.log(foundUser)
      if (!foundUser) return res.status(404).json({ message: 'Not found' })
      foundUser.favorites.push(req.body)
      //! saving requires password, can i use token somehow??
      return foundUser.save()
    })
    // .then(updatedCar => res.status(201).json(updatedCar))
    // .catch(err => {
    //   console.log(err)
    //   res.sendStatus(404)
    // })
}

module.exports = {
  createFavorite
}