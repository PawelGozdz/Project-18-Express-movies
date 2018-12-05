const Sequelize = require('sequelize');

const sequelize = new Sequelize('dav4cufv2cm2du', 'umwcgqckopqehx', 'ba71ebf5a9dd1675f4953217eaa5107ed09738bb9a1ccb27b8fbc46d2f62ee16', {
  dialect: 'postgres', host: 'ec2-79-125-26-222.eu-west-1.compute.amazonaws.com'
});

module.exports = sequelize;
