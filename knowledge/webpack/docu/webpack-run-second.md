# webpack 打包

在开发过程中，我们经常会用到webpack这个当下最流行的前端打包工具。它在项目构建、代码打包封装、兼容浏览器有极其强大的功能，极大的提高了开发的效率，降低了项目构建和发布的复杂度。

webpack配置文件用模块区分，主要包含入口（entry）、输出文件（output）、模块（modules）、加载器（Loader）、插件（Plugin）等几部分组成。但如果只需要完成一个迷你的js项目，那只需要入口和输出就可以了。

我们通过一个简单的小项目，看看webpack输出了哪些打包结果，webpack4与webpack5打包结果有什么不同，最后在对比下质检App的打包文件又是什么样子。

## 创建项目

1、添加project文件，创建一个webpack项目，并下载webpack、webpack-cli插件；

```javascript
// 创建文件夹
md project
cd ./project
// 全局安装webpack
npm install -g webpack
// 创建基本package.json
npm init --yes
// 安装webpack和webpack-cli   版本：webpack@5.36.1  webpack-cli@4.6.0
npm install webpack webpack-cli --save-dev

// 创建src和dist文件夹
md src
md dist
```

2、创建文件，在src下添加index.js：

3、webpack配置文件：

```javascript
// webpack.config.js
const path = require('path')
// 用于清除打包后的注释
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development', // development、production
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true // 是否开启去除注释
      })
    ]
  }
}
```

4、添加命令

```json
// package.json
{
  "scripts": {
    "build": "webpack --config webpack.config.js"
  },
}
```

## 打包结果

### 创建一个单文件

修改src/index.js下的内容

```javascript
// index.js
console.log('Hello webpack!');
```

### webpack4-单文件

```javascript
// ./dist/main.js
;(function (modules) {
  // 模块缓存
  var installedModules = {}

  function __webpack_require__(moduleId) {
    // 检查模块是否缓存
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }
    // 创建一个新模块 (放入缓存)
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    })
    // 执行模块功能
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    // 标记模块，为已加载
    module.l = true
    // 返回模块的导出
    return module.exports
  }
  // 暴露模块对象 (__webpack_modules__)
  __webpack_require__.m = modules
  // 公开模块缓存
  __webpack_require__.c = installedModules
  // 定义和导出getter函数
  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter })
    }
  }
  // 定义和暴露 __esModule
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }
  // 创建一个假的命名空间
  // mode & 1: value = 模块id, 必填
  // mode & 2: 将所有属性值合并到ns中
  // mode & 4: 返回当前ns的值
  // mode & 8|1: 1和8必填
  __webpack_require__.t = function (value, mode) {
    if (mode & 1) value = __webpack_require__(value)
    if (mode & 8) return value
    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value
    var ns = Object.create(null)
    __webpack_require__.r(ns)
    Object.defineProperty(ns, 'default', { enumerable: true, value: value })
    if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key]
          }.bind(null, key)
        )
    return ns
  }
  // getDefaultExport函数，用于与或非模块兼容
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module['default']
          }
        : function getModuleExports() {
            return module
          }
    __webpack_require__.d(getter, 'a', getter)
    return getter
  }
  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }
  // __webpack_public_path__
  __webpack_require__.p = ''
  // 加载输入模块，并返回导出
  return __webpack_require__((__webpack_require__.s = './src/index.js'))
})(
  // 文件代码块
  {
    './src/index.js': function (module, exports) {
      eval("console.log('Hello webpack!')")
    }
  }
)
```

webpack4打包结果，简化：

```javascript
(function(modules) {
  // 模拟 require 语句
  function __webpack_require__() {
  }
  // 执行存放所有模块数组中的第0个模块
  __webpack_require__(0);
})({
  /*存放所有模块的数组*/
  "./src/index.js": (function(){
    // ...
  })
})
```

整个文件只含一个立即执行函数（IIFE），我们称它为 webpackBootstrap，它仅接收一个对象 —— 未加载的 模块集合（modules），这个 modules 对象的 key 是一个路径，value 是一个函数。

`webpack_require`分析：

1. `webpack_require`函数接收 `./src/index.js`
2. 首先检查缓存 `installedModules`中是否包含 key 为 `./src/index.js`的对象， 如果存在直接返回这个对象中的 `exports`
3. 当缓存中不存在入口模块的时候， 在缓存中生成一个对象并放到缓存中， 这个对象包括三个值： `i` `l` `exports`
4. 使用 `modules[moduleId].call` 调用 `IIFE` 参数的 `value` 函数， 并把 `value` 对应的函数中的 `this` 指向赋值给了 `module.exports`, 后面的 `call` 方法的后面三个参数为 `value` 对应函数的参数
5. 最后返回了 `module.exports`， 这里的 `module.exports` 在第四步的时候已赋值为 `IIFE` 参数对象中的 `value` 对应的函数。

`webpack_require`实际返回的就是 `IIFE` 参数对象中的 `value` 对应的函数， 也就是 `eval("")`

### webpack5-单文件

打包结果：

```javascript
// ./dsit/main.js
(() => {
    var __webpack_modules__ = {
            "./src/index.js": () => {
                // 原始代码(已简化，后面有注释表示文件来源)
                eval("console.log('Hello webpack!')")
            }
        },
        __webpack_exports__ = {};
    __webpack_modules__["./src/index.js"]()
})();
```

webpack4与webpack5的打包结果对比：

1. 单文件抛弃不需要的module.exports；
2. 将function替换未箭头函数；

## 多文件打包

引入import后，看看webpack的打包结果

### 创建一个迷你的多文件系统

```javascript
// ./add.js
export default {
  add(a) {
    return a + 1
  }
}
// ./index.js
import A from './add'
console.log('Hello webpack!' + A.add(1))
```

### webpack4-多文件

对打包的文件进行一些删除和修改：

```javascript
;(function (modules) {
  function __webpack_require__(moduleId) {
    // ...
  }
   // 这些方法与上面单文件是一致的
  __webpack_require__.m = modules
  __webpack_require__.c = installedModules
  __webpack_require__.d = function (exports, name, getter) {}
  __webpack_require__.r = function (exports) {}
  __webpack_require__.t = function (value, mode) {}
  __webpack_require__.n = function (module) {}
  __webpack_require__.o = function (object, property) {}
  __webpack_require__.p = ''

  return __webpack_require__((__webpack_require__.s = './src/index.js'))
})({
  './src/add.js': function (module, __webpack_exports__, __webpack_require__) {
    ;('use strict')
    // eval('...')  下面是eval内的代码，将他们分离出来
    __webpack_require__.r(__webpack_exports__)
    __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ })
    const __WEBPACK_DEFAULT_EXPORT__ = {
      add(a) {
        return a + 1
      }
    }
  },
  './src/index.js': function (module, __webpack_exports__, __webpack_require__) {
    ;('use strict')
    // eval('...')  下面是eval内的代码，将他们分离出来
    __webpack_require__.r(__webpack_exports__)
    var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/add.js')
    console.log('Hello webpack!' + _add__WEBPACK_IMPORTED_MODULE_0__.default.add(1))
  }
})

```

### webpack5

```javascript
;(() => {
  'use strict'
  var __webpack_modules__ = {
      './src/add.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        // eval('...')  下面是eval内的代码，将他们分离出来
        __webpack_require__.r(__webpack_exports__)
        __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ })
        const __WEBPACK_DEFAULT_EXPORT__ = {
          add(a) {
            return a + 1
          }
        }
      },
      './src/index.js': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        // eval('...')  下面是eval内的代码，将他们分离出来
        __webpack_require__.r(__webpack_exports__)
        var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/add.js')
        console.log('Hello webpack!' + _add__WEBPACK_IMPORTED_MODULE_0__.default.add(1))
      }
    },
    __webpack_module_cache__ = {}
  function __webpack_require__(_) {
    // ...
    return __webpack_modules__[_]
  }
  ;(__webpack_require__.d = (_, e) => {
    for (var r in e) {
      // ...
    }
  }),
    (__webpack_require__.o = (_, e) => {}),
    (__webpack_require__.r = (_) => {})
  var __webpack_exports__ = __webpack_require__('./src/index.js')
})()

```

在多文件方面，webpack4和webpack5相差不大，webpack5在箭头函数，代码压缩和优化上做了优化。

## 质检App的打包代码分析

质检的App仓库，经过多年迭代，沉淀了很多的代码，打包的文件非常的庞大。用生产压缩模式打包，dist有大概23.5M的大小。

### dist文件结构

先大概讲一下打包后的文件dist的文件结构

```tex
./dist
  css // 样式
  fonts/   // 文字字符
  img/    // 图片资源
  js/     // JS存储
    // 0.js是开发模式下打包结果，生产模式是哈希值：chunk-0a358232.js
    0.js
    ...
    339.js
    app.js
    ...
  sql/  // 离线表结构
  static/ // 一些图片资源
  index.html
```

整个项目以vue框架开发，js文件大概是17M，占整个项目的70%。

### app.js

app.js文件大概有4.5M，是js文件中最大的文件，也是vue项目的核心文件，未压缩情况下格式化后有30万行代码。

下面是拆分下app.js的文件结构，不涉及其内部逻辑等。

```javascript
;(function (modules) {
  // 安装用于块加载的 JSONP 回调
  function webpackJsonpCallback(data) {
    var moreModules = data[1]
    // 将“moreModules”添加到模块对象中，
    // 然后将所有“chunkIds”标记为已加载并触发回调
    var moduleId
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId]
      }
    }
  }

  // 脚本路径函数
  function jsonpScriptSrc(chunkId) {
    return (
      __webpack_require__.p +
      'js/' +
      ({
        'report-meeting': 'report-meeting',
        'report-special-inspect-leader-index': 'report-special-inspect-leader-index'
        // ...
      }[chunkId] || chunkId) +
      '.js?v1621823336845'
    )
  }

  // 加载文件，缓存文件（删除了很多逻辑，只保留加载和缓存）
  __webpack_require__.e = function requireEnsure(chunkId) {
    var promises = []
    var installedChunkData = installedChunks[chunkId]
    if (installedChunkData) {
      promises.push(installedChunkData[2])
    } else {
      // 缓存
      var promise = new Promise(function (resolve, reject) {
        installedChunkData = installedChunks[chunkId] = [resolve, reject]
      })
      // 加载文件
      var script = document.createElement('script')
      script.src = jsonpScriptSrc(chunkId)
      document.head.appendChild(script)
    }
    return Promise.all(promises)
  }

  webpackJsonpCallback(jsonpArray[i])
  return hotCreateRequire(0)((__webpack_require__.s = 0))
})({
  // 例如：调用有赞的插件，方法
  './node_modules/_vant@2.2.8@vant/es/button/index.js': function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict'
    __webpack_require__.r(__webpack_exports__)
    // 关联方法，也是属于大对象里面
    var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      './node_modules/_@vue_babel-helper-vue-jsx-merge-props@1.2.1@@vue/babel-helper-vue-jsx-merge-props/dist/helper.js'
    )
    // __webpack_require__.n会判断module是否为es模块，
    // 当__esModule为true的时候，标识module为es模块，那么module.a默认返回module.default，否则返回module。
    var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default =
      __webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__)

    function Button() {
      // 内部逻辑和方法
      // ...
      _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()()
      // ... 存放一些参数
    }
  },
  // 上层调用此方法
  './node_modules/_@vue_babel-helper-vue-jsx-merge-props@1.2.1@@vue/babel-helper-vue-jsx-merge-props/dist/helper.js':
    function () {
      // ...
    },

  // 主路由文件，存放所有的路由
  './src/views/special-inspect-redo/config.js': function (
    module,
    __webpack_exports__,
    __webpack_require__
  ) {
    __webpack_exports__['default'] = [
      // 一个示例
      {
        path: '/check-index',
        name: 'CheckIndex',
        meta: {
          module: 'check'
        },
        component: function component() {
          return Promise.all([
            __webpack_require__.e(16),
            __webpack_require__.e(0),
            __webpack_require__.e(14),
            __webpack_require__.e(12),
            __webpack_require__.e(18),
            __webpack_require__.e(20),
            __webpack_require__.e(30),
            __webpack_require__.e(66),
            __webpack_require__.e(154)
          ]).then(__webpack_require__.bind(null, './src/views/check/index.vue'))
        }
      }
    ]
  }
})
```

app.js内的逻辑和上面webpack4的打包逻辑一致，都是将一个个文件放入对象中，作为一个module参数。webpack在里面添加了缓存和按需加载的代码。
