'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _fontAwesomeMin = require('font-awesome/css/font-awesome.min.css');

var _fontAwesomeMin2 = _interopRequireDefault(_fontAwesomeMin);

require('./src/fonts/Lato/Lato.scss');

require('./src/fonts/OpenSans/OpenSans.scss');

require('./src/fonts/Metropolis1920/Metropolis1920.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NODE_END = process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // set dev

(0, _reactDom.render)(_react2.default.createElement(_Layout2.default, null), document.getElementById('app'));

if (module.hot && NODE_END === 'development') {
  module.hot.accept();
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NODE_END, 'NODE_END', 'C:/Users/Paolo/Desktop/Reactstack/client/public/index.js');
}();

;
//# sourceMappingURL=index.js.map
