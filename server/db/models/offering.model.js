'use strict';
const Sequelize = require('sequelize');
const db = require('..');

const Offering = db.define('offering', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [5,30] // Offering name must be at least 5 characters long, and no longer than 30.
    }
  }
});

module.exports = Offering;
