'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Apptypes = require('./Apptypes.css');

var _Apptypes2 = _interopRequireDefault(_Apptypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apptypesList1 = void 0;
var apptypesList2 = void 0;

var Apptypes = function (_Component) {
  (0, _inherits3.default)(Apptypes, _Component);
  (0, _createClass3.default)(Apptypes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  function Apptypes(props) {
    (0, _classCallCheck3.default)(this, Apptypes);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Apptypes.__proto__ || (0, _getPrototypeOf2.default)(Apptypes)).call(this, props));

    _this.state = {
      line1: [{
        src: "../../../src/images/webapp.png",
        title: "Web App",
        description: "Desktop or WebApp",
        link_txt: "Get a Quote",
        href: "dfgdfg"
      }, {
        src: "../../../src/images/mobileapp.png",
        title: "Mobile App",
        description: "Smartphone and Tablet app",
        link_txt: "Get a Quote",
        href: "sfgdsg"
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(Apptypes, [{
    key: 'render',
    value: function render() {
      if (this.state.line1) {
        apptypesList1 = _lodash2.default.map(this.state.line1, function (item) {
          return _react2.default.createElement(
            'a',
            { className: 'column anchor-wrap', href: item.href, key: item.title },
            _react2.default.createElement(
              'div',
              { className: 'wrapper_noLine' },
              _react2.default.createElement('div', { className: 'single-apptypes', style: { backgroundImage: 'url(' + item.src + ')' } }),
              _react2.default.createElement(
                'div',
                { className: 'text-apptypes' },
                _react2.default.createElement(
                  'h2',
                  { className: 'title' },
                  item.title
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'description_apptypes' },
                  item.description
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'item button is-danger is-inverted is-outlined button_apptypes' },
                  item.link_txt
                )
              )
            )
          );
        });
      }

      return _react2.default.createElement(
        'div',
        { id: 'sixth', className: 'is-fullwidth is-background' },
        _react2.default.createElement(
          'section',
          { className: 'hero is-fullheight Apptypes' },
          _react2.default.createElement(
            'div',
            { 'data-wow-duration': '1.5s', className: 'wow fadeIn columns is-gapless' },
            apptypesList1
          )
        )
      );
    }
  }]);
  return Apptypes;
}(_react.Component);

var _default = Apptypes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(apptypesList1, 'apptypesList1', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Apptypes/Apptypes.js');

  __REACT_HOT_LOADER__.register(apptypesList2, 'apptypesList2', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Apptypes/Apptypes.js');

  __REACT_HOT_LOADER__.register(Apptypes, 'Apptypes', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Apptypes/Apptypes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Apptypes/Apptypes.js');
}();

;
//# sourceMappingURL=Apptypes.js.map
