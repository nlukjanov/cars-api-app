const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/cars-rest-api'
const secret = process.env.SECRET || 'jwtsecret'

module.exports = {
  port,
  dbURI,
  secret
}
