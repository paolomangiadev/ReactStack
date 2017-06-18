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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html = document.getElementsByTagName('html')[0];

var Services = function (_Component) {
  _inherits(Services, _Component);

  function Services(props) {
    _classCallCheck(this, Services);

    var _this = _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this, props));

    _this.state = {
      menuopen: false
    };
    return _this;
  }

  _createClass(Services, [{
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

exports.default = Services;
//# sourceMappingURL=Services.js.map
