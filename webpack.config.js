var path = require('path');
var webpack = require('webpack');
var loaders = [
  { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
];

module.exports = [{
  entry: './src/ReactFBLike.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-fb-like.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: { loaders: loaders },
  externals: ['react', 'react-dom'],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
}, {
  entry: './src/Demo.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'demo.js'
  },
  devtool: 'source-map',
  module: { loaders: loaders },
}];
