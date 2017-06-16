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

var _default = _mongoose2.default.model('Service', ServicesSchema);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ServicesSchema, 'ServicesSchema', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/services.model.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/services.model.js');
}();

;
//# sourceMappingURL=services.model.js.map
