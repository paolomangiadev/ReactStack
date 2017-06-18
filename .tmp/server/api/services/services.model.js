'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServicesSchema = new _mongoose2.default.Schema({
  title: String,
  description: String,
  image: String
});

exports.default = _mongoose2.default.model('Service', ServicesSchema);
//# sourceMappingURL=services.model.js.map
