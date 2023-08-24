const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }