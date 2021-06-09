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
