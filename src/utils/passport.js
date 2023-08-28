const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')

// model
const { User } = require('../database/models/user.model')

require('dotenv').config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },

    (accessToken, refreshToken, profile, done) => {

      User.findGoogleOrCreate({googleId: profile.id}, (err, user) => {
        if (err) return done(err)

        if(!user) {
          user = new User({
            email: profile.emails[0].value,
            name: profile.displayName,
            googleId: profile.id
          })

          user.save((err) => {
            if (err) return done(err)
            return done(null, user)
          })

        } else {
          return done(null, user)
        }

      })

    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})