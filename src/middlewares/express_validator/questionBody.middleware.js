const { body } = require('express-validator')

// utils

const { ErrorApp } = require('../../utils/ErroAppr')

exports.create = [
  body('answer')
  .notEmpty()
  .withMessage('Undefined answer')
  .isArray()
  .withMessage('answer nust be an array'),
  body('answer.*')
  .isString()
  .withMessage('answer must be string'),
  body('answer_correct.*')
  .isString()
  .withMessage('answer correct must be string'),
  body('question')
  .notEmpty()
  .withMessage('Undefined question')
  .isString()
  .withMessage('question must be string')
]