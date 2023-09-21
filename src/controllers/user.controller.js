// database -> models
const { User } = require('../database/models/user.model')

// utils
const { ErrorApp } = require('../utils/ErroAppr')
const tryCatch = require('../utils/catchAsyn.util')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

require('dotenv').config()

exports.createUser = tryCatch( async (req, res, next) => {
  // If not register Email
  const { email } = req.body

  const findEamil = await User.findOne({email}).exec()

  if (findEamil) return next( new ErrorApp('It Email it is registered', 404))
  
  const salt = bcrypt.genSaltSync(8);
  const passwordBcypt = bcrypt.hashSync(req.body.password, salt)

  const user = {
    ...req.body,
    password: passwordBcypt,
    password_confimr: undefined,
  }


  const userNew = new User(user) 
  
  await userNew.save()

  userNew.password = undefined

  return res.status(202).json({
    status: 'Success',
    menssage: 'The successful registration',
    data: userNew
  })
})

exports.loginUser = tryCatch( async (req, res, next) => {
  const { email, password } = req.body
  const userFind = await User.findOne({email})

  if (!userFind) {
    return next( new ErrorApp('Login fail', 404))
  }

  const isPassword = bcrypt.compareSync(password, userFind.password)

  if (!isPassword) {
    return next( new ErrorApp('Login fail', 404))
  }

  const token = jwt.sign({id: userFind._id}, process.env.JWT_SECRET, { expiresIn: '3min' })

  userFind.password = undefined

  return res.status(202).json({
    message: 'ssuccesfy login',
    user: {
      ...userFind._doc
    },
    token
  })
})