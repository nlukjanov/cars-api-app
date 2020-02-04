const express = require('express')
const app = express()
const logger = require('./lib/logger')
const { port, dbURI } = require('./config/environment')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./config/router')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.log(err)
    console.log(`Mongo is connected to '${dbURI}'`)
  }
)

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use(logger)
app.use('/api', router)

app.use('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
app.listen(port, () => console.log(`App listening on port ${port}!`))
