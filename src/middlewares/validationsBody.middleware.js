const { validationResult, ValidationChain } = require('express-validator')

const { ErrorApp } = require('../utils/ErroAppr')

const validate = validations => {
  return async (req, res, next) => {
    for (validation of validations) {
      console.log(validation.fields)
      const result = await validation.run(req)
      if (result.errors.length) break;
    }

    const errors = validationResult(req)
    if (errors.isEmpty()) return next()

    // res.status(400).json({ errors: errors.array()})

    next(new ErrorApp(errors, 404))
  }
}

module.exports = { validate }