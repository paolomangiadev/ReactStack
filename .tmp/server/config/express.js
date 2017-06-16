'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var _default = function _default(app) {

  new _bluebird2.default(function (resolve, reject) {
    if (env === 'development') {
      var webpackConfig = require('../../webpack.dev.config.js');
      var compiler = (0, _webpack2.default)(webpackConfig);
      var clientPath = '../../client/public';
      app.use((0, _webpackDevMiddleware2.default)(compiler));
      app.use((0, _webpackHotMiddleware2.default)(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        noInfo: true
      }));
      resolve(clientPath);
    } else if (env === 'production') {
      var _clientPath = '../../dist/client';
      resolve(_clientPath);
    }
  }).then(function (clientPath) {
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    app.use(_bodyParser2.default.json());

    app.use('/', _express2.default.static(_path2.default.join(__dirname, clientPath)));

    app.get('/*', function (req, res, next) {
      if (req.url === '/api/services') return next();else {
        res.sendFile(_path2.default.join(__dirname, clientPath + '/index.html'));
      }
    });
  });
};

exports.default = _default;
;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(env, 'env', 'C:/Users/Paolo/Desktop/Reactstack/server/config/express.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Paolo/Desktop/Reactstack/server/config/express.js');
}();

;
//# sourceMappingURL=express.js.map
