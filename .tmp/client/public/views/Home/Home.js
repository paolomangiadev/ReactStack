'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _particlesMin = require('../../external-libraries/particles/particles.min.js');

var _particlesMin2 = _interopRequireDefault(_particlesMin);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _bulma = require('bulma/css/bulma.css');

var _bulma2 = _interopRequireDefault(_bulma);

var _Home = require('./Home.css');

var _Home2 = _interopRequireDefault(_Home);

var _Utils = require('../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Aboutus = require('./Aboutus');

var _Aboutus2 = _interopRequireDefault(_Aboutus);

var _Masonry = require('./Masonry');

var _Masonry2 = _interopRequireDefault(_Masonry);

var _Quotes = require('./Quotes');

var _Quotes2 = _interopRequireDefault(_Quotes);

var _LetUsKnow = require('./LetUsKnow');

var _LetUsKnow2 = _interopRequireDefault(_LetUsKnow);

var _Apptypes = require('./Apptypes');

var _Apptypes2 = _interopRequireDefault(_Apptypes);

var _Footer = require('../../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.getElementsByTagName('html')[0];

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //init of Plugins
      _Utils2.default.registerPlugins();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Aboutus2.default, null),
        _react2.default.createElement(_Masonry2.default, null),
        _react2.default.createElement(_Quotes2.default, null),
        _react2.default.createElement(_LetUsKnow2.default, null),
        _react2.default.createElement(_Apptypes2.default, null)
      );
    }
  }]);
  return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(html, 'html', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Home.js');

  __REACT_HOT_LOADER__.register(Home, 'Home', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Home.js');
}();

;
//# sourceMappingURL=Home.js.map
