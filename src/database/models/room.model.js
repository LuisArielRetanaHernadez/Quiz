const mongoose = require('mongoose')

const { Schema } = mongoose

const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  startTime: {
    type: Date,
    defaul: new Date(),
  },
  endTime: {
    type: Date,
  },
  points: {
    type: Number,
    required: true
  },
  places: {
    type: Number,
    usersFirst: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  password: {
    type: String,
    default: null
  },
  IDuser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const Room = mongoose.model('Room', roomSchema)

module.exports = { Room }