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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\nvar NearShore = function NearShore(props) {\n  var clickedItem = function clickedItem(event) {\n    var newScene = props.nearShoreScene.filter(function (item, index) {\n      // console.log('p', scene)\n      event.target.id !== item[index].id;\n    });\n    props.setNearShoreScene(newScene);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: 'd-flex justify-content-start align-items-end item',\n    children: props.nearShoreScene.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: item.id,\n        src: item.img,\n        alt: item.alt,\n        width: 130,\n        height: 150,\n        onClick: function onClick() {\n          clickedItem(event);\n        }\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJOZWFyU2hvcmUiLCJwcm9wcyIsImNsaWNrZWRJdGVtIiwiZXZlbnQiLCJuZXdTY2VuZSIsIm5lYXJTaG9yZVNjZW5lIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwidGFyZ2V0IiwiaWQiLCJzZXROZWFyU2hvcmVTY2VuZSIsIm1hcCIsImltZyIsImFsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDbEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCLFFBQU1DLFFBQVEsR0FBR0gsS0FBSyxDQUFDSSxjQUFOLENBQXFCQyxNQUFyQixDQUE0QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDNUQ7QUFDQUwsV0FBSyxDQUFDTSxNQUFOLENBQWFDLEVBQWIsS0FBb0JILElBQUksQ0FBQ0MsS0FBRCxDQUFKLENBQVlFLEVBQWhDO0FBQ0QsS0FIZ0IsQ0FBakI7QUFLQVQsU0FBSyxDQUFDVSxpQkFBTixDQUF3QlAsUUFBeEI7QUFDRCxHQVBEOztBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFFLG1EQUFoQjtBQUFBLGNBQ0dILEtBQUssQ0FBQ0ksY0FBTixDQUFxQk8sR0FBckIsQ0FBeUIsVUFBQUwsSUFBSSxFQUFJO0FBQ2hDLDBCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBRSxFQUFFQSxJQUFJLENBQUNHLEVBRFg7QUFHRSxXQUFHLEVBQUVILElBQUksQ0FBQ00sR0FIWjtBQUlFLFdBQUcsRUFBRU4sSUFBSSxDQUFDTyxHQUpaO0FBS0UsYUFBSyxFQUFFLEdBTFQ7QUFNRSxjQUFNLEVBQUUsR0FOVjtBQU9FLGVBQU8sRUFBRSxtQkFBTTtBQUFDWixxQkFBVyxDQUFDQyxLQUFELENBQVg7QUFBbUI7QUFQckMsU0FFT0ksSUFBSSxDQUFDRyxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELEtBWkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0EzQk07S0FBTVYsUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbmVhclNob3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgcG9vZiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3Bvb2YucG5nJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IE5lYXJTaG9yZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjbGlja2VkSXRlbSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1NjZW5lID0gcHJvcHMubmVhclNob3JlU2NlbmUuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3AnLCBzY2VuZSlcbiAgICAgIGV2ZW50LnRhcmdldC5pZCAhPT0gaXRlbVtpbmRleF0uaWRcbiAgICB9KTtcblxuICAgIHByb3BzLnNldE5lYXJTaG9yZVNjZW5lKG5ld1NjZW5lKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGl0ZW0nfT5cbiAgICAgIHtwcm9wcy5uZWFyU2hvcmVTY2VuZS5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfSBcbiAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgd2lkdGg9ezEzMH1cbiAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2NsaWNrZWRJdGVtKGV2ZW50KX19XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSl9ICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});