'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Masonry = require('./Masonry.css');

var _Masonry2 = _interopRequireDefault(_Masonry);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var masonryList1 = void 0;
var masonryList2 = void 0;

var Masonry = function (_Component) {
  _inherits(Masonry, _Component);

  _createClass(Masonry, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  function Masonry(props) {
    _classCallCheck(this, Masonry);

    var _this = _possibleConstructorReturn(this, (Masonry.__proto__ || Object.getPrototypeOf(Masonry)).call(this, props));

    _this.state = {
      line1: [{
        src: "../../../src/images/item-1.png",
        title: "Web Design",
        description: "We build websites",
        link_txt: "See more...",
        href: "dfgd"
      }, {
        src: "../../../src/images/item-2.png",
        title: "Graphic Design",
        description: "We Design custom graphics",
        link_txt: "See more...",
        href: "dfgdfg"
      }, {
        src: "../../../src/images/item-3.png",
        title: "Team Members",
        description: "Check our team",
        link_txt: "See more...",
        href: "sfgdsg"
      }],
      line2: [{
        src: "../../../src/images/item-4.png",
        title: "Technologies",
        description: "Technologies we love",
        link_txt: "See more...",
        href: "gfh"
      }, {
        src: "../../../src/images/item-5.png",
        title: "Social Medias",
        description: "Social hacking",
        link_txt: "See more...",
        href: "dfs"
      }]
    };
    return _this;
  }

  _createClass(Masonry, [{
    key: 'render',
    value: function render() {
      if (this.state.line1) {
        masonryList1 = _lodash2.default.map(this.state.line1, function (item) {
          return _react2.default.createElement(
            'a',
            { className: 'column anchor-wrap', href: item.href, key: item.title },
            _react2.default.createElement(
              'div',
              { className: 'wrapper_noLine' },
              _react2.default.createElement('div', { className: 'single-masonry', style: { backgroundImage: 'url(' + item.src + ')' } }),
              _react2.default.createElement(
                'div',
                { className: 'text-masonry' },
                _react2.default.createElement(
                  'h2',
                  { className: 'title' },
                  item.title
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'description_masonry' },
                  item.description
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'item button is-danger is-inverted is-outlined button_masonry' },
                  item.link_txt
                )
              )
            )
          );
        });
      }

      if (this.state.line2) {
        masonryList2 = _lodash2.default.map(this.state.line2, function (item) {
          return _react2.default.createElement(
            'a',
            { className: 'column anchor-wrap', href: item.href, key: item.title },
            _react2.default.createElement(
              'div',
              { className: 'wrapper_noLine' },
              _react2.default.createElement('div', { className: 'single-masonry', style: { backgroundImage: 'url(' + item.src + ')' } }),
              _react2.default.createElement(
                'div',
                { className: 'text-masonry' },
                _react2.default.createElement(
                  'h2',
                  { className: 'title' },
                  item.title
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'description_masonry' },
                  item.description
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'item button is-danger is-inverted is-outlined button_masonry' },
                  item.link_txt
                )
              )
            )
          );
        });
      }

      return _react2.default.createElement(
        'div',
        { id: 'third', className: 'is-fullwidth is-background' },
        _react2.default.createElement(
          'section',
          { className: 'hero is-fullheight Masonry' },
          _react2.default.createElement(
            'div',
            { 'data-wow-duration': '1.5s', className: 'wow fadeIn columns is-gapless' },
            masonryList1
          ),
          _react2.default.createElement(
            'div',
            { 'data-wow-duration': '1.5s', className: 'wow fadeIn columns is-gapless' },
            masonryList2
          )
        )
      );
    }
  }]);

  return Masonry;
}(_react.Component);

exports.default = Masonry;
//# sourceMappingURL=Masonry.js.map
