
const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  questionText: {
    type: String,
    required: [true, 'Please add a question text'],
  },
  answerChoices: [
    {
      type: String,
      required: [true, 'Please add an answer choice'],
    },
  ],
  correctAnswer: {
    type: String,
    required: [true, 'Please add the correct answer'],
  },
});

const quizSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a quiz title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a quiz description'],
    },
    questions: [questionSchema],
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
