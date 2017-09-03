const router = require('express').Router();

// Dummy route
router.get('/', (req, res, next) => {
  res.send('Hello, World!');
})

module.exports = router;
