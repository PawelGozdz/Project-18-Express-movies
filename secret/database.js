const Sequelize = require('sequelize');

const sequelize = new Sequelize('d18q26o3b6apki', 'ugyckjonayusuo', '9c17168f586979062b861df23449ea36a8289de21abf64636526a7c2d8c56593', {
  dialect: 'postgres', host: 'ec2-79-125-26-222.eu-west-1.compute.amazonaws.com'
});

module.exports = sequelize;
