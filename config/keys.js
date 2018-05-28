// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  // we're in production - return the prod keys
  module.exports = require('./prod.js');
} else {
  // we're in development - return the dev keys
  module.exports = require('./dev.js');
}
