const { validationResult, ValidationChain } = require('express-validator')

const { ErrorApp } = require('../utils/ErroAppr')

const validate = validations => {
  return async (req, res, next) => {
    for (validation of validations) {

      const result = await validation.run(req)
      if (result.errors.length) break;
    }

    const errors = validationResult(req)
    
    if (errors.isEmpty()) return next()

    return next(new ErrorApp(errors.array(), 400))
  }
}

module.exports = { validate }