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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\nvar disabled = function disabled() {\n  return;\n};\n\nvar NearShore = function NearShore(props) {\n  if (props.clickedItem) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end item',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: props.clickedItem.alt === item.alt ? 'hidden' : null,\n          onClick: props.placeItemInBoat.length > 0 ? function () {\n            return disabled();\n          } : function () {\n            return props.checkItem(item);\n          },\n          src: props.clickedItem === item.alt ? _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__.default : item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end item',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          onClick: function onClick() {\n            return props.checkItem(item);\n          },\n          src: item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this);\n  }\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJkaXNhYmxlZCIsIk5lYXJTaG9yZSIsInByb3BzIiwiY2xpY2tlZEl0ZW0iLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJhbHQiLCJwbGFjZUl0ZW1JbkJvYXQiLCJsZW5ndGgiLCJjaGVja0l0ZW0iLCJwb29mIiwiaW1nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQjtBQUNELENBRkQ7O0FBSU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLE1BQUlBLEtBQUssQ0FBQ0MsV0FBVixFQUF1QjtBQUNyQix3QkFDRTtBQUFLLGVBQVMsRUFBRSxtREFBaEI7QUFBQSxnQkFDR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZCLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVMsRUFBRUosS0FBSyxDQUFDQyxXQUFOLENBQWtCSSxHQUFsQixLQUEwQkQsSUFBSSxDQUFDQyxHQUEvQixHQUFxQyxRQUFyQyxHQUFnRCxJQUFsRTtBQUNBLGlCQUFPLEVBQUVMLEtBQUssQ0FBQ00sZUFBTixDQUFzQkMsTUFBdEIsR0FBK0IsQ0FBL0IsR0FDSDtBQUFBLG1CQUFNVCxRQUFRLEVBQWQ7QUFBQSxXQURHLEdBRUg7QUFBQSxtQkFBTUUsS0FBSyxDQUFDUSxTQUFOLENBQWdCSixJQUFoQixDQUFOO0FBQUEsV0FITjtBQU1FLGFBQUcsRUFBRUosS0FBSyxDQUFDQyxXQUFOLEtBQXNCRyxJQUFJLENBQUNDLEdBQTNCLEdBQWlDSSw0REFBakMsR0FBd0NMLElBQUksQ0FBQ00sR0FOcEQ7QUFPRSxhQUFHLEVBQUVOLElBQUksQ0FBQ0MsR0FQWjtBQVFFLGVBQUssRUFBRSxHQVJUO0FBU0UsZ0JBQU0sRUFBRTtBQVRWLFdBS09ELElBQUksQ0FBQ08sRUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBYUQsT0FkQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQW1CRCxHQXBCRCxNQW9CTztBQUNMLHdCQUNFO0FBQUssZUFBUyxFQUFFLG1EQUFoQjtBQUFBLGdCQUNHWCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1KLEtBQUssQ0FBQ1EsU0FBTixDQUFnQkosSUFBaEIsQ0FBTjtBQUFBLFdBQWhCO0FBRUUsYUFBRyxFQUFFQSxJQUFJLENBQUNNLEdBRlo7QUFHRSxhQUFHLEVBQUVOLElBQUksQ0FBQ0MsR0FIWjtBQUlFLGVBQUssRUFBRSxHQUpUO0FBS0UsZ0JBQU0sRUFBRTtBQUxWLFdBQ09ELElBQUksQ0FBQ08sRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWVEO0FBQ0YsQ0F0Q007S0FBTVosUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvbmVhclNob3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgcG9vZiBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3Bvb2YucG5nJ1xuXG5jb25zdCBkaXNhYmxlZCA9ICgpID0+IHtcbiAgcmV0dXJuXG59XG5cbmV4cG9ydCBjb25zdCBOZWFyU2hvcmUgPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmNsaWNrZWRJdGVtKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgaXRlbSd9PlxuICAgICAgICB7cHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtwcm9wcy5jbGlja2VkSXRlbS5hbHQgPT09IGl0ZW0uYWx0ID8gJ2hpZGRlbicgOiBudWxsfSBcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnBsYWNlSXRlbUluQm9hdC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBkaXNhYmxlZCgpXG4gICAgICAgICAgICAgICAgOiAoKSA9PiBwcm9wcy5jaGVja0l0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e3Byb3BzLmNsaWNrZWRJdGVtID09PSBpdGVtLmFsdCA/IHBvb2YgOiBpdGVtLmltZ31cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfSAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgaXRlbSd9PlxuICAgICAgICB7cHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCkgPT4gcHJvcHMuY2hlY2tJdGVtKGl0ZW0pfSBcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfSBcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfSAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});