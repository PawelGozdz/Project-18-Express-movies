const express = require('express');

const commentController = require('../controllers/comments');

const router = express.Router();

// '/comments'
router.get('/comments', commentController.getComments);

router.get('/comments/:id', commentController.getSpecificComments);

// '/post comments'
router.post('/comments', commentController.postComment);

module.exports = router;
