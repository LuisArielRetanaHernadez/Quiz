const express = require('express')
const passport = require('passport')

const { ErrorApp } = require('../utils/ErroAppr')

require('dotenv').config()
const router = express.Router()

router.get('/google/callback', 
  passport.authenticate('google', {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: '/login/failed',

  })
)

router.get('/login/failed', (req, res) => {
  return res.status(401).json({
    error: true,
    message: 'Login in failure'
  })
})

router.get('/login/success', (req, res) => {
  if (req.user) { 
    return res.status(200).json({
      error: false,
      message: 'SuccessFully Loged In',
      user: req.user
    })
  } else {
    return res.status(403).json({
      error: true,
      message: "Not Authorized"
    })
  }
})

router.get('/google', passport.authenticate('google', ['profile', 'email']))

router.get('/logout', (req, res) => {
  req.logOut()
  res.redirect(process.env.CLIENT_URL)
})

module.exports = { routerAuth: router }