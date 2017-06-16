'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./quotes.controller');
var mime = require('mime');
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function filename(req, file, cb) {
    var fileName = path.parse(file.originalname);
    cb(null, fileName.name + '.' + mime.extension(file.mimetype));
  }
});
var upload = multer({ storage: storage });
var fs = require('fs');
// router.get('/', controller.index);
// router.get('/:id', controller.show);
router.post('/', upload.any(), controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'C:/Users/Paolo/Desktop/Reactstack/server/api/quotes/index.js');

  __REACT_HOT_LOADER__.register(storage, 'storage', 'C:/Users/Paolo/Desktop/Reactstack/server/api/quotes/index.js');

  __REACT_HOT_LOADER__.register(upload, 'upload', 'C:/Users/Paolo/Desktop/Reactstack/server/api/quotes/index.js');
}();

;
//# sourceMappingURL=index.js.map
