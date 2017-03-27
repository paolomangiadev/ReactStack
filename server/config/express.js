import bodyParser from 'body-parser';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js'; //webpack configuration file

const clientPath = '../../client/public';

export default function(app) {

  //configure webpack
  app.use(webpackMiddleware(webpack(webpackConfig)))
  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, `${clientPath}` , 'index.html'));
  });
};
