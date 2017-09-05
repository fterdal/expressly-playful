'use strict';
const Sequelize = require('sequelize');
const db = require('..');

const Investment = db.define('investment', {
  price: {
    type: Sequelize.REAL, // Not sure if this is necessary or overkill
    allowNull: false
  }
});

module.exports = Investment;
