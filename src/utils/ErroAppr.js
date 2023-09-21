class ErrorApp extends Error {
  constructor(message, status) {
    super(message)
    this.message = message
    this.statusCode = status
    this.status = `${this.statusCode}`.startsWith(4) ? 'warring' : 'fail'
    Error.captureStackTrace(this, this.constructor)
  }

}

module.exports = { ErrorApp }