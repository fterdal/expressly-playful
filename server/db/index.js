'use strict'
const debug = require('debug')('sql');
const Sequelize = require('sequelize');

// Database name. Feel free to change this to your own needs.
const databaseName = 'expressly_playful';
const connectionString = `postgres://localhost:5432/${databaseName}`;

const db = new Sequelize(connectionString, {
  logging: debug,
  native: true,
})

// console.log('db', db);

const models = require('./models');


db.didSync = db.sync({force: true});

module.exports = db;
