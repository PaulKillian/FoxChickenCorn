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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar NearShore = function NearShore(props) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([{\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_3__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_4__.default,\n    alt: 'corn',\n    id: 3\n  }, {\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_5__.default,\n    alt: 'fox',\n    id: 1\n  }]),\n      items = _useState[0],\n      setitems = _useState[1];\n\n  var clickedItem = function clickedItem(event) {\n    var newNearShore = Object.assign({}, props.clicked);\n    console.log(newNearShore);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: 'd-flex justify-content-start align-items-end item',\n    children: items.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: item.img,\n        alt: item.alt,\n        width: 130,\n        height: 150,\n        onClick: function onClick() {\n          clickedItem(event);\n        }\n      }, item.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NearShore, \"c72JZXuYC17C2bVMGcGOK0C87dI=\");\n\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJOZWFyU2hvcmUiLCJwcm9wcyIsInVzZVN0YXRlIiwiaW1nIiwiY2hpY2tlbiIsImFsdCIsImlkIiwiY29ybiIsImZveCIsIml0ZW1zIiwic2V0aXRlbXMiLCJjbGlja2VkSXRlbSIsImV2ZW50IiwibmV3TmVhclNob3JlIiwiT2JqZWN0IiwiYXNzaWduIiwiY2xpY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDUkMsK0NBQVEsQ0FBQyxDQUNqQztBQUNFQyxPQUFHLEVBQUVDLCtEQURQO0FBRUVDLE9BQUcsRUFBRSxTQUZQO0FBR0VDLE1BQUUsRUFBRTtBQUhOLEdBRGlDLEVBTWpDO0FBQ0VILE9BQUcsRUFBRUksNERBRFA7QUFFRUYsT0FBRyxFQUFFLE1BRlA7QUFHRUMsTUFBRSxFQUFFO0FBSE4sR0FOaUMsRUFXakM7QUFDRUgsT0FBRyxFQUFFSywyREFEUDtBQUVFSCxPQUFHLEVBQUUsS0FGUDtBQUdFQyxNQUFFLEVBQUU7QUFITixHQVhpQyxDQUFELENBREE7QUFBQSxNQUMzQkcsS0FEMkI7QUFBQSxNQUNwQkMsUUFEb0I7O0FBbUJsQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0IsUUFBSUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZCxLQUFLLENBQUNlLE9BQXhCLENBQW5CO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFaO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBRSxtREFBaEI7QUFBQSxjQUNHSixLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDakIsMEJBQ0UsOERBQUMsbURBQUQ7QUFFRSxXQUFHLEVBQUVBLElBQUksQ0FBQ2pCLEdBRlo7QUFHRSxXQUFHLEVBQUVpQixJQUFJLENBQUNmLEdBSFo7QUFJRSxhQUFLLEVBQUUsR0FKVDtBQUtFLGNBQU0sRUFBRSxHQUxWO0FBTUUsZUFBTyxFQUFFLG1CQUFNO0FBQUNNLHFCQUFXLENBQUNDLEtBQUQsQ0FBWDtBQUFtQjtBQU5yQyxTQUNPUSxJQUFJLENBQUNkLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsS0FYQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQXhDTTs7R0FBTU4sUzs7S0FBQUEsUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbmVhclNob3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgcG9vZiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3Bvb2YucG5nJ1xuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9jaGlja2VuLnBuZydcbmltcG9ydCBjb3JuIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvY29ybi5wbmcnXG5pbXBvcnQgZm94IGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvZm94LnBuZydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBOZWFyU2hvcmUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRpdGVtc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaW1nOiBjaGlja2VuLFxuICAgICAgYWx0OiAnY2hpY2tlbicsXG4gICAgICBpZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogY29ybixcbiAgICAgIGFsdDogJ2Nvcm4nLFxuICAgICAgaWQ6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWc6IGZveCxcbiAgICAgIGFsdDogJ2ZveCcsXG4gICAgICBpZDogMSxcbiAgICB9XG4gIF0pO1xuXG4gIGNvbnN0IGNsaWNrZWRJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IG5ld05lYXJTaG9yZSA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNsaWNrZWQpO1xuICAgIGNvbnNvbGUubG9nKG5ld05lYXJTaG9yZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBpdGVtJ30+XG4gICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9IFxuICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7Y2xpY2tlZEl0ZW0oZXZlbnQpfX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX0gIFxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});