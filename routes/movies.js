
const express = require('express');

const movieController = require('../controllers/movies');

const router = express.Router();

// Default index page
router.get('/', movieController.getIndex);

// '/movies'
router.get('/movies', movieController.getMovies);

// '/add-movie'
router.post('/movies', movieController.postMovie);

module.exports = router;
