class ErrorApp extends Error {
  constructor(message, status, statusCode) {
    super(message)
    this.message = message
    this.statusCode = statusCode
    this.status = `${this.statusCode}`.startsWith(4) ? 'warring' : 'fail'
    Error.captureStackTrace(this, this.constructor)
  }

}

module.exports = { ErrorApp }