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
