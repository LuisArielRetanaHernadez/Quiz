const express = require('express')

// utils
const { globalError } = require('./src/middlewares/globalError')

// routers
const { routerUser } = require('./src/routers/user.router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1/users', routerUser)
app.use(globalError)

module.exports = { app }
