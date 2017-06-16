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

var _Masonry = require('./Masonry.css');

var _Masonry2 = _interopRequireDefault(_Masonry);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var masonryList1 = void 0;
var masonryList2 = void 0;

var Masonry = function (_Component) {
  (0, _inherits3.default)(Masonry, _Component);
  (0, _createClass3.default)(Masonry, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }]);

  function Masonry(props) {
    (0, _classCallCheck3.default)(this, Masonry);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Masonry.__proto__ || (0, _getPrototypeOf2.default)(Masonry)).call(this, props));

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

  (0, _createClass3.default)(Masonry, [{
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

var _default = Masonry;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(masonryList1, 'masonryList1', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Masonry/Masonry.js');

  __REACT_HOT_LOADER__.register(masonryList2, 'masonryList2', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Masonry/Masonry.js');

  __REACT_HOT_LOADER__.register(Masonry, 'Masonry', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Masonry/Masonry.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/client/public/views/Home/Masonry/Masonry.js');
}();

;
//# sourceMappingURL=Masonry.js.map
