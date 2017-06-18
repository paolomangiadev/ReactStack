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

var _Quotes = require('./Quotes.css');

var _Quotes2 = _interopRequireDefault(_Quotes);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quote = {};
var isMounted = false;

var Quotes = function (_Component) {
  (0, _inherits3.default)(Quotes, _Component);

  function Quotes(props) {
    (0, _classCallCheck3.default)(this, Quotes);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Quotes.__proto__ || (0, _getPrototypeOf2.default)(Quotes)).call(this, props));

    _this.state = {
      quote: quote
    };
    return _this;
  }

  (0, _createClass3.default)(Quotes, [{
    key: 'startPolling',
    value: function startPolling() {
      var self = this;
      this.timestart = setTimeout(function () {
        console.log('isMounted: ' + isMounted);
        if (!isMounted) {
          return;
        } // abandon
        self.poll(); // do it once and then start it up ...
        self._timer = setInterval(self.poll.bind(self), 13000);
      }, 10);
    }
  }, {
    key: 'decodeEntities',
    value: function decodeEntities(str) {
      // this prevents any overhead from creating the object each time
      var element = document.createElement('div');
      if (str && typeof str === 'string') {
        // strip script/html tags
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
      return str;
    }
  }, {
    key: 'poll',
    value: function poll() {
      var _this2 = this;

      var self = this;
      _axios2.default.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=' + new Date().getTime()).then(function (response) {
        var data = response.data[0];
        data.content = _this2.decodeEntities(response.data[0].content);
        data.title = _this2.decodeEntities(response.data[0].title);
        if (data.content.length < 200) {
          _this2.setState({ quote: data });
        } else {
          console.log('too long');
          _this2.poll();
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startPolling();
      isMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      isMounted = false;
      clearInterval(this._timer);
      this._timer = false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'fourth', className: 'is-fullwidth is-quotes', onClick: this.poll.bind(this) },
        _react2.default.createElement(
          'section',
          { className: 'hero is-fullheight quotes' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { 'data-wow-duration': '0.7s', className: 'wow fadeIn container has-text-centered' },
              _react2.default.createElement(
                'h1',
                { className: 'title' },
                'Quotes We Love'
              ),
              _react2.default.createElement(
                'div',
                { className: 'quotes_container' },
                _react2.default.createElement(
                  'div',
                  { className: 'quote_text' },
                  _react2.default.createElement(
                    'p',
                    null,
                    (0, _reactHtmlParser2.default)(this.state.quote.content),
                    ' '
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'quote_author' },
                  '- ',
                  this.state.quote.title,
                  ' -'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'apiby' },
            _react2.default.createElement(
              'span',
              { className: 'white' },
              'API by '
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://quotesondesign.com', target: '_blank', className: 'blue' },
              'quotesondesign.com'
            )
          )
        )
      );
    }
  }]);
  return Quotes;
}(_react.Component);

var _default = Quotes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(quote, 'quote', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Quotes/Quotes.js');

  __REACT_HOT_LOADER__.register(isMounted, 'isMounted', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Quotes/Quotes.js');

  __REACT_HOT_LOADER__.register(Quotes, 'Quotes', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Quotes/Quotes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Quotes/Quotes.js');
}();

;
//# sourceMappingURL=Quotes.js.map