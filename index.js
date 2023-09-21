const express = require('express')

// const passport = require('passport')

const cors = require('cors')

// utils
const { globalError } = require('./src/middlewares/globalError')

// routers
const { routerUser } = require('./src/routers/user.router')
const { routerAuth } = require('./src/routers/auth.router')
const { routerRoom } = require('./src/routers/room.router')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.use(passport.initialize())
// app.use(passport.session())

app.use(cors())

app.use('/api/v1/users', routerUser)
app.use('/api/v1/auth', routerAuth)
app.use('/api/v1/room', routerRoom)
app.use(globalError)

module.exports = { app }
