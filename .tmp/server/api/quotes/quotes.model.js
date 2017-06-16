'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatSchema = new _mongoose2.default.Schema({
  name: String,
  sender: String,
  subject: String,
  message: String
});

var _default = _mongoose2.default.model('Chat', ChatSchema);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ChatSchema, 'ChatSchema', 'C:/Users/Paolo/Desktop/Reactstack/server/api/quotes/quotes.model.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/server/api/quotes/quotes.model.js');
}();

;
//# sourceMappingURL=quotes.model.js.map
