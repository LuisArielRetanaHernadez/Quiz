const express = require('express')

// controllers
const {
  createRoom
} = require('../controllers/room.controller')

// middleware
const { authUser } = require('../middlewares/auth.middleware')
const { validate } = require('../middlewares/validationsBody.middleware')

// body
const { create } = require('../middlewares/express_validator/roomBody.middleware')

const router = express.Router()

router.post('/', authUser, validate(create), createRoom)

module.exports = { routerRoom: router}