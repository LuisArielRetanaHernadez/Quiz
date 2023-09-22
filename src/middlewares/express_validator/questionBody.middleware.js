const { body } = require('express-validator')

// utils

const { ErrorApp } = require('../../utils/ErroAppr')

exports.validatedQuiz = [
  body('answers')
  .notEmpty()
  .withMessage('Undefined answer')
  .isArray()
  .withMessage('answer nust be an array'),
  body('answers.*')
  .isString()
  .withMessage('answer must be string'),
  body('correct_answer.*')
  .isString()
  .withMessage('answer correct must be string'),
  body('question')
  .notEmpty()
  .withMessage('Undefined question')
  .isString()
  .withMessage('question must be string')
]