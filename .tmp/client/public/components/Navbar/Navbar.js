'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar.css');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _smoothScrollMin = require('../../external-libraries/smoothscroll/smooth-scroll.min.js');

var _smoothScrollMin2 = _interopRequireDefault(_smoothScrollMin);

var _reactRouterHashLink = require('react-router-hash-link');

var _history = require('../../history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = {
      menuOpen: false,
      currentLocation: _history2.default.location.pathname
    };
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Listen for changes to the current location.
      _history2.default.listen(function (location, action) {
        // location is an object like window.location
        _this2.setState({ currentLocation: location.pathname });
      });
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      var _this3 = this;

      console.log('this is the current state: ' + this.state.menuOpen);
      if (this.state.menuOpen === true) {
        this.setState({ menuOpen: false });
      } else {
        new Promise(function (resolve, reject) {
          resolve(_smoothScrollMin2.default.animateScroll(0));
        }).then(function () {
          _this3.setState({ menuOpen: true });
        });
        console.log('state has been set to: ' + this.state.menuOpen);
      }
      this.props.onUpdate(this.state.menuOpen);
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      _history2.default.goBack();
    }
  }, {
    key: 'redirect',
    value: function redirect(clicked) {
      this.setState({ menuOpen: clicked });
      this.props.onUpdate(this.state.menuOpen);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'NavbarWrapper' },
        _react2.default.createElement(
          'div',
          { className: 'hero-head custom-header' },
          _react2.default.createElement(
            'header',
            { className: 'nav' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'nav-left' },
                _react2.default.createElement(
                  'a',
                  { onClick: this.goBack.bind(this), className: (0, _classnames2.default)('nav-item', { backtoHome: this.state.currentLocation != "/" }) },
                  _react2.default.createElement('i', { className: 'fa fa-arrow-circle-left', 'aria-hidden': 'true' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'toggle-menu' },
                _react2.default.createElement(
                  'a',
                  { className: 'anchor_wrapper', onClick: this.toggleMenu.bind(this) },
                  _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('toggle-menu_wrapper', { openMenu: this.state.menuOpen }) },
                    _react2.default.createElement('span', { className: 'toggle-menu_line toggle-menu_line-first' }),
                    _react2.default.createElement('span', { className: 'toggle-menu_line toggle-menu_line-second' }),
                    _react2.default.createElement('span', { className: 'toggle-menu_line toggle-menu_line-third' }),
                    _react2.default.createElement(
                      'div',
                      { className: 'toggle-menu_cross-wrapper' },
                      _react2.default.createElement('span', { className: 'toggle-menu_line toggle-menu_cross-first' }),
                      _react2.default.createElement('span', { className: 'toggle-menu_line toggle-menu_cross-second' })
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(_Menu2.default, { redirect: this.redirect.bind(this) })
      );
    }
  }]);

  return Navbar;
}(_react.Component);

exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map
