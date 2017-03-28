import path from 'path';
import webpack from 'webpack';
import { resolve } from 'path';

const clientPath = '../../client/public/';

module.exports = {

    entry: [
      'react-hot-loader/patch',

      'webpack-dev-server/client?http://localhost:3000',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      path.join(__dirname, clientPath + 'index.js'),
    ],
    output: {
      path: resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    context: resolve(__dirname, 'src'),

    devtool: 'inline-source-map',

    devServer: {
      hot: true,
      // enable HMR on the server

      contentBase: resolve(__dirname, 'dist'),
      // match the output path

      publicPath: '/'
      // match the output `publicPath`
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015']
          }
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
