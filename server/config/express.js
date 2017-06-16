import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackDevServer from 'webpack-dev-server';
import webpackHotMiddleware from 'webpack-hot-middleware';
import Promise from 'bluebird';

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default function(app) {

  new Promise(function(resolve, reject){
    if (env === 'development') {
      var webpackConfig = require('../../webpack.dev.config.js');
      const  compiler = webpack(webpackConfig);
      const clientPath = '../../client/public';
      app.use(webpackDevMiddleware(compiler));
      app.use(webpackHotMiddleware(compiler, {
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        noInfo: true
      }));
      resolve(clientPath);
    }

    else if (env === 'production') {
      const clientPath = '../../dist/client';
      resolve(clientPath);
    }
  }).then(function(clientPath){
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/', express.static(path.join(__dirname, clientPath)));

    app.get('/*', function (req, res, next) {
      if (req.url === '/api/services') return next();
      else {
        res.sendFile(path.join(__dirname, clientPath + '/index.html'));
      }
    });
  })

};
