const express = require('express')

// controllers
const {
  createRoom, 
  createQuiz
} = require('../controllers/room.controller')

// middleware
const { authUser, protectRoom } = require('../middlewares/auth.middleware')
const { validate } = require('../middlewares/validationsBody.middleware')

// body
const { create } = require('../middlewares/express_validator/roomBody.middleware')

const router = express.Router()

router.post('/', authUser, validate(create), createRoom)
router.post('/:id/create/quiz', authUser, protectRoom, createQuiz)

module.exports = { routerRoom: router}