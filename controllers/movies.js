const fetch = require('node-fetch');
const Movie = require('../models/movie');
const { token } = require('../secret/token');

exports.getIndex = (req, res, next) => {
  // console.log('GoT IT!!');
  res.redirect('/movies');
};

exports.getMovies = (req, res, next) => {
  Movie.findAll()
    .then((movies) => {
      // console.log(movies);
      res.render('movies', {
        path: '/movies',
        pageTitle: 'Your Movies',
        movies
      });
    })
    .catch(err => console.log(err));
};

exports.postMovie = (req, res, next) => {
  const { movieTitle } = req.body;
  const url = `https://www.omdbapi.com/?apikey=${token}&t=${movieTitle}`;
  fetch(url)
    .then(result => result.json())
    .then((responseData) => {
      return Movie.create({
        title: responseData.Title,
        year: responseData.Year,
        rated: responseData.Rated,
        released: responseData.Released,
        runtime: responseData.Runtime,
        genre: responseData.Genre,
        director: responseData.Director,
        writer: responseData.Writer,
        actors: responseData.Actors,
        plot: responseData.Plot,
        language: responseData.Language,
        country: responseData.Country,
        awards: responseData.Awards,
        poster: responseData.Poster,
        ratings: JSON.stringify(responseData.Ratings),
        metascore: responseData.Metascore,
        imdbRating: responseData.imdbRating,
        imdbVotes: responseData.imdbVotes,
        imdbID: responseData.imdbID,
        type: responseData.Type,
        dvd: responseData.DVD,
        boxOffice: responseData.BoxOffice,
        production: responseData.Production,
        website: responseData.Website,
        response: responseData.Response
      });
    })
    .then((results) => {
      res.redirect('/movies');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/movies');
    });
  // fetchMovieDetails
  //   .then(results => {
  //     console.log(results);
  //   });
  // const { movieId } = req.body;
  // if (movieTitle !== '') {
  //   res.render('movies', {
  //     path: '/movies',
  //     pageTitle: 'Your Movies',
  //     success: 'Movie not found. Please check its title!'
  //   });
  // }
  
  // next();
};
