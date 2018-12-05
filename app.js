const path = require('path');

const port = procecs.env.PORT || 3000;

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
  .sync({ force: true })
  // .sync()
  .then(() => {
    app.listen(port);
  })
  .catch(err => console.log(err));
