const morgan = require('morgan');
const app = require('express')();
const bodyParser = require('body-parser');
const apiRoutes = require('./api');

app.use(morgan('dev'));

// Body parsing middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the api
app.use('/api', apiRoutes);

// Start the server!
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}!`);
})
