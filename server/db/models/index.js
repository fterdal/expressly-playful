'use strict';
const User = require('./user.model.js');
const Offering = require('./offering.model.js');
const Investment = require('./investment.model.js')


Offering.belongsTo(User, { as: 'owner', foreignKey: { allowNull: false } });
User.belongsToMany(Offering, { through: Investment })

module.exports = {User, Offering};
