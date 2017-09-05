const router = require('express').Router();

const users = require('./user.router.js');
router.use('/users', users);

// Dummy route
router.get('/', (req, res, next) => {
  res.send('Hello from the API index!');
})

module.exports = router;
