// @dev twitter authentication side project

const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const TwitterKeys = require('../config/keys.js');
const mongoose = require('mongoose');
// const User = mongoose.model('user');

passport.use(new TwitterStrategy(
  {
    consumerKey: TwitterKeys.TWITTER_CONSUMER_KEY,
    consumerSecret: TwitterKeys.TWITTER_CONSUMER_SECRET,
    callbackURL: 'http://localhost:3000/auth/twitter/callback'
  }, (token, tokenSecret, profile, cb) => {
    console.log('TOKEN : ', token);
    console.log('TOKENSECRET : ', tokenSecret);
    console.log('PROFILE : ', profile);
  }
));
