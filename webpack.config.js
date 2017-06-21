const path    = require('path');
const webpack = require('webpack');

const configuration = {
   devtool: 'source-map',
   entry: {
      main: './src/root.jsx',
      vendors: [
        'react',
        'react-dom',
        'prop-types',
        'popsicle',
        "popsicle-status",
        'react-router',
        'react-router-dom',
        'react-redux',
        'redux-saga',
        'babel-polyfill',
        "lodash"
      ]
   },

  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src/styles')],
      loader: "babel-loader"
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors' })
  ]
};

module.exports = configuration;
