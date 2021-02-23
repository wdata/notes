'use strict'

const path = require('path')
const webpack = require('webpack')

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
  // mode: 'production', // 生产
  mode: 'development', // 开发
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
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        // 可用url-loader | file-loader
        use: [
          {
            loader: 'url-loader',
            // 如果大小小于此，转换为base64
            options: {
              limit: 102400
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  // 引入webpack自带的插件
  plugins: [new webpack.HotModuleReplacementPlugin()],
  // webpack-dev-server 配置
  devServer: {
    contentBase: './dist', // 指定目录
    hot: true, // 热更新开启
    host: 'localhost', // 服务器的ip地址
    port: 25501, // 端口
    open: true // 自动打开页面
  }
}
