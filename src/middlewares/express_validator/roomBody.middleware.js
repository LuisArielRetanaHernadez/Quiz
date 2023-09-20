const { body } = require('express-validator')

// utils
const { ErrorApp } = require('../../utils/ErroAppr')

const moment = require('moment')

exports.create = [
  body('title')
  .not().contains('  ')
  .notEmpty()
  .withMessage('Undefned title')
  .isString('Title must be String'),

  body('startTime')
  .optional()
  .isDate()
  .withMessage('The startTime must be Date()')
  .custom((value, { req }) => {
    if(moment(value, moment.ISO_8601, false).isValid()) {
      throw new ErrorApp('startTime must be form ISO 8601', 404)
    }
    const dateStart = moment(value)
    const dateCurrent = moment()

    if (dateStart.isBefore(dateCurrent)) {
      throw new ErrorApp('Date invalid', 404)
    }
    return true
  }),

  body('endTime')
  .optional()
  .isDate()
  .withMessage('The endTime must be Date() ISO 8601')
  .custom((value, { req }) => {
    
  })
]