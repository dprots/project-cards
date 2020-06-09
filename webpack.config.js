const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve('./', 'dist'),
    filename: 'bundle.js'},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: 'css-loader'
            })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
        {filename: 'style.css'}
    )
  ]
};