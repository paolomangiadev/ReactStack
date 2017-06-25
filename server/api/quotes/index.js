var express = require('express');
var router = express.Router();
var controller = require('./quotes.controller');
var mime = require('mime');
var path = require('path');
var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    var fileName = path.parse(file.originalname);
    cb(null, fileName.name + '.' + mime.extension(file.mimetype));
  }
});
var upload = multer({ storage: storage });
var fs = require('fs');
// router.get('/:id', controller.show);
router.get('/', controller.index);  //FRASI
router.post('/', upload.any(), controller.create); //PREVENTIVI
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
