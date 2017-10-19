'use strict';
const db = require('../');
const Sequelize = require('sequelize');

const Student = db.define('student', {
   name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	allowNull: false,
  }
})

module.exports = Student;
