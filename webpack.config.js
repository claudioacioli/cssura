const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['sass-loader']
      }
    ]
  }
}
