'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 入口，字符串时为单入口，对象时为多入口
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
    publicPath: './'
  },
  mode: 'production', // 生产
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        // use: ['style-loader', 'css-loader']
        // MiniCssExtractPlugin 与 style.loader 互斥
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.less$/,
        // use: ['style-loader', 'css-loader', 'less-loader']
        // MiniCssExtractPlugin 与 style.loader 互斥
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        // 可用url-loader | file-loader
        // use: [
        //   {
        //     loader: 'url-loader',
        //     // 如果大小小于此，转换为base64
        //     options: {
        //       limit: 102400
        //     }
        //   }
        // ]

        // 文件指纹
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        // use: 'file-loader'
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    })
  ]
}
