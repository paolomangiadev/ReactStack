var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('GET handler for /chats route.');
});
router.get('/me', function(req, res){
  res.send('ME handler for /chats route.');
});
router.get('/:id', function(req, res){
  res.send('GET ID handler for /chats route.');
});
router.post('/', function(req, res){
  res.send('POST handler for /chats route.');
});
router.put('/:id', function(req, res){
  res.send('PUT handler for /chats route.');
});
router.patch('/:id', function(req, res){
  res.send('PATCH handler for /chats route.');
});
router.delete('/:id', function(req, res){
  res.send('DELETE handler for /chats route.');
});

module.exports = router;
