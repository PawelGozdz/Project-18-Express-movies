const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./secret/database');
const Movie = require('./models/movie');
const Comment = require('./models/comment');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const movieRoutes = require('./routes/movies');
const commentRoutes = require('./routes/comments');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(movieRoutes);
app.use(commentRoutes);

Comment.belongsTo(Movie, { constraints: true, onDelete: 'CASCADE' });
Movie.hasMany(Comment);

sequelize
  // .sync({ force: true })
  .sync()
  // .then(aa => {
  //   return Movie.create({
  //     title: 'req.Title',
  //       year: 'req.Year',
  //       rated: 'req.Rated',
  //       released: 'req.Released',
  //       runtime: 'req.Runtime',
  //       genre: 'req.Genre',
  //       director: 'req.Director',
  //       writer: 'req.Writer',
  //       actors: 'req.Actors',
  //       plot: 'req.Plot',
  //       language: 'req.Language',
  //       country: 'req.Country',
  //       awards: 'req.Awards',
  //       poster: 'req.Poster',
  //       ratings: 'JSON.stringify(req.Ratings)',
  //       metascore: 'req.Metascore',
  //       imdbRating: 'req.imdbRating',
  //       imdbVotes: 'req.imdbVotes',
  //       imdbID: 'req.imdbID',
  //       type: 'req.Type',
  //       dvd: 'req.DVD',
  //       boxOffice: 'req.BoxOffice',
  //       production: 'req.Production',
  //       website: 'req.Website',
  //       response: 'req.Response'
  //   });
  // })
  .then(() => {
    app.listen(3000);
  })
  .catch(err => console.log(err));
