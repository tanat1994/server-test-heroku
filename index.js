const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User.js');
require('./services/passport.js');
require('./services/passport-twitter-authen.js'); // side project

mongoose.connect(keys.mongoURI);

const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(
  cookieSession({
    name: 'dev-session',
    keys: [keys.cookieKey],
    // Cookie Options
    maxAge: 30 * 24 * 60 * 60 * 1000 // 24 hours for 30 days
  })
);
app.use(passport.initialize());
app.use(passport.session());


authRoutes(app); // Make authRoutes can use Express.js
// require('./routes/authRoutes')(app) // other ways to do.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on PORT : ${PORT}`);
});
