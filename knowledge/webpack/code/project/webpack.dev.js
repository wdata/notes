'use strict'

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 自动清理output输出目录
const HtmlWebpackPlugin = require('html-webpack-plugin') // 配置html页面
const glob = require('glob')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  // 拿到文件
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))

  Object.keys(entryFiles).map((index) => {
    // 例如：E:/HTML/Github/notes/knowledge/webpack/code/project/src/search/index.js
    const entryFile = entryFiles[index]

    const match = entryFile.match(/src\/(.*)\/index\.js/)
    const pageName = match && match[1]

    entry[pageName] = entryFile

    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`), // 模版位置
        filename: `${pageName}.html`, // 指定打包出来的文件名称
        chunks: [pageName], // 生成的指定的chunks
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    )
  })

  return {
    entry,
    htmlWebpackPlugins
  }
}

const { entry, htmlWebpackPlugins } = setMPA()

module.exports = {
  // 入口，字符串时为单入口，对象时为多入口
  // entry: './src/index.js',
  entry: entry,
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ].concat(htmlWebpackPlugins),
  // webpack-dev-server 配置
  devServer: {
    contentBase: './dist', // 指定目录
    hot: true, // 热更新开启
    host: 'localhost', // 服务器的ip地址
    port: 25501, // 端口
    open: true // 自动打开页面
    // stats: 'errors-only'
  },
  // source map 配置
  devtool: 'source-map'
}
