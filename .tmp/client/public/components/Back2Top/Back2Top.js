'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html = document.getElementsByTagName('html')[0];

var Back2Top = function (_Component) {
  _inherits(Back2Top, _Component);

  function Back2Top(props) {
    _classCallCheck(this, Back2Top);

    var _this = _possibleConstructorReturn(this, (Back2Top.__proto__ || Object.getPrototypeOf(Back2Top)).call(this, props));

    _this.state = {
      back2Top: false
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(Back2Top, [{
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

exports.default = Back2Top;
//# sourceMappingURL=Back2Top.js.map
