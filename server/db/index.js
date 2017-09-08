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

const models = require('./models');

// Should we reset the database on restart?
const force = false;

function sync() {
  return db.sync({force})
  .then(`Synced models to db ${databaseName}`)
  .catch(err => {
    console.error('Unable to sync database. Are you sure the database exists?')
    console.error(`Try running \`createdb ${databaseName}\` and see if that fixes the problem.`)
  });
}

db.didSync = sync();

module.exports = db;
