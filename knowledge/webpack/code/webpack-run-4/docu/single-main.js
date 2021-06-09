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
  /************************************************************************/
  {
    './src/index.js': function (module, exports) {
      eval("console.log('Hello webpack!')")
    }
  }
)
