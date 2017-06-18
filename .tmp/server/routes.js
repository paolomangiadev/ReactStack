'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use('/api/quotes', require('./api/quotes'));
  app.use('/api/services', require('./api/services'));
};

;
//# sourceMappingURL=routes.js.map
