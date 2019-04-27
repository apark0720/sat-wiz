'use strict';

const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },

})

module.exports = User;