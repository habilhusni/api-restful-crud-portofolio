const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
// const port = 3000 || process.env.PORT

const app = express()

// App config
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/memo')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=> {
  console.log('Mongoose connected!')
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// App routes
let memo = require('./routes/memo')

app.use('/', memo)

// Server listen
app.listen(3000)
console.log(`Server connected!`)
