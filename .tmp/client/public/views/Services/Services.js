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

var _Navbar = require('../../components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Menu = require('../../components/Navbar/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Header = require('../../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Utils = require('../../utils/Utils');

var _Utils2 = _interopRequireDefault(_Utils);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.getElementsByTagName('html')[0];

var Services = function (_Component) {
  (0, _inherits3.default)(Services, _Component);

  function Services(props) {
    (0, _classCallCheck3.default)(this, Services);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Services.__proto__ || (0, _getPrototypeOf2.default)(Services)).call(this, props));

    _this.state = {
      menuopen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Services, [{
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
    key: 'getTemplate',
    value: function getTemplate(service) {
      _axios2.default.get('http://localhost:3000/api/services/' + service.toLowerCase()).then(function (ok) {
        console.log('ok: ' + ok);
      }, function (ko) {
        console.log('ko: ' + ko);
      }).catch(function (err) {
        return console.log('error: ' + err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      //init of Plugins
      _Utils2.default.registerPlugins();
      this.getTemplate(this.props.match.params.service);
      console.log('heylaaaa' + this.props.match.params.service);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'particles-js' });
    }
  }]);
  return Services;
}(_react.Component);

var _default = Services;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(html, 'html', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Services/Services.js');

  __REACT_HOT_LOADER__.register(Services, 'Services', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Services/Services.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Services/Services.js');
}();

;
//# sourceMappingURL=Services.js.map
