'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 分离css文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // css 压缩
const HtmlWebpackPlugin = require('html-webpack-plugin') // 配置html页面
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 自动清理output输出目录
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
        use: ['babel-loader', 'eslint-loader']
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75, // rem 相对于转换的px单位 1rem = 75px
              remPrecision: 8 // px 转换成rem小数点位数
            }
          },
          'postcss-loader',
          'less-loader'
          // {
          //   loader: 'postcss-loader',
          //   // 为什么不这样写，要添加postcss.config.js，因为会报错，版本不兼容
          //   options: {
          //     plugins: () => {
          //       require('autoprefixer')({
          //         // 可选择兼容版本
          //         browsers: ['last 2 version', '>1%', 'ios 7']
          //       })
          //     }
          //   }
          // },
        ]
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
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    function () {
      this.hooks.done.tap('done', (stats) => {
        if (
          stats.compilation.errors &&
          stats.compilation.errors.length &&
          process.argv.indexOf('--watch') == -1
        ) {
          console.log('build error')
          process.exit(1)
        }
      })
    }
  ].concat(htmlWebpackPlugins),
  // source map 配置
  devtool: 'inline-source-map'
  // stats: 'errors-only'
}
