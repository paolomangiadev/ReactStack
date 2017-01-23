
import express from 'express';
import bodyParser from 'body-parser';
import Promise from 'bluebird';
import config from './config';
import http from 'http';
import socket from 'socket.io';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');


// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

// Setup Server
var app = express();
var server = http.createServer(app);
var io = socket.listen(server); //Mother fkng socket.io

require('./config/express').default(app); // Express configs
require('./routes').default(app); // Express Routes

io.on('connection', function (socket) {
  console.log('Client connected...');

  socket.on('join', function(data) {
      console.log(data);
  });
});

server.listen(config.serverPort, function () {
  console.log('ReactStack listening on port: ' + config.serverPort);
});

// Expose app
exports = module.exports = server;
