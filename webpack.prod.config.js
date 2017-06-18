var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
const clientPath = './client/public/';
var buildPath = path.resolve(__dirname, 'client');
var mainPath = path.resolve(__dirname, clientPath, 'index.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin('css/cssbundle.css');
const extractSCSS = new ExtractTextPlugin('css/scssbundle.css');


var config = {

  // We change to normal source mapping
  devtool: 'cheap-module-source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
        }],
        exclude: [/node_modules/, /particles.min.js/, /smooth-scroll.min.js/]
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: require.resolve('wowjs/dist/wow.js'),
        use: 'exports-loader?this.WOW'
      },
      {
        test: /\.(jpeg|png|gif|svg|jpg)$/i,
        use: "file-loader?name=src/images/[name].[ext]&publicPath=/&outputPath=/"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: 'file-loader?name=src/fonts/[name].[ext]&publicPath=/&outputPath=/'
      }
    ]
  },
  plugins: [
    extractCSS,
    extractSCSS,

  ]
};

module.exports = config;