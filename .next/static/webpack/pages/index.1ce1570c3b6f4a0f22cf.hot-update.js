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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\nvar NearShore = function NearShore(props) {\n  var clickedItem = function clickedItem(event) {\n    var scene = Object.assign({}, props.nearShoreScene); // scene.alt = [event.target.alt]; \n\n    console.log(scene);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: 'd-flex justify-content-start align-items-end item',\n    children: props.nearShoreScene.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: item.id,\n        src: item.img,\n        alt: item.alt,\n        width: 130,\n        height: 150,\n        onClick: function onClick() {\n          clickedItem(event);\n        }\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJOZWFyU2hvcmUiLCJwcm9wcyIsImNsaWNrZWRJdGVtIiwiZXZlbnQiLCJzY2VuZSIsIk9iamVjdCIsImFzc2lnbiIsIm5lYXJTaG9yZVNjZW5lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJpZCIsImltZyIsImFsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDbEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCLFFBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsS0FBSyxDQUFDTSxjQUF4QixDQUFaLENBRDZCLENBRTdCOztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUUsbURBQWhCO0FBQUEsY0FDR0gsS0FBSyxDQUFDTSxjQUFOLENBQXFCRyxHQUFyQixDQUF5QixVQUFBQyxJQUFJLEVBQUk7QUFDaEMsMEJBQ0UsOERBQUMsbURBQUQ7QUFDRSxVQUFFLEVBQUVBLElBQUksQ0FBQ0MsRUFEWDtBQUdFLFdBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUhaO0FBSUUsV0FBRyxFQUFFRixJQUFJLENBQUNHLEdBSlo7QUFLRSxhQUFLLEVBQUUsR0FMVDtBQU1FLGNBQU0sRUFBRSxHQU5WO0FBT0UsZUFBTyxFQUFFLG1CQUFNO0FBQUNaLHFCQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUFtQjtBQVByQyxTQUVPUSxJQUFJLENBQUNDLEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsS0FaQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQXhCTTtLQUFNWixTIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBwb29mIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvcG9vZi5wbmcnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgTmVhclNob3JlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsaWNrZWRJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHNjZW5lID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMubmVhclNob3JlU2NlbmUpO1xuICAgIC8vIHNjZW5lLmFsdCA9IFtldmVudC50YXJnZXQuYWx0XTsgXG4gICAgY29uc29sZS5sb2coc2NlbmUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgaXRlbSd9PlxuICAgICAge3Byb3BzLm5lYXJTaG9yZVNjZW5lLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9IFxuICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y2xpY2tlZEl0ZW0oZXZlbnQpfX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX0gIFxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});