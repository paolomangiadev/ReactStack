'use strict';

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  // Register the Babel require hook
  require('babel-register');
}

// Export the application
exports = module.exports = require('./server');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(env, 'env', 'C:/Users/Paolo/Desktop/Reactstack/server/index.js');
}();

;
//# sourceMappingURL=index.js.map
