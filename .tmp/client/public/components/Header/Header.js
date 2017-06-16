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

var _Header = require('./Header.scss');

var _Header2 = _interopRequireDefault(_Header);

var _Navbar = require('../Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Menu = require('../Navbar/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterHashLink = require('react-router-hash-link');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var brand = '../../../src/images/netglitch.png';
var line = '../../../src/images/line.png';

var socialList = void 0;
var html = document.getElementsByTagName('html')[0];

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.state = {
      socials: [{
        href: 'https://www.facebook.com/Netglitch-639632836220315/',
        src: '../../../src/images/facebook.png'
      }, {
        href: 'https://www.instagram.com/netglitch/',
        src: '../../../src/images/instagram.png'
      }, {
        href: '#second', src: '../../../src/images/twitter.png'
      }, {
        href: '#',
        src: '../../../src/images/linkedin.png'
      }],
      menuopen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
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

      if (this.state.socials) {
        socialList = _lodash2.default.map(this.state.socials, function (item) {
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
        'div',
        { id: 'first', className: (0, _classnames2.default)('is-fullwidth', 'is-background', { menuopen: this.state.menuopen }) },
        _react2.default.createElement(
          'section',
          { className: 'hero trasparent is-medium is-fullheight Home', id: 'particles-js' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container has-text-centered main_container' },
              _react2.default.createElement(
                'div',
                { 'data-wow-duration': '0.7s', className: 'wow fadeInDown we-are' },
                _react2.default.createElement(
                  'div',
                  { className: 'line line_pre' },
                  _react2.default.createElement('img', { src: line })
                ),
                _react2.default.createElement(
                  'span',
                  null,
                  'We are'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'line line_post' },
                  _react2.default.createElement('img', { src: line })
                )
              ),
              _react2.default.createElement(
                'span',
                { 'data-wow-duration': '0.7s', className: 'wow fadeIn title brand' },
                _react2.default.createElement('img', { src: brand })
              ),
              _react2.default.createElement(
                'div',
                { className: 'subtitle' },
                _react2.default.createElement(
                  'div',
                  { 'data-wow-duration': '0.7s', className: 'wow fadeInUp get-quote' },
                  _react2.default.createElement(
                    'div',
                    { className: 'get-quote_wrapper left_wrapper' },
                    _react2.default.createElement(
                      'a',
                      { className: 'item item_left' },
                      'Services'
                    ),
                    _react2.default.createElement('div', { className: 'item item_line item_line_left' }),
                    _react2.default.createElement(
                      _reactRouterHashLink.HashLink,
                      { to: '/get-a-quote', className: 'item button is-danger is-inverted is-outlined' },
                      'Get a Quote'
                    ),
                    _react2.default.createElement('div', { className: 'item item_line item_line_right' }),
                    _react2.default.createElement(
                      'a',
                      { className: 'item item_right' },
                      'Jobs'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { 'data-wow-duration': '3s', className: 'wow fadeIn columns social_wrapper' },
                socialList
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'arrow_down' },
            _react2.default.createElement('i', { className: 'fa fa-angle-down', 'aria-hidden': 'true' })
          )
        )
      );
    }
  }]);
  return Header;
}(_react.Component);

var _default = Header;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(brand, 'brand', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(line, 'line', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(socialList, 'socialList', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(html, 'html', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Header/Header.js');
}();

;
//# sourceMappingURL=Header.js.map
