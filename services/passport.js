const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleKeys = require('../config/keys.js');
const mongoose = require('mongoose');
const User = mongoose.model('user');

// user => user model
// Put some identifies piece of info. to the cookie
passport.serializeUser((user, done) => {
  // transform the user model from below to be id
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  });
});
// issue#1 - callbackURL relative path, when we deployed ('/auth/google/callback') to HEROKU
// http on Heroku - sol. https://shrouded-savannah-57144.herokuapp.com/ use the full path
// or proxy: true
passport.use(new GoogleStrategy(
    {
    clientID: GoogleKeys.googleClientID,
    clientSecret: GoogleKeys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);

        // Check if exists
        User.findOne({ googleId: profile.id })
          .then((existingUser) => {
            if (existingUser) {
              // we already have a record with this googleId
              console.log('We alr have a record');
              done(null, existingUser);
            } else {
              // we don't have this googleId, then create new one
              console.log('Create new user Id');
              new User({ googleId: profile.id })
                .save()
                .then((user) => { done(null, user); });
            }
          });
    }
  )
);
