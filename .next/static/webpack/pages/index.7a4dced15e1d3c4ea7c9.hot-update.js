/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/nearShore.js":
/*!***************************************!*\
  !*** ./pages/components/nearShore.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\nvar NearShore = function NearShore(props) {\n  if (props.clickedItem) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end',\n      children: props.nearShoreItems.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: props.clickedItem.alt === item.alt ? 'hidden' : null,\n          src: props.clickedItem === item.alt ? _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__.default : item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end',\n      children: props.nearShoreItems.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          onClick: function onClick() {\n            return props.checkItem(item);\n          },\n          src: item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this);\n  }\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJOZWFyU2hvcmUiLCJwcm9wcyIsImNsaWNrZWRJdGVtIiwibmVhclNob3JlSXRlbXMiLCJtYXAiLCJpdGVtIiwiYWx0IiwicG9vZiIsImltZyIsImlkIiwiY2hlY2tJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLE1BQUlBLEtBQUssQ0FBQ0MsV0FBVixFQUF1QjtBQUNyQix3QkFDRTtBQUFLLGVBQVMsRUFBRSw4Q0FBaEI7QUFBQSxnQkFDR0QsS0FBSyxDQUFDRSxjQUFOLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxJQUFJLEVBQUk7QUFDaEMsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFSixLQUFLLENBQUNDLFdBQU4sQ0FBa0JJLEdBQWxCLEtBQTBCRCxJQUFJLENBQUNDLEdBQS9CLEdBQXFDLFFBQXJDLEdBQWdELElBQWxFO0FBRUUsYUFBRyxFQUFFTCxLQUFLLENBQUNDLFdBQU4sS0FBc0JHLElBQUksQ0FBQ0MsR0FBM0IsR0FBaUNDLDREQUFqQyxHQUF3Q0YsSUFBSSxDQUFDRyxHQUZwRDtBQUdFLGFBQUcsRUFBRUgsSUFBSSxDQUFDQyxHQUhaO0FBSUUsZUFBSyxFQUFFLEdBSlQ7QUFLRSxnQkFBTSxFQUFFO0FBTFYsV0FDT0QsSUFBSSxDQUFDSSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFTRCxPQVZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBZUQsR0FoQkQsTUFnQk87QUFDTCx3QkFDRTtBQUFLLGVBQVMsRUFBRSw4Q0FBaEI7QUFBQSxnQkFDR1IsS0FBSyxDQUFDRSxjQUFOLENBQXFCQyxHQUFyQixDQUF5QixVQUFBQyxJQUFJLEVBQUk7QUFDaEMsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1KLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkwsSUFBaEIsQ0FBTjtBQUFBLFdBQWhCO0FBRUUsYUFBRyxFQUFFQSxJQUFJLENBQUNHLEdBRlo7QUFHRSxhQUFHLEVBQUVILElBQUksQ0FBQ0MsR0FIWjtBQUlFLGVBQUssRUFBRSxHQUpUO0FBS0UsZ0JBQU0sRUFBRTtBQUxWLFdBQ09ELElBQUksQ0FBQ0ksRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWVEO0FBQ0YsQ0FsQ007S0FBTVQsUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbmVhclNob3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgcG9vZiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3Bvb2YucG5nJ1xuXG5leHBvcnQgY29uc3QgTmVhclNob3JlID0gKHByb3BzKSA9PiB7XG4gIGlmIChwcm9wcy5jbGlja2VkSXRlbSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kJ30+XG4gICAgICAgIHtwcm9wcy5uZWFyU2hvcmVJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3Byb3BzLmNsaWNrZWRJdGVtLmFsdCA9PT0gaXRlbS5hbHQgPyAnaGlkZGVuJyA6IG51bGx9XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5jbGlja2VkSXRlbSA9PT0gaXRlbS5hbHQgPyBwb29mIDogaXRlbS5pbWd9XG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX0gIFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kJ30+XG4gICAgICAgIHtwcm9wcy5uZWFyU2hvcmVJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGVja0l0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ30gXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX0gIFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});