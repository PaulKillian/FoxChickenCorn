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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_boat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/boat.png */ \"./public/images/boat.png\");\n/* harmony import */ var _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/farmer.png */ \"./public/images/farmer.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar items = [{\n  img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_1__.default,\n  alt: 'fox',\n  hidden: 'hidden'\n}, {\n  img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_2__.default,\n  alt: 'chicken',\n  hidden: 'hidden'\n}, {\n  img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_3__.default,\n  alt: 'corn',\n  hidden: 'hidden'\n}];\nvar NearShore = function NearShore(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: 'd-flex justify-content-start align-items-end',\n    children: nearShoreItems.map(function (item) {\n      /*#__PURE__*/\n      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n        className: 'shadow',\n        onClick: function onClick() {\n          return props.checkItem(props.id);\n        },\n        src: item.img,\n        alt: item.alt,\n        width: 130,\n        height: 150\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this) // <Image className={'shadow'}\n  //     src={boat} \n  //     alt=\"Boat\" \n  //     width={200}\n  //     height={50}\n  // />\n  // <Image className={'shadow'}\n  //     src={farmer} \n  //     alt=\"Farmer\" \n  //     width={200}\n  //     height={280}\n  // />\n  ;\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJpdGVtcyIsImltZyIsImZveCIsImFsdCIsImhpZGRlbiIsImNoaWNrZW4iLCJjb3JuIiwiTmVhclNob3JlIiwicHJvcHMiLCJuZWFyU2hvcmVJdGVtcyIsIm1hcCIsIml0ZW0iLCJjaGVja0l0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNaO0FBQ0VDLEtBQUcsRUFBRUMsMkRBRFA7QUFFRUMsS0FBRyxFQUFFLEtBRlA7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FEWSxFQU1aO0FBQ0VILEtBQUcsRUFBRUksK0RBRFA7QUFFRUYsS0FBRyxFQUFFLFNBRlA7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FOWSxFQVdaO0FBQ0VILEtBQUcsRUFBRUssNERBRFA7QUFFRUgsS0FBRyxFQUFFLE1BRlA7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FYWSxDQUFkO0FBbUJPLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUNsQyxzQkFDRTtBQUFLLGFBQVMsRUFBRSw4Q0FBaEI7QUFBQSxjQUNHQyxjQUFjLENBQUNDLEdBQWYsQ0FBbUIsVUFBQUMsSUFBSSxFQUFJO0FBQzFCO0FBQUEsb0VBQUMsbURBQUQ7QUFBTyxpQkFBUyxFQUFFLFFBQWxCO0FBQTRCLGVBQU8sRUFBRTtBQUFBLGlCQUFNSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JKLEtBQUssQ0FBQ0ssRUFBdEIsQ0FBTjtBQUFBLFNBQXJDO0FBRUUsV0FBRyxFQUFFRixJQUFJLENBQUNWLEdBRlo7QUFHRSxXQUFHLEVBQUVVLElBQUksQ0FBQ1IsR0FIWjtBQUlFLGFBQUssRUFBRSxHQUpUO0FBS0UsY0FBTSxFQUFFO0FBTFYsU0FDT1EsSUFBSSxDQUFDRSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPRCxLQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBY0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJGO0FBMkJELENBNUJNO0tBQU1OLFMiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25lYXJTaG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3ggZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9mb3gucG5nJ1xuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9jaGlja2VuLnBuZydcbmltcG9ydCBjb3JuIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvY29ybi5wbmcnXG5pbXBvcnQgYm9hdCBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2JvYXQucG5nJ1xuaW1wb3J0IGZhcm1lciBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2Zhcm1lci5wbmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuY29uc3QgaXRlbXMgPSBbXG4gIHtcbiAgICBpbWc6IGZveCxcbiAgICBhbHQ6ICdmb3gnLFxuICAgIGhpZGRlbjogJ2hpZGRlbidcbiAgfSxcbiAge1xuICAgIGltZzogY2hpY2tlbixcbiAgICBhbHQ6ICdjaGlja2VuJyxcbiAgICBoaWRkZW46ICdoaWRkZW4nXG4gIH0sXG4gIHtcbiAgICBpbWc6IGNvcm4sXG4gICAgYWx0OiAnY29ybicsXG4gICAgaGlkZGVuOiAnaGlkZGVuJ1xuICB9XG5dXG5cblxuZXhwb3J0IGNvbnN0IE5lYXJTaG9yZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQnfT5cbiAgICAgIHtuZWFyU2hvcmVJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGVja0l0ZW0ocHJvcHMuaWQpfVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBzcmM9e2l0ZW0uaW1nfSBcbiAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAvPlxuICAgICAgfSl9XG4gICAgICBcbiAgICA8L2Rpdj5cblxuICAgIC8vIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfVxuICAgIC8vICAgICBzcmM9e2JvYXR9IFxuICAgIC8vICAgICBhbHQ9XCJCb2F0XCIgXG4gICAgLy8gICAgIHdpZHRoPXsyMDB9XG4gICAgLy8gICAgIGhlaWdodD17NTB9XG4gICAgLy8gLz5cbiAgICAvLyA8SW1hZ2UgY2xhc3NOYW1lPXsnc2hhZG93J31cbiAgICAvLyAgICAgc3JjPXtmYXJtZXJ9IFxuICAgIC8vICAgICBhbHQ9XCJGYXJtZXJcIiBcbiAgICAvLyAgICAgd2lkdGg9ezIwMH1cbiAgICAvLyAgICAgaGVpZ2h0PXsyODB9XG4gICAgLy8gLz5cbiAgKVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});