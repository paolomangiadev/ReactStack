'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html = document.getElementsByTagName('html')[0];

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
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

exports.default = Home;
//# sourceMappingURL=Home.js.map
