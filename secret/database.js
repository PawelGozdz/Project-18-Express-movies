const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
  dialect: 'postgres', host: 'localhost'
});


module.exports = sequelize;
