import path from 'path';

const clientPath = '../client/public/';

export default {
  entry: path.join(__dirname, clientPath + 'index.js'),
  output: {
    path: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, clientPath),
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
