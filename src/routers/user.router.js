const express = require('express')

// controller
const { createUser } = require('../controllers/user.controller')

// middleware
const { validate } = require('../middlewares/validationsBody.middleware')
const { register } = require('../middlewares/express_validator/user.middleware')
const router = express.Router()

router.post('/', validate(register), createUser)

module.exports = { routerUser: router }

