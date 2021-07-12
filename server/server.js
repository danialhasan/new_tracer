// Importing required modules
const express = require('express');

// parse env variables
require('dotenv').config();

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined) {
    process.env.ACCESS_CONTROL_ALLOW_ORIGIN = 'http://localhost:3000'
} else if (process.env.NODE_ENV === "production") {
    process.env.ACCESS_CONTROL_ALLOW_ORIGIN = 'https://unsplash-clone-dh.netlify.app'
}

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(express.json());



app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api', require('./routes/api'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;