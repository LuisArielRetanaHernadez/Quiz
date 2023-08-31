const express = require('express')

// controller
const { createUser, loginUser } = require('../controllers/user.controller')

// middleware
const { validate } = require('../middlewares/validationsBody.middleware')
const { register } = require('../middlewares/express_validator/user.middleware')
const router = express.Router()

router.post('/', validate(register), createUser)
router.post('/login', loginUser)

module.exports = { routerUser: router }

