const { body, matchedData, check } = require('express-validator')

// utils

const { ErrorApp } = require('../../utils/ErroAppr')

exports.register = [
  body('email')
  .isEmail()
  .trim(),

  body('password')
  .notEmpty()
  .withMessage('the chain is empty')
  .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{10,}$/)
  .withMessage('The chain does not meet the required conditions')
  .custom((value, { req }) => {
    const { password_confirm } = req.body
    if (value !== password_confirm) {
      console.log('password_confirm ', password_confirm)
      throw new ErrorApp('The confirmation password is different from the first password', 404)
    }
    return true
  }),

  body('name')
  .notEmpty()
  .withMessage('The chain is empty')
  .isString()
  .not().contains('  ')
  .withMessage('The chain does not meet the requerid conditions'),

  body('age')
  .isNumeric()
  .withMessage('The age must be of type numer')
  .custom((value, { req }) => {
    if (value.toString().length > 2) {
      throw new ErrorApp('The number must have more than 2 digits')
    }
    return true
  })
]