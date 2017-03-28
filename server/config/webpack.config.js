import path from 'path';
import webpack from 'webpack';
import { resolve } from 'path';

const clientPath = '../../client/public/';

module.exports = {

    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',

      path.resolve(__dirname, clientPath + 'index.js'),
    ],
    output: {
      path: resolve(__dirname, clientPath),
      publicPath: '/',
      filename: 'bundle.js'
    },


    devtool: 'inline-source-map',


    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: resolve(__dirname, clientPath)
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?modules',
            'postcss-loader',
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates
    ]

}
