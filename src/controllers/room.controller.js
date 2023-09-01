// database -> models
const { User } = require('../database/models/user.model')
const { Room } = require('../database/models/room.model')
const { Question } = require('../database/models/question.model')

// utils
const { ErrorApp } = require('../utils/ErroAppr')
const tryCatch = require('../utils/catchAsyn.util')
exports.createRoom = 