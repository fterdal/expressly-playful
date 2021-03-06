'use strict';
const Sequelize = require('sequelize');
const db = require('..');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
});

module.exports = User;
