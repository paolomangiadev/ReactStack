'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var Navbar = function (_Component) {
  (0, _inherits3.default)(Navbar, _Component);

  function Navbar(props) {
    (0, _classCallCheck3.default)(this, Navbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call(this, props));

    _this.state = {
      menuOpen: false,
      currentLocation: _history2.default.location.pathname
    };
    return _this;
  }

  (0, _createClass3.default)(Navbar, [{
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
        new _promise2.default(function (resolve, reject) {
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

var _default = Navbar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Navbar, 'Navbar', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Navbar/Navbar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Navbar/Navbar.js');
}();

;
//# sourceMappingURL=Navbar.js.map
