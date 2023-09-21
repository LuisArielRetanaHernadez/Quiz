const mongoose = require('mongoose')

const { Schema } = mongoose

const roomQuestionSchema = new Schema({
  IDquestion: {
    type: Schema.Types.ObjectId,
    ref: 'Question'
  },
  IDroomUser: { 
    type: Schema.Types.ObjectId,
    ref: 'RoomUser'
  },
  answer: {
    type: String,
    required: true
  },
  answer_correct: {
    type: String,
    required: true
  },
  is_correct: {
    type: Boolean,
    required: true
  }
})

const RoomQuestion = mongoose.model('RoomQuestion', roomQuestionSchema)

module.exports = { RoomQuestion }