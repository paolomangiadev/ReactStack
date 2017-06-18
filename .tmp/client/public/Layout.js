'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Navbar = require('./components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Menu = require('./components/Navbar/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Back2Top = require('./components/Back2Top');

var _Back2Top2 = _interopRequireDefault(_Back2Top);

var _reactRouterHashLink = require('react-router-hash-link');

var _Responsive = require('./Responsive.css');

var _Responsive2 = _interopRequireDefault(_Responsive);

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _Home = require('./views/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Services = require('./views/Services');

var _Services2 = _interopRequireDefault(_Services);

var _GetAQuote = require('./views/GetAQuote');

var _GetAQuote2 = _interopRequireDefault(_GetAQuote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ALL ROUTES
//home page
//webdesign page


// get-a-quote page

var html = document.getElementsByTagName('html')[0];

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));

    _this.state = {
      menuopen: false
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'onUpdate',
    value: function onUpdate(menuState) {
      if (menuState === false) {
        this.setState({ menuopen: true });
        html.classList.add("noscroll");
      } else {
        this.setState({ menuopen: false });
        html.classList.remove("noscroll");
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('appwrapper', { menuopen: this.state.menuopen }) },
        _react2.default.createElement(
          _reactRouterDom.Router,
          { history: _history2.default },
          _react2.default.createElement(
            'main',
            null,
            _react2.default.createElement(_Navbar2.default, { onUpdate: this.onUpdate.bind(this) }),
            _react2.default.createElement('div', { className: 'black-bg' }),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/services/:service', component: _Services2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/get-a-quote', component: _GetAQuote2.default })
            ),
            _react2.default.createElement(_Back2Top2.default, null),
            _react2.default.createElement(_Footer2.default, null)
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=Layout.js.map
