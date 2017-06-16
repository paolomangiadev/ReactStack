'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.loadTemplates = loadTemplates;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _emailTemplates = require('email-templates');

var _emailTemplates2 = _interopRequireDefault(_emailTemplates);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailTemplate = _emailTemplates2.default.EmailTemplate;

function loadTemplates(context, templatePath) {
  var template = new EmailTemplate(_path2.default.join(__dirname, 'mail-templates/' + templatePath));
  return new _bluebird2.default(function (resolve, reject) {
    template.render(context, function (err, res) {
      if (res) {
        // console.log('we got a result: ' + JSON.stringify(res));
        resolve(res);
      } else {
        console.log('no results: ' + (0, _stringify2.default)(err));
      }
    });
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EmailTemplate, 'EmailTemplate', 'C:/Users/Paolo/Desktop/Reactstack/server/api/quotes/templateLoader.js');

  __REACT_HOT_LOADER__.register(loadTemplates, 'loadTemplates', 'C:/Users/Paolo/Desktop/Reactstack/server/api/quotes/templateLoader.js');
}();

;
//# sourceMappingURL=templateLoader.js.map
