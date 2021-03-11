# webpack

* [1、本质](#1)
* [2、特点](#2)
  - [2.1、指定React元素类型](#2_1)

## <div id="1">内容</div>

### 极客课件和源代码下载地址

[课件](https://gitee.com/wdata/geektime-webpack-course)

## 第一章-简介

## 第二章-基础用法

### 2.1 entry

### 2.2 output

### 2.3 loaders

### 2.4 mode

### 2.5 解析ES6和React

### 2.6 解析图片和字体

### 2.7 文件监听

### 2.8 热更新

### 2.1 文件指纹

### 2.1 压缩

## 第三章-进阶用法

### 3.1 自动清理output输出

插件：**clean-webpack-plugin**

```js
{
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  plugins:[ new CleanWebpackPlugin() ]
}
```

### 3.2 补全CSS3前缀

插件：

1. postcss-loader - 解析成抽象语法树结构AST，并调用插件处理AST并得到结构
2. autoprefixer - 增加声明前缀

```js
{
  // 1、在module.rules.use 中添加 postcss-loader
  {
    test: /.less$/,
    use: [
      ...,
      {
        loader: 'postcss-loader'
        // 为什么不这样写，要添加postcss.config.js，因为会报错，版本不兼容
        // options: {
        //   plugins: () => {
        //     require('autoprefixer')({
        //       // 可选择兼容版本
        //       browsers: ['last 2 version', '>1%', 'ios 7']
        //     })
        //   }
        // }
      },
    ]
  }
  // 2、新建文件 postcss.config.js
  // 3、添加配置
  module.exports = {
    plugins: [
      require('autoprefixer')({
        // 可选择兼容版本
        // 为什么不用 browsers，因为会提示警告
        // browsers: ['last 2 version', '>1%', 'ios 7']
        overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
      })
    ]
  }
}
```

### 3.3 3、px转rem

原理：

1. rem：相对单位
2. px：绝对单位

插件：

1. px2rem-loader - 转换rem
2. lib-flexible - 渲染时计算根元素font-size值

坑：**px2rem-loader必须在less-loader之前**。
原因：px2rem-loader 不支持嵌套结构，webpack - use的执行顺序是从右往左方向；

```js
{
  // 引用
  // 
  {
    loader: 'px2rem-loader',
    options: {
      remUnit: 75, // rem 相对于转换的px单位 1rem = 75px
      remPrecision: 8 // px 转换成rem小数点位数
    }
  }
}
```
