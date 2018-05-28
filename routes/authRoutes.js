const passport = require('passport');

module.exports = (app) => {
  // Split from playgroun_index.js
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/current_user', (req, res) => {
    // res.send(req.user);
    res.send(req.session);
  }); //respond user model

  app.get('/api/logout', (req, res) => {
    req.logout(); // Take a cookie and kill ID in there
    res.send(req.user);
  });

  // @dev twitter authentication side project
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/'}),
    (req, res) => {
      res.send('hello');
    }
  );

};
