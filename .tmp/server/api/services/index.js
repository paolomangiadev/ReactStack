'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./services.controller');

router.get('/', controller.index);
router.get('/:title', controller.getservice);
router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'C:/Users/Paolo/Desktop/Reactstack/server/api/services/index.js');
}();

;
//# sourceMappingURL=index.js.map
