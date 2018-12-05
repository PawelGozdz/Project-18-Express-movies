const Sequelize = require('sequelize');

const sequelize = new Sequelize('moviedb', 'new_user', 'password1', {
  dialect: 'postgres', host: 'localhost'
});


module.exports = sequelize;
