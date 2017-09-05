const router = require('express').Router();

// Dummy route
router.get('/', (req, res, next) => {
  res.send('Hello from the users API!');
})


module.exports = router;
