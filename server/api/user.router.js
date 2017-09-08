const router = require('express').Router();
const { User } = require('../db/models');

// Get all users
router.get('/', (req, res, next) => {
  return User.findAll()
  .then( users => {
    res.send(users);
  })
  .catch(next)
})

// Get user by id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  return User.findById(id)
  .then( user => {
    if (user) {
      res.send(user);
    } else {
      res.sendStatus(404)
    }
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  const body = req.body;
  return User.create(body)
  .then( user => {
    res.send(user);
  })
  .catch(next)
})

module.exports = router;
