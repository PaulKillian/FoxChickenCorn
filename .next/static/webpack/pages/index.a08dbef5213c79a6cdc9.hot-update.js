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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\nvar NearShore = function NearShore(props) {\n  var clickedItem = function clickedItem(event) {\n    var newScene = [];\n    props.nearShoreScene.map(function (item) {\n      item.id !== event.target.id && newScene.push(item);\n    });\n    props.setNearShoreScene(newScene);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: 'd-flex justify-content-start align-items-end item',\n    children: props.nearShoreScene.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: item.id,\n        src: item.img,\n        alt: item.alt,\n        width: 130,\n        height: 150,\n        onClick: function onClick() {\n          clickedItem(event);\n        }\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJOZWFyU2hvcmUiLCJwcm9wcyIsImNsaWNrZWRJdGVtIiwiZXZlbnQiLCJuZXdTY2VuZSIsIm5lYXJTaG9yZVNjZW5lIiwibWFwIiwiaXRlbSIsImlkIiwidGFyZ2V0IiwicHVzaCIsInNldE5lYXJTaG9yZVNjZW5lIiwiaW1nIiwiYWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUNsQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0IsUUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0FILFNBQUssQ0FBQ0ksY0FBTixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsSUFBSSxFQUFJO0FBQy9CQSxVQUFJLENBQUNDLEVBQUwsS0FBWUwsS0FBSyxDQUFDTSxNQUFOLENBQWFELEVBQXpCLElBQStCSixRQUFRLENBQUNNLElBQVQsQ0FBY0gsSUFBZCxDQUEvQjtBQUVELEtBSEQ7QUFLQU4sU0FBSyxDQUFDVSxpQkFBTixDQUF3QlAsUUFBeEI7QUFDRCxHQVJEOztBQVVBLHNCQUNFO0FBQUssYUFBUyxFQUFFLG1EQUFoQjtBQUFBLGNBQ0dILEtBQUssQ0FBQ0ksY0FBTixDQUFxQkMsR0FBckIsQ0FBeUIsVUFBQUMsSUFBSSxFQUFJO0FBQ2hDLDBCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsVUFBRSxFQUFFQSxJQUFJLENBQUNDLEVBRFg7QUFHRSxXQUFHLEVBQUVELElBQUksQ0FBQ0ssR0FIWjtBQUlFLFdBQUcsRUFBRUwsSUFBSSxDQUFDTSxHQUpaO0FBS0UsYUFBSyxFQUFFLEdBTFQ7QUFNRSxjQUFNLEVBQUUsR0FOVjtBQU9FLGVBQU8sRUFBRSxtQkFBTTtBQUFDWCxxQkFBVyxDQUFDQyxLQUFELENBQVg7QUFBbUI7QUFQckMsU0FFT0ksSUFBSSxDQUFDQyxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELEtBWkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0E1Qk07S0FBTVIsUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbmVhclNob3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgcG9vZiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3Bvb2YucG5nJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IE5lYXJTaG9yZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjbGlja2VkSXRlbSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1NjZW5lID0gW11cbiAgICBwcm9wcy5uZWFyU2hvcmVTY2VuZS5tYXAoaXRlbSA9PiB7XG4gICAgICBpdGVtLmlkICE9PSBldmVudC50YXJnZXQuaWQgJiYgbmV3U2NlbmUucHVzaChpdGVtKVxuICAgICAgXG4gICAgfSk7XG5cbiAgICBwcm9wcy5zZXROZWFyU2hvcmVTY2VuZShuZXdTY2VuZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBpdGVtJ30+XG4gICAgICB7cHJvcHMubmVhclNob3JlU2NlbmUubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgc3JjPXtpdGVtLmltZ30gXG4gICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtjbGlja2VkSXRlbShldmVudCl9fVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0pfSAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});