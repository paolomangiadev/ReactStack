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

var _Back2Top = require('./Back2Top.css');

var _Back2Top2 = _interopRequireDefault(_Back2Top);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _smoothScrollMin = require('../../external-libraries/smoothscroll/smooth-scroll.min.js');

var _smoothScrollMin2 = _interopRequireDefault(_smoothScrollMin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.getElementsByTagName('html')[0];

var Back2Top = function (_Component) {
  (0, _inherits3.default)(Back2Top, _Component);

  function Back2Top(props) {
    (0, _classCallCheck3.default)(this, Back2Top);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Back2Top.__proto__ || (0, _getPrototypeOf2.default)(Back2Top)).call(this, props));

    _this.state = {
      back2Top: false
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Back2Top, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //check window scroll
      window.addEventListener('scroll', this.handleScroll);
      //init of smooth-scroll
      _smoothScrollMin2.default.init({
        speed: 700, // Integer. How fast to complete the scroll in milliseconds
        offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeOutCubic',
        before: function before(anchor, toggle) {
          html.classList.remove("noscroll");
        }
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(event) {
      var scrollTop = event.srcElement ? event.srcElement.body.scrollTop : event.pageY;
      if (scrollTop > 450) {
        this.setState({ back2Top: true });
      } else {
        this.setState({ back2Top: false });
      }
    }
  }, {
    key: 'scrolltoTop',
    value: function scrolltoTop() {
      _smoothScrollMin2.default.animateScroll(0);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { onClick: this.scrolltoTop, className: (0, _classnames2.default)('toTopAnchor', { back2Top: this.state.back2Top }) },
          _react2.default.createElement('img', { src: '../src/images/arrowup.png' })
        )
      );
    }
  }]);
  return Back2Top;
}(_react.Component);

var _default = Back2Top;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(html, 'html', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Back2Top/Back2Top.js');

  __REACT_HOT_LOADER__.register(Back2Top, 'Back2Top', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Back2Top/Back2Top.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/components/Back2Top/Back2Top.js');
}();

;
//# sourceMappingURL=Back2Top.js.map
