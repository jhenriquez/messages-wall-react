const path = require('path');

const configuration = {
   entry: {
      main: './src/root.jsx',
      vendors: [
        'react',
	      'react-dom',
        'prop-types'
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
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  }
};

module.exports = configuration;
