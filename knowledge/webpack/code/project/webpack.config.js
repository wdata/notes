'use strict'

const path = require('path')

module.exports = {
  // 入口，字符串时为单入口，对象时为多入口
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  //
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}
