
import express from 'express';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import config from './config';

// Setup Server
var app = express();
var http = require("http");
var server = http.createServer(app);
var io = require('socket.io').listen(server); //Mother fkng socket.io

require('./config/express').default(app); // Express configs
require('./routes').default(app); // Express Routes

io.on('connection', function (socket) {
  console.log('Client connected...');

  socket.on('join', function(data) {
      console.log(data);
  });
});

server.listen(config.serverPort, function () {
  console.log('ReactStack listening on port 3000!');
});

// Expose app
exports = module.exports = server;
