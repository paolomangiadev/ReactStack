'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = function _default(app) {
  app.use('/api/quotes', require('./api/quotes'));
  app.use('/api/services', require('./api/services'));
};

exports.default = _default;
;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/server/routes.js');
}();

;
//# sourceMappingURL=routes.js.map
