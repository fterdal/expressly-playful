const router = require('express').Router();

// Dummy route
router.get('/', (req, res, next) => {
  res.send('Hello from the API!');
})

module.exports = router;
