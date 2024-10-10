// controllers/quizController.js
const asyncHandler = require('express-async-handler');
const Quiz = require('../models/Quiz');
const calculateScore = require('../utils/calculateScore');

// @desc    Get all quizzes
// @route   GET /api/quizzes
// @access  Public
const getQuizzes = asyncHandler(async (req, res) => {
  const quizzes = await Quiz.find({});
  res.json(quizzes);
});

// @desc    Get a quiz by ID
// @route   GET /api/quizzes/:id
// @access  Public
const getQuizById = asyncHandler(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);

  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404);
    throw new Error('Quiz not found');
  }
});

// @desc    Create a new quiz
// @route   POST /api/quizzes
// @access  Public (Change to Private if authentication is added)
const createQuiz = asyncHandler(async (req, res) => {
  const { title, description, questions } = req.body;

  if (!title || !description || !questions || !Array.isArray(questions)) {
    res.status(400);
    throw new Error('Invalid quiz data');
  }

  const quiz = new Quiz({
    title,
    description,
    questions,
  });

  const createdQuiz = await quiz.save();
  res.status(201).json(createdQuiz);
});

// @desc    Update an existing quiz
// @route   PUT /api/quizzes/:id
// @access  Public (Change to Private if authentication is added)
const updateQuiz = asyncHandler(async (req, res) => {
  const { title, description, questions } = req.body;

  const quiz = await Quiz.findById(req.params.id);

  if (quiz) {
    quiz.title = title || quiz.title;
    quiz.description = description || quiz.description;
    quiz.questions = questions || quiz.questions;

    const updatedQuiz = await quiz.save();
    res.json(updatedQuiz);
  } else {
    res.status(404);
    throw new Error('Quiz not found');
  }
});

// @desc    Delete a quiz
// @route   DELETE /api/quizzes/:id
// @access  Public (Change to Private if authentication is added)
const deleteQuiz = asyncHandler(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);

  if (quiz) {
    await quiz.remove();
    res.json({ message: 'Quiz removed' });
  } else {
    res.status(404);
    throw new Error('Quiz not found');
  }
});

// @desc    Submit quiz answers and calculate score
// @route   POST /api/quizzes/:id/submit
// @access  Public
const submitQuiz = asyncHandler(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    res.status(404);
    throw new Error('Quiz not found');
  }

  const userAnswers = req.body.answers;

  if (!userAnswers || !Array.isArray(userAnswers)) {
    res.status(400);
    throw new Error('Invalid answers format');
  }

  if (userAnswers.length !== quiz.questions.length) {
    res.status(400);
    throw new Error('Number of answers does not match number of questions');
  }

  const score = calculateScore(quiz.questions, userAnswers);

  res.json({ score, total: quiz.questions.length });
});

module.exports = {
  getQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  submitQuiz,
};
