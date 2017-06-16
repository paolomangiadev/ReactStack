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

var _LetUsKnow = require('./LetUsKnow.css');

var _LetUsKnow2 = _interopRequireDefault(_LetUsKnow);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Quotes = function (_Component) {
  (0, _inherits3.default)(Quotes, _Component);

  function Quotes(props) {
    (0, _classCallCheck3.default)(this, Quotes);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Quotes.__proto__ || (0, _getPrototypeOf2.default)(Quotes)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Quotes, [{
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

var _default = Quotes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Quotes, 'Quotes', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/LetUsKnow/LetUsKnow.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/LetUsKnow/LetUsKnow.js');
}();

;
//# sourceMappingURL=LetUsKnow.js.map
