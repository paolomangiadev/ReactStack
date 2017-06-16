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

// get-a-quote page

//home page
var html = document.getElementsByTagName('html')[0]; //webdesign page


// ALL ROUTES

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.state = {
      menuopen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
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

var _default = Layout;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(html, 'html', 'C:/Users/Paolo/Desktop/Reactstack/client/public/Layout.js');

  __REACT_HOT_LOADER__.register(Layout, 'Layout', 'C:/Users/Paolo/Desktop/Reactstack/client/public/Layout.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/Layout.js');
}();

;
//# sourceMappingURL=Layout.js.map
