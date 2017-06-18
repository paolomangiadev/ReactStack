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

(0, _reactDom.render)(_react2.default.createElement(_Layout2.default, null), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
//# sourceMappingURL=index.js.map
