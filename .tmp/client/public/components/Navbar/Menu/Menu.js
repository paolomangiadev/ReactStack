'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('./Menu.css');

var _Menu2 = _interopRequireDefault(_Menu);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterHashLink = require('react-router-hash-link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Link } from 'react-router-dom';


var socialList = void 0;

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

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

  _createClass(Menu, [{
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

exports.default = Menu;
//# sourceMappingURL=Menu.js.map
