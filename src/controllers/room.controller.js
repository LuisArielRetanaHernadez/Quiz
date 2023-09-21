// database -> models
const { User } = require('../database/models/user.model')
const { Room } = require('../database/models/room.model')
const { Question } = require('../database/models/question.model')
const { RoomUser } = require('../database/models/roomUser.model')

// utils
const { ErrorApp } = require('../utils/ErroAppr')
const tryCatch = require('../utils/catchAsyn.util')

// jwt
const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.createRoom = tryCatch( async(req, res, next) => {
  const { id } = req.currentUser

  const token = jwt.sign({idUser: id}, process.env.JWT_SECRET)

  const data = {
    ...req.body,
    IDuser: id,
    token
  }

  const roomNew = new Room(data)
  await roomNew.save()

  return res.status(202).json({
    status: 'Success',
    message: 'The Room successful create',
    data: {
      room: roomNew
    }
  })
})