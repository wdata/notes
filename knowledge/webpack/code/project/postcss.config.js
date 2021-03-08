module.exports = {
  plugins: [
    require('autoprefixer')({
      // 可选择兼容版本
      // 为什么不用 browsers，因为会提示警告
      overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
    })
  ]
}
