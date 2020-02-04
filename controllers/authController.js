const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User.create(req.body)
    .then(user =>
      res
        .status(201)
        .json({ message: `Thank you for registering ${user.username}` })
    )
    .catch(err => res.json(err))
}

function login(req, res) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).json({
        message: `Welcome back ${user.username}`,
        token: token
      })
    })
    .catch(err => res.json(err))
}

module.exports = { register, login }
