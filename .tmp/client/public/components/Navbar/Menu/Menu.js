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

var _Menu = require('./Menu.css');

var _Menu2 = _interopRequireDefault(_Menu);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterHashLink = require('react-router-hash-link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socialList = void 0;
// import { Link } from 'react-router-dom';

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu(props) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props));

    _this.state = {
      socials: [{
        href: 'https://www.facebook.com/Netglitch-639632836220315/',
        src: '../../../src/images/facebook.png'
      }, {
        href: 'https://www.instagram.com/netglitch/',
        src: '../../../src/images/instagram.png'
      }, {
        href: '#second',
        src: '../../../src/images/twitter.png'
      }, {
        href: '#',
        src: '../../../src/images/linkedin.png'
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.props.redirect(false);
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.socials) {
        socialList = _.map(this.state.socials, function (item) {
          return _react2.default.createElement(
            'a',
            { href: item.href, key: item.src },
            _react2.default.createElement(
              'div',
              { className: 'column socials' },
              _react2.default.createElement('img', { src: item.src })
            )
          );
        });
      }

      return _react2.default.createElement(
        'section',
        { className: 'hero is-fullheight', id: 'burgerMenu' },
        _react2.default.createElement(
          'div',
          { className: 'hero-body' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'nav',
              { className: 'columns' },
              _react2.default.createElement(
                'div',
                { className: 'column is-half', id: 'socialsMenu' },
                _react2.default.createElement(
                  'div',
                  { className: 'has-text-left socials-level' },
                  socialList
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'column is-half', id: 'linksMenu' },
                _react2.default.createElement(
                  'div',
                  { className: 'has-text-right' },
                  _react2.default.createElement(
                    'ul',
                    { className: 'menu-list' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterHashLink.HashLink,
                        { className: 'blue', to: '/#second', onClick: this.toggleMenu.bind(this) },
                        'What we do'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterHashLink.HashLink,
                        { className: 'blue', to: '/#third', onClick: this.toggleMenu.bind(this) },
                        'Services'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterHashLink.HashLink,
                        { className: 'blue', to: '/#sixth', onClick: this.toggleMenu.bind(this) },
                        'Hire Us'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouterHashLink.HashLink,
                        { className: 'blue', to: '#seventh', onClick: this.toggleMenu.bind(this) },
                        'Contact US'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Menu;
}(_react.Component);

var _default = Menu;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(socialList, 'socialList', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Navbar/Menu/Menu.js');

  __REACT_HOT_LOADER__.register(Menu, 'Menu', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Navbar/Menu/Menu.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Navbar/Menu/Menu.js');
}();

;
//# sourceMappingURL=Menu.js.map
