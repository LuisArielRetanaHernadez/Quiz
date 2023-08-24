const mongoose = require('mongoose')

require('dotenv').config()

// uitls
const { ErrorApp } = require('../utils/ErroAppr')
exports.conn = async () =>{
  return await mongoose.connect(process.env.BD_URL)
  .catch( new ErrorApp('errro connect for database'))
}
