'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LetUsKnow = require('./LetUsKnow.css');

var _LetUsKnow2 = _interopRequireDefault(_LetUsKnow);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quotes = function (_Component) {
  _inherits(Quotes, _Component);

  function Quotes(props) {
    _classCallCheck(this, Quotes);

    var _this = _possibleConstructorReturn(this, (Quotes.__proto__ || Object.getPrototypeOf(Quotes)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Quotes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'fifth', className: 'is-fullwidth is-letusknow' },
        _react2.default.createElement(
          'section',
          { className: 'hero is-medium has-text-centered' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'h1',
                { 'data-wow-duration': '0.7s', className: 'wow fadeInDown title letusknow_title' },
                'LET US KNOW ABOUT YOUR PROJECT!'
              ),
              _react2.default.createElement(
                'p',
                { 'data-wow-duration': '0.7s', className: 'wow fadeInUp subtitle letusknow_subtitle' },
                'Whether you\'d like to build a Web or Mobile application we bring your ideas to life in a short amount of time deploying a fast a intuitive user experience with the help of the latest technologies around.'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'hero' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body has-text-centered' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'h1',
                { 'data-wow-duration': '0.7s', className: 'wow fadeIn title' },
                'What would you like to create?'
              )
            )
          )
        )
      );
    }
  }]);

  return Quotes;
}(_react.Component);

exports.default = Quotes;
//# sourceMappingURL=LetUsKnow.js.map
