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

const HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {

  // We change to normal source mapping
  devtool: 'cheap-module-source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: 'https://dtgngz52ivvgd.cloudfront.net/',
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: [ "html-loader?root=src/images/" ]
      // },
      {
        // JS LOADER
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: [/node_modules/, /particles.min.js/, /smooth-scroll.min.js/]
      },
      {
        // SCSS LOADER
        test: /\.scss$/,
        use: extractSCSS.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        // CSS LOADER
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
        // ASSETS LOADER
        test: /\.(jpeg|png|gif|svg|jpg)$/i,
        use: "file-loader?name=src/images/[name].[ext]"
      },
      {
        // FONTS LOADER
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: "file-loader?name=src/fonts/[name].[ext]"
      },
      {
        //JSON LOADER
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".css"]
  },
  plugins: [
    extractCSS,
    extractSCSS,
    new HtmlWebpackPlugin({
      template: 'client/public/index_prod.html',
      filename: 'index.html'
    })
    // new CopyWebpackPlugin([
    //   { from: './client/public/index.html' }
    // ]),
  ]
};

module.exports = config;
