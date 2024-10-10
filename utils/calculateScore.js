// utils/calculateScore.js

/**
 * Calculates the score based on correct answers.
 * @param {Array} questions - Array of quiz questions from the database.
 * @param {Array} userAnswers - Array of user's answers.
 * @returns {number} - Total correct answers.
 */
const calculateScore = (questions, userAnswers) => {
    let score = 0;
  
    questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer && userAnswer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase()) {
        score += 1;
      }
    });
  
    return score;
  };
  
  module.exports = calculateScore;
  