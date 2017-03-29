import path from 'path';
import webpack from 'webpack';
import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          }),
        },
        {
           test: require.resolve('wowjs/dist/wow.js'),
           loader: 'exports-loader?this.WOW'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally
      new ExtractTextPlugin("styles.css"),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin()
      // prints more readable module names in the browser console on HMR updates
    ]

}
