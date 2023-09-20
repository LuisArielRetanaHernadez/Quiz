require('dotenv').config()

exports.globalError = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500
  error.status = error.status || 'Error'

  if (process.env.DEVELOPER_IN === 'Developer') {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
      error: error,
      stack: error.stack,
    })
  }
}