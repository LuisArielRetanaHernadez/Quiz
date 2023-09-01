const mongoose = require('mongoose')

const { Schema } = mongoose

const roomUserSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  roomID: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
  },
  Points: {
    type: Number,
  },
  Approved: {
    type: Boolean,
    default: false,
  },
  Aplace: {
    type: Number,
  },
  isPlace: {
    type: Boolean,
    default: false
  }
})

const RoomUser = mongoose.model('RoomUser', roomUserSchema)

module.exports = { RoomUser }