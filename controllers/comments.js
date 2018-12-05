const Comment = require('../models/comment');
const Movie = require('../models/movie');

exports.postComment = (req, res, next) => {
  const { comment } = req.body;
  const { movieId } = req.body;
  Comment.create({ comment, movieId })
    .then(() => {
      res.redirect(`/comments/${movieId}`);
    })
    .catch(err => console.log(err));
};

exports.getComments = (req, res, next) => {
  Comment.findAll()
    .then((comments) => {
      res.render('comments', {
        path: '/comments',
        pageTitle: 'All Comments',
        comments
      });
    })
    .catch(err => console.log(err));
};

exports.getSpecificComments = (req, res, next) => {
  const { id } = req.params;
  let movieTitle;
  Movie.findById(id)
    .then((movie) => {
      movieTitle = movie.title;
    })
    .then(() => {
      Comment.findAll({ where: { movieId: id } })
        .then((comments) => {
          res.render('comments', {
            path: '/comments',
            pageTitle: 'Movie Comments',
            comments,
            movieTitle
          });
        })
    })
    .catch(err => console.log(err));
};
