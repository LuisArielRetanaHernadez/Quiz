const mongoose = require('mongoose')

const { Schema } = mongoose

const questionSchema = new Schema({
  roomID: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  Question: {
    type: String,
    required: true
  },
  correct_question: {
    type: [String],
    required: true
  },
  incorrect_question: {
    type: [String],
    required: true
  },
  roomID: {
    type: Schema.Types.ObjectId,
    ref: 'room'
  }
})

const Question = mongoose.model('Question', questionSchema)

module.exports = { Question }