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

var _Aboutus = require('./Aboutus.css');

var _Aboutus2 = _interopRequireDefault(_Aboutus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typography = '../../../src/images/what-we-do.svg';

var Aboutus = function (_Component) {
  (0, _inherits3.default)(Aboutus, _Component);

  function Aboutus() {
    (0, _classCallCheck3.default)(this, Aboutus);
    return (0, _possibleConstructorReturn3.default)(this, (Aboutus.__proto__ || (0, _getPrototypeOf2.default)(Aboutus)).apply(this, arguments));
  }

  (0, _createClass3.default)(Aboutus, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'second', className: 'is-fullwidth' },
        _react2.default.createElement(
          'section',
          { className: 'hero is-fullheight aboutUs' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'title title_typography' },
                _react2.default.createElement(
                  'div',
                  { className: 'typography_wrapper' },
                  _react2.default.createElement('img', { 'data-wow-duration': '0.7s', className: 'wow fadeIn typography', src: typography })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'div',
                    { className: 'description_center' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'WE DEVELOP SOFTWARE'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'description_wrapper' },
                      _react2.default.createElement('div', { className: 'description_line' }),
                      _react2.default.createElement(
                        'p',
                        null,
                        'We are a team of programmers who loves taking challenges and delivering the best user experience and design around.'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        'We are specialized in custom Web/Mobile applications and social media hacking. We belive in our client\'s esponential growth and we feel fulfilled by your achievements.'
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
  return Aboutus;
}(_react.Component);

var _default = Aboutus;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(typography, 'typography', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Aboutus/Aboutus.js');

  __REACT_HOT_LOADER__.register(Aboutus, 'Aboutus', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Aboutus/Aboutus.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Aboutus/Aboutus.js');
}();

;
//# sourceMappingURL=Aboutus.js.map
