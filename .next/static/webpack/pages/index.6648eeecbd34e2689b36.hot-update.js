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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\nvar disabled = function disabled() {\n  return;\n};\n\nvar NearShore = function NearShore(props) {\n  if (props.clickedItem) {\n    // console.log(props.clickedItem)\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end item',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: props.clickedItem.forEach(function (element) {\n            // console.log(\"hidden\", element.hidden)\n            // console.log(\"item\", item.alt)\n            element.hidden === item.alt ? 'hidden' : null;\n          }),\n          onClick: props.placeItemInBoat.length > 0 ? function () {\n            return disabled();\n          } : function () {\n            return props.checkItem(item);\n          },\n          src: props.clickedItem.forEach(function (element) {\n            console.log(element, item.alt);\n            element.dead === item.alt ? _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__.default : item.img;\n          }),\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end item',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          onClick: function onClick() {\n            return props.checkItem(item);\n          },\n          src: item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this);\n  }\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJkaXNhYmxlZCIsIk5lYXJTaG9yZSIsInByb3BzIiwiY2xpY2tlZEl0ZW0iLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJmb3JFYWNoIiwiZWxlbWVudCIsImhpZGRlbiIsImFsdCIsInBsYWNlSXRlbUluQm9hdCIsImxlbmd0aCIsImNoZWNrSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJkZWFkIiwicG9vZiIsImltZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckI7QUFDRCxDQUZEOztBQUlPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUNsQyxNQUFJQSxLQUFLLENBQUNDLFdBQVYsRUFBdUI7QUFDckI7QUFDQSx3QkFDRTtBQUFLLGVBQVMsRUFBRSxtREFBaEI7QUFBQSxnQkFDR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZCLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVMsRUFBRUosS0FBSyxDQUFDQyxXQUFOLENBQWtCSSxPQUFsQixDQUEwQixVQUFBQyxPQUFPLEVBQUk7QUFDckQ7QUFDQTtBQUNBQSxtQkFBTyxDQUFDQyxNQUFSLEtBQW1CSCxJQUFJLENBQUNJLEdBQXhCLEdBQ0ksUUFESixHQUVJLElBRko7QUFHRCxXQU5pQixDQUFsQjtBQU9BLGlCQUFPLEVBQUVSLEtBQUssQ0FBQ1MsZUFBTixDQUFzQkMsTUFBdEIsR0FBK0IsQ0FBL0IsR0FDSDtBQUFBLG1CQUFNWixRQUFRLEVBQWQ7QUFBQSxXQURHLEdBRUg7QUFBQSxtQkFBTUUsS0FBSyxDQUFDVyxTQUFOLENBQWdCUCxJQUFoQixDQUFOO0FBQUEsV0FUTjtBQVlFLGFBQUcsRUFBRUosS0FBSyxDQUFDQyxXQUFOLENBQWtCSSxPQUFsQixDQUEwQixVQUFBQyxPQUFPLEVBQUk7QUFDeENNLG1CQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBWixFQUFxQkYsSUFBSSxDQUFDSSxHQUExQjtBQUNBRixtQkFBTyxDQUFDUSxJQUFSLEtBQWlCVixJQUFJLENBQUNJLEdBQXRCLEdBQTRCTyw0REFBNUIsR0FBbUNYLElBQUksQ0FBQ1ksR0FBeEM7QUFDRCxXQUhJLENBWlA7QUFnQkUsYUFBRyxFQUFFWixJQUFJLENBQUNJLEdBaEJaO0FBaUJFLGVBQUssRUFBRSxHQWpCVDtBQWtCRSxnQkFBTSxFQUFFO0FBbEJWLFdBV09KLElBQUksQ0FBQ2EsRUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBc0JELE9BdkJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBNEJELEdBOUJELE1BOEJPO0FBQ0wsd0JBQ0U7QUFBSyxlQUFTLEVBQUUsbURBQWhCO0FBQUEsZ0JBQ0dqQixLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1KLEtBQUssQ0FBQ1csU0FBTixDQUFnQlAsSUFBaEIsQ0FBTjtBQUFBLFdBQWhCO0FBRUUsYUFBRyxFQUFFQSxJQUFJLENBQUNZLEdBRlo7QUFHRSxhQUFHLEVBQUVaLElBQUksQ0FBQ0ksR0FIWjtBQUlFLGVBQUssRUFBRSxHQUpUO0FBS0UsZ0JBQU0sRUFBRTtBQUxWLFdBQ09KLElBQUksQ0FBQ2EsRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWVEO0FBQ0YsQ0FoRE07S0FBTWxCLFMiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25lYXJTaG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHBvb2YgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9wb29mLnBuZydcblxuY29uc3QgZGlzYWJsZWQgPSAoKSA9PiB7XG4gIHJldHVyblxufVxuXG5leHBvcnQgY29uc3QgTmVhclNob3JlID0gKHByb3BzKSA9PiB7XG4gIGlmIChwcm9wcy5jbGlja2VkSXRlbSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmNsaWNrZWRJdGVtKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGl0ZW0nfT5cbiAgICAgICAge3Byb3BzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17cHJvcHMuY2xpY2tlZEl0ZW0uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaWRkZW5cIiwgZWxlbWVudC5oaWRkZW4pXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXRlbVwiLCBpdGVtLmFsdClcbiAgICAgICAgICAgICAgZWxlbWVudC5oaWRkZW4gPT09IGl0ZW0uYWx0IFxuICAgICAgICAgICAgICAgID8gJ2hpZGRlbicgXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnBsYWNlSXRlbUluQm9hdC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBkaXNhYmxlZCgpXG4gICAgICAgICAgICAgICAgOiAoKSA9PiBwcm9wcy5jaGVja0l0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmNsaWNrZWRJdGVtLmZvckVhY2goZWxlbWVudCA9PiB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQsIGl0ZW0uYWx0KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGVhZCA9PT0gaXRlbS5hbHQgPyBwb29mIDogaXRlbS5pbWdcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX0gIFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kIGl0ZW0nfT5cbiAgICAgICAge3Byb3BzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoZWNrSXRlbShpdGVtKX0gXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ30gXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX0gIFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});