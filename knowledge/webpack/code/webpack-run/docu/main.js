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
