const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleKeys = require('./config/keys.js');

const app = express();

// https://console.developers.google.com/

passport.use(new GoogleStrategy(
    {
    clientID: GoogleKeys.googleClientID,
    clientSecret: GoogleKeys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);
        console.log('profile', profile);
    }
  )
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on PORT : ${PORT}`);
});
