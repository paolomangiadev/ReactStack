'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.respondWithResult = respondWithResult;
exports.handleError = handleError;
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
      console.log('ok: ' + statusCode);
    }
  };
}
function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
    console.log('ko: ' + statusCode + err);
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(respondWithResult, 'respondWithResult', 'C:/Users/Paolo/Desktop/Reactstack/server/api/res_handler.js');

  __REACT_HOT_LOADER__.register(handleError, 'handleError', 'C:/Users/Paolo/Desktop/Reactstack/server/api/res_handler.js');
}();

;
//# sourceMappingURL=res_handler.js.map
