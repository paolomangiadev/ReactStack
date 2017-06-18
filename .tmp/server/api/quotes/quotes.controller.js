'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;

var _quotes = require('./quotes.model');

var _quotes2 = _interopRequireDefault(_quotes);

var _res_handler = require('../res_handler');

var res_handler = _interopRequireWildcard(_res_handler);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _templateLoader = require('./templateLoader');

var templateService = _interopRequireWildcard(_templateLoader);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DEFINE THE TRANSPORTER
var transporter = _nodemailer2.default.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: _config2.default.gmail.user,
    clientId: _config2.default.gmail.clientId,
    clientSecret: _config2.default.gmail.clientSecret,
    refreshToken: _config2.default.gmail.refreshToken,
    accessToken: _config2.default.gmail.accessToken
  }
});

// Gets a list items
function index(req, res) {}
// Gets a sing item from DB
function show(req, res) {
  res.send('GET ID handler for /quotes route.');
}
// Creates a sing item inside DB
function create(req, res) {

  if (req.files) {
    res.send(200, 'Files uploaded correctly');
    var data = req.body;
    console.log('request DATA: ' + (0, _stringify2.default)(data));
    console.log('---------------------------');
    console.log('---------------------------');
    console.log('request files: ' + (0, _stringify2.default)(req.files));
    var attachments = [];
    _lodash2.default.forEach(req.files, function (value, key) {
      var fileName = _path2.default.parse(value.originalname);
      attachments.push({
        'filename': fileName.name,
        'path': value.path,
        'contentType': value.mimetype,
        'encoding': value.encoding
      });
    });
  } else {
    console.log((0, _stringify2.default)(req.body));
    var attachments = [];
  }

  var context = {
    name: req.body.NameSurname,
    mail: req.body.Email,
    apptype: req.body.AppType,
    budget: req.body.Budget,
    description: req.body.Description

    //load the mail templates of the user followup
  };templateService.loadTemplates(context, 'followup').then(function (res) {
    // //send a followup mail to the user to know that everything went good
    return transporter.sendMail({ // setup email data with unicode symbols
      from: context.name + ' < ' + context.mail + ' >', // sender address
      to: 'paolo.mangia.dev@gmail.com', // list of receivers
      subject: res.subject, // Subject line
      text: res.text, // plain text body
      html: res.html, // html body
      attachments: attachments
    }, function (error, info) {
      if (error) {
        return console.log('errore: ' + error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });
  });

  //load the mail templates of the netglitch incoming quote request
  templateService.loadTemplates(context, 'netglitch').then(function (res) {
    // //send the email to netglitch to let them know of a new incoming quote request
    return transporter.sendMail({ // setup email data with unicode symbols
      from: context.name + ' < ' + context.mail + ' >', // sender address
      to: 'paolo.mangia.dev@gmail.com', // list of receivers
      subject: res.subject, // Subject line
      text: res.text, // plain text body
      html: res.html, // html body
      attachments: attachments
    }, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });
  });
}
// Updates a sing item inside DB
function update(req, res) {
  res.send('PUT handler for /quotes route.');
}
// Delete a sing item inside DB
function destroy(req, res) {
  res.send('DELETE handler for /quotes route.');
}
//# sourceMappingURL=quotes.controller.js.map
