import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackDevServer from 'webpack-dev-server';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config.js';
const compiler = webpack(webpackConfig);

const clientPath = '../../client/public';

export default function(app) {

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/', express.static(path.join(__dirname, clientPath)));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, clientPath + '/index.html'));
  });

};
