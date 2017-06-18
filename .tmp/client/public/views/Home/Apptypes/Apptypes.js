'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Apptypes = require('./Apptypes.css');

var _Apptypes2 = _interopRequireDefault(_Apptypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var apptypesList1 = void 0;
var apptypesList2 = void 0;

var Apptypes = function (_Component) {
  _inherits(Apptypes, _Component);

  _createClass(Apptypes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  function Apptypes(props) {
    _classCallCheck(this, Apptypes);

    var _this = _possibleConstructorReturn(this, (Apptypes.__proto__ || Object.getPrototypeOf(Apptypes)).call(this, props));

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

  _createClass(Apptypes, [{
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

exports.default = Apptypes;
//# sourceMappingURL=Apptypes.js.map
