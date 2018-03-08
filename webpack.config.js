module.exports = {
  entry: './lib/entry.js',
  output: {
    filename: '../lib/bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
  },
};
