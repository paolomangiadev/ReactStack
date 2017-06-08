var express = require('express');
var router = express.Router();
var controller = require('./quotes.controller');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/'});
var fs = require('fs');
// router.get('/', controller.index);
// router.get('/:id', controller.show);
router.post('/', upload.any(), controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
