import path from 'path';
import webpack from 'webpack';
import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import nodeExternals from 'webpack-node-externals';

const clientPath = './client/public/';

console.log(resolve(__dirname, './node_modules'));

module.exports = {

    devtool: 'inline-source-maps',
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',

      path.resolve(__dirname, clientPath + 'index.js'),
    ],
    output: {
      path: '/',
      publicPath: '/',
      filename: 'bundle.js'
    },
    // target: 'node', // in order to ignore built-in modules like path, fs, etc.
    // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: [/node_modules/, /particles.min.js/, /smooth-scroll.min.js/],
          include: resolve(__dirname, clientPath)
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader?sourceMap', 'sass-loader']
        },
        {
          test: require.resolve('wowjs/dist/wow.js'),
          use: 'exports-loader?this.WOW'
        },
        {
          test: /\.(jpeg|png|gif|svg)$/i,
          use: "file-loader?name=images/[name].[ext]&publicPath=/&outputPath=/"
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          use: 'file-loader?name=fonts/[name].[ext]&publicPath=/&outputPath=/'
        }
      ]
    },
    resolve: {
      extensions: [".js", ".json", ".css"]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),

    ]

}
