const router = require('express').Router()
const carsController = require('../controllers/carsController')
const users = require('../controllers/authController')
const secureRoute = require('../lib/secureRoute')
const userController = require('../controllers/userController')

router.route('/').get(carsController.home)

router
  .route('/cars')
  .get(carsController.index)
  .post(secureRoute, carsController.create)

router
  .route('/cars/:id')
  .get(carsController.show)
  .put(secureRoute, carsController.update)
  .delete(secureRoute, carsController.remove)

router.route('/register').post(users.register)

router.route('/login').post(users.login)

router.route('/cars/:id/comments/').post(secureRoute, carsController.createComment)

router.route('/cars/:id/comments/:commentId').delete(secureRoute, carsController.deleteComment)

router.route('/users/:id/favorites/').post(userController.createFavorite)

module.exports = router
