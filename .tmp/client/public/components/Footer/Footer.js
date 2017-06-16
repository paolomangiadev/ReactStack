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

var _Footer = require('./Footer.css');

var _Footer2 = _interopRequireDefault(_Footer);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socialList = void 0;
var brand = '../../src/images/netglitch.png';

var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer(props) {
    (0, _classCallCheck3.default)(this, Footer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call(this, props));

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

  (0, _createClass3.default)(Footer, [{
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

var _default = Footer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(socialList, 'socialList', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Footer/Footer.js');

  __REACT_HOT_LOADER__.register(brand, 'brand', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Footer/Footer.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Footer/Footer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Footer/Footer.js');
}();

;
//# sourceMappingURL=Footer.js.map
