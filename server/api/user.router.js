const router = require('express').Router();
const { User } = require('../db/models');

// Dummy route
router.get('/', (req, res, next) => {
  res.send('Hello from the users API!');
})


module.exports = router;
