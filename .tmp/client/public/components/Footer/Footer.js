'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer.css');

var _Footer2 = _interopRequireDefault(_Footer);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var socialList = void 0;
var brand = '../../src/images/netglitch.png';

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = {
      socials: [{
        href: 'https://www.facebook.com/Netglitch-639632836220315/',
        src: '../../src/images/facebook.png'
      }, {
        href: 'https://www.instagram.com/netglitch/',
        src: '../../src/images/instagram.png'
      }, {
        href: '#second', src: '../../src/images/twitter.png'
      }, {
        href: '#',
        src: '../../src/images/linkedin.png'
      }]
    };
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
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
        { id: 'seventh', className: 'is-fullwidth is-footer' },
        _react2.default.createElement(
          'section',
          { className: 'hero is-medium footer' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                  'div',
                  { className: 'column first_col-footer' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'title' },
                    'Contacts'
                  ),
                  _react2.default.createElement('div', { className: 'title_divider' }),
                  _react2.default.createElement(
                    'p',
                    { className: 'footer_description subtitle' },
                    'We\'re currently taking on new projects.',
                    _react2.default.createElement('br', null),
                    'Would you like to discuss yours?'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'footer_contacts' },
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column is-1' },
                        _react2.default.createElement(
                          'span',
                          { className: 'icon' },
                          _react2.default.createElement('i', { className: 'fa fa-phone' })
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'column is-11' },
                        _react2.default.createElement(
                          'a',
                          { href: '#' },
                          _react2.default.createElement(
                            'p',
                            { className: 'blue' },
                            '+39 3382097290'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'footer_contacts' },
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column is-1' },
                        _react2.default.createElement(
                          'span',
                          { className: 'icon' },
                          _react2.default.createElement('i', { className: 'fa fa-envelope-o' })
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'column is-11' },
                        _react2.default.createElement(
                          'a',
                          { href: 'mailto:netglitch.dev@email.com' },
                          _react2.default.createElement(
                            'p',
                            { className: 'blue' },
                            'netglitch.dev@gmail.com'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'footer_contacts' },
                    _react2.default.createElement(
                      'div',
                      { className: 'columns' },
                      _react2.default.createElement(
                        'div',
                        { className: 'column is-1' },
                        _react2.default.createElement(
                          'span',
                          { className: 'icon' },
                          _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' })
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'column is-11' },
                        _react2.default.createElement(
                          'p',
                          { className: 'blue' },
                          'Milan, Italy'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'column second_col-footer' },
                  _react2.default.createElement(
                    'div',
                    { 'data-wow-duration': '1.5s', className: 'wow fadeIn columns social_wrapper' },
                    socialList
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'column third_col-footer' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'title' },
                    'Hire Us'
                  ),
                  _react2.default.createElement('div', { className: 'title_divider' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'item button is-danger is-inverted is-outlined button_footer' },
                    'Get a Quote'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'hero-foot' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'nav',
                { className: 'level' },
                _react2.default.createElement(
                  'div',
                  { className: 'level-left' },
                  _react2.default.createElement(
                    'div',
                    { className: 'level-item footer_brand' },
                    _react2.default.createElement('img', { src: brand })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'level-right' },
                  _react2.default.createElement(
                    'div',
                    { className: 'level-item' },
                    _react2.default.createElement(
                      'p',
                      { className: 'subtitle is-5' },
                      'Copyright ',
                      _react2.default.createElement(
                        'b',
                        null,
                        'netglitch'
                      ),
                      ' 2017 | All Rights Reserved'
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

  return Footer;
}(_react.Component);

exports.default = Footer;
//# sourceMappingURL=Footer.js.map
