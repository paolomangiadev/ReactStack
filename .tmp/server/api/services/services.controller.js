'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.getservice = getservice;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _services = require('./services.model');

var _services2 = _interopRequireDefault(_services);

var _res_handler = require('../res_handler');

var res_handler = _interopRequireWildcard(_res_handler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets a list items
function index(req, res) {
  return _services2.default.find().exec().then(res_handler.respondWithResult(res)).catch(res_handler.handleError(res));
}
// Gets a sing item from DB
// export function show(req, res) {
//     res.send('GET ID handler for /services route.' + req.query.id);
// }
// Gets a service item from its title
function getservice(req, res) {
  return _services2.default.findOne({ 'title': req.params.title }).exec().then(res_handler.respondWithResult(res)).catch(res_handler.handleError(res));
}
// Creates a sing item inside DB
function create(req, res) {
  var chat = new _services2.default(req.body);
  chat.save().then(res_handler.respondWithResult(res, 201)).catch(res_handler.handleError(res));
}
// Updates a sing item inside DB
function update(req, res) {
  res.send('PUT handler for /services route.');
}
// Delete a sing item inside DB
function destroy(req, res) {
  res.send('DELETE handler for /services route.');
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(index, 'index', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/services.controller.js');

  __REACT_HOT_LOADER__.register(getservice, 'getservice', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/services.controller.js');

  __REACT_HOT_LOADER__.register(create, 'create', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/services.controller.js');

  __REACT_HOT_LOADER__.register(update, 'update', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/services.controller.js');

  __REACT_HOT_LOADER__.register(destroy, 'destroy', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/services.controller.js');
}();

;
//# sourceMappingURL=services.controller.js.map
