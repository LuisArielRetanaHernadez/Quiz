// uitls
const { ErrorApp } = require('../utils/ErroAppr')
const tryCatch = require('../utils/catchAsyn.util')

const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.authUser = tryCatch( async (req, res, next) => {
  let token = null
  
  if (
    req.headers.authorization
    && req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  } else {
    return next( new ErrorApp('Not authorized', 401))
  }

  const tokenValid = jwt.verify(token, process.env.JWT_SECRET)

  if (!tokenValid) {
    return next( new ErrorApp('Not Authorized', 401))
  }

  req.currentUser = tokenValid

  return next()
})