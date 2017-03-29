import path from 'path';
import webpack from 'webpack';
import { resolve } from 'path';
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
      path: resolve(__dirname, clientPath),
      publicPath: '/',
      filename: 'bundle.js'
    },
    // target: 'node', // in order to ignore built-in modules like path, fs, etc.
    // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
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
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.NamedModulesPlugin()
      // prints more readable module names in the browser console on HMR updates
    ]

}
