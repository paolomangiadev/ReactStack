import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import WebpackDevServer from 'webpack-dev-server';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.js';
const compiler = webpack(webpackConfig);

const distPath = '../../client/public';

export default function(app) {

  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler, {
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/', express.static(path.join(__dirname, distPath)));
};
