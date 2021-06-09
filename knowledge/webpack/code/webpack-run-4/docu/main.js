;(function (modules) {
  function __webpack_require__(moduleId) {
    // ...
  }
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
