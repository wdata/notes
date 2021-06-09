const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development', // development、production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    // minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     extractComments: true
    //   })
    // ]
  }
}
