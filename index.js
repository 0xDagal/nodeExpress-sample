var express = require('express')
var app = express()

var bodyParser = require('body-parser');
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())

var livre = require('./routes/livre.js')
app.use('/livre', livre)

app.listen(3000)
