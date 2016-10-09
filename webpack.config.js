var path = require('path');
var webpack = require('webpack');
var loaders = [
  { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
];

module.exports = [{
  entry: './src/ReactFBLike.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-fb-like.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: { loaders: loaders },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: ['react', 'react-dom'],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
}, {
  entry: './src/Demo.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'demo.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
  module: { loaders: loaders },
}];
