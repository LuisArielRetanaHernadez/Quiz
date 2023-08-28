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
}, {
  methods: {
    findGoogleOrCreate(cb) {
      return mongoose.model('User').findOne({googleID: this.googleId}, cb)
    }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }