// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const {
  getQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  submitQuiz,
} = require('../controllers/quizController');

// Route: /api/quizzes
router.route('/')
  .get(getQuizzes)
  .post(createQuiz);

// Route: /api/quizzes/:id
router.route('/:id')
  .get(getQuizById)
  .put(updateQuiz)
  .delete(deleteQuiz);

// Route: /api/quizzes/:id/submit
router.route('/:id/submit').post(submitQuiz);

module.exports = router;
