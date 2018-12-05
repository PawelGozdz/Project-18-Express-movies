const Sequelize = require('sequelize');

const sequelize = require('../secret/database');

// Movie Model
const Movie = sequelize.define('movie', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rated: {
    type: Sequelize.STRING,
    allowNull: false
  },
  released: {
    type: Sequelize.STRING,
    allowNull: false
  },
  runtime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false
  },
  writer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  actors: {
    type: Sequelize.STRING,
    allowNull: false
  },
  plot: {
    type: Sequelize.STRING,
    allowNull: false
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  awards: {
    type: Sequelize.STRING,
    allowNull: false
  },
  poster: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ratings: {
    type: Sequelize.STRING,
    allowNull: false
  },
  metascore: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imdbRating: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imdbVotes: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imdbID: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dvd: {
    type: Sequelize.STRING,
    allowNull: false
  },
  boxOffice: {
    type: Sequelize.STRING,
    allowNull: false
  },
  production: {
    type: Sequelize.STRING,
    allowNull: false
  },
  website: {
    type: Sequelize.STRING,
    allowNull: false
  },
  response: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Movie;
