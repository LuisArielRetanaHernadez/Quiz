const express = require('express')
const passport = require('passport')

const { ErrorApp } = require('../utils/ErroAppr')

require('dotenv').config()
const router = express.Router()

router.get('/auth/google', passport.authenticate('google', { 
  scope: ['email', 'profile']
}))

router.get('auth/google/redirect', passport.authenticate('google'), {
  failureRedirect: "login"
})

module.exports = { routerAuth: router }