module.exports = {
  plugins: [
    require('autoprefixer')({
      // 可选择兼容版本
      // 为什么不用 browsers，因为会提示警告
      overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
    })
    // require('px2rem-loader')({
    //   remUnit: 75, // rem 相对于转换的px单位 1rem = 75px
    //   remPrecesion: 8 // px 转换成rem小数点位数
    // })
  ]
}
