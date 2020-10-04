let express = require('express');

require('dotenv').config()

// Import Body parser
let bodyParser = require('body-parser');


// Initialize the app
let app = express();



// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

module.exports = {
  app
}