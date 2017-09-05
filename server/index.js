const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const apiRoutes = require('./api');

const app = express();

// Use morgan for logging
app.use(morgan('dev'));

// Body parsing middleware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files come from the /public directory
app.use(express.static(path.resolve(__dirname, '..', 'public')))

// Mount the api
app.use('/api', apiRoutes);

// Start the server!
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}!`);
})
