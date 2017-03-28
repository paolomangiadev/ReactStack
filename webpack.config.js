import path from 'path';

const clientPath = './client/public/';

module.exports = {

    devtools: 'eval-source-map',
    entry: path.join(__dirname, clientPath + 'index.js'),
    output: {
      path: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }

}
