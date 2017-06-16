'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = require('bluebird');

// Connect to MongoDB
_mongoose2.default.connect(_config2.default.mongo.uri, _config2.default.mongo.options);
_mongoose2.default.connection.on('error', function (err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (_config2.default.seedDB) {
  require('./config/seed');
}

// Setup Server
var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var io = _socket2.default.listen(server); //Mother fkng socket.io

require('./config/express').default(app); // Express configs
require('./routes').default(app); // Express Routes

io.on('connection', function (socket) {
  console.log('Client connected...');

  socket.on('join', function (data) {
    console.log(data);
  });
});

server.listen(_config2.default.serverPort, function () {
  console.log('ReactStack listening on port: ' + _config2.default.serverPort);
});

// Expose app
exports = module.exports = server;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'C:/Users/Paolo/Desktop/Reactstack/server/server.js');

  __REACT_HOT_LOADER__.register(server, 'server', 'C:/Users/Paolo/Desktop/Reactstack/server/server.js');

  __REACT_HOT_LOADER__.register(io, 'io', 'C:/Users/Paolo/Desktop/Reactstack/server/server.js');
}();

;
//# sourceMappingURL=server.js.map
