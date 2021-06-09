/*! For license information please see main.js.LICENSE.txt */
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
    var e = __webpack_module_cache__[_]
    if (void 0 !== e) return e.exports
    var r = (__webpack_module_cache__[_] = { exports: {} })
    return __webpack_modules__[_](r, r.exports, __webpack_require__), r.exports
  }
  ;(__webpack_require__.d = (_, e) => {
    for (var r in e)
      __webpack_require__.o(e, r) &&
        !__webpack_require__.o(_, r) &&
        Object.defineProperty(_, r, { enumerable: !0, get: e[r] })
  }),
    (__webpack_require__.o = (_, e) => Object.prototype.hasOwnProperty.call(_, e)),
    (__webpack_require__.r = (_) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(_, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(_, '__esModule', { value: !0 })
    })
  var __webpack_exports__ = __webpack_require__('./src/index.js')
})()
