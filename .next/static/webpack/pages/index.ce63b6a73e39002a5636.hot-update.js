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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cjs_react_development__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/cjs/react.development */ \"./node_modules/react/cjs/react.development.js\");\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\n\nvar disabled = function disabled() {\n  return;\n};\n\nvar NearShore = function NearShore(props) {\n  if (props.clickedItem) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end item',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: props.hasBeenInBoat.map(function (boatItem) {\n            if (boatItem.alt === item.alt) return 'hidden';\n            console.log(boatItem.alt === item.alt);\n          }),\n          onClick: props.placeItemInBoat.length > 0 ? function () {\n            return disabled();\n          } : function () {\n            return props.checkItem(item);\n          },\n          src: props.clickedItem.dead === item.alt ? _public_images_poof_png__WEBPACK_IMPORTED_MODULE_3__.default : item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end item',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          onClick: function onClick() {\n            return props.checkItem(item);\n          },\n          src: item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this);\n  }\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJkaXNhYmxlZCIsIk5lYXJTaG9yZSIsInByb3BzIiwiY2xpY2tlZEl0ZW0iLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJoYXNCZWVuSW5Cb2F0IiwiYm9hdEl0ZW0iLCJhbHQiLCJjb25zb2xlIiwibG9nIiwicGxhY2VJdGVtSW5Cb2F0IiwibGVuZ3RoIiwiY2hlY2tJdGVtIiwiZGVhZCIsInBvb2YiLCJpbWciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDbEMsTUFBSUEsS0FBSyxDQUFDQyxXQUFWLEVBQXVCO0FBQ3JCLHdCQUNFO0FBQUssZUFBUyxFQUFFLG1EQUFoQjtBQUFBLGdCQUNHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFSixLQUFLLENBQUNLLGFBQU4sQ0FBb0JGLEdBQXBCLENBQXdCLFVBQUFHLFFBQVEsRUFBSTtBQUNwRCxnQkFBR0EsUUFBUSxDQUFDQyxHQUFULEtBQWlCSCxJQUFJLENBQUNHLEdBQXpCLEVBQThCLE9BQU8sUUFBUDtBQUM5QkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNDLEdBQVQsS0FBaUJILElBQUksQ0FBQ0csR0FBbEM7QUFDRCxXQUhpQixDQUFsQjtBQUlBLGlCQUFPLEVBQUVQLEtBQUssQ0FBQ1UsZUFBTixDQUFzQkMsTUFBdEIsR0FBK0IsQ0FBL0IsR0FDSDtBQUFBLG1CQUFNYixRQUFRLEVBQWQ7QUFBQSxXQURHLEdBRUg7QUFBQSxtQkFBTUUsS0FBSyxDQUFDWSxTQUFOLENBQWdCUixJQUFoQixDQUFOO0FBQUEsV0FOTjtBQVNFLGFBQUcsRUFBRUosS0FBSyxDQUFDQyxXQUFOLENBQWtCWSxJQUFsQixLQUEyQlQsSUFBSSxDQUFDRyxHQUFoQyxHQUFzQ08sNERBQXRDLEdBQTZDVixJQUFJLENBQUNXLEdBVHpEO0FBVUUsYUFBRyxFQUFFWCxJQUFJLENBQUNHLEdBVlo7QUFXRSxlQUFLLEVBQUUsR0FYVDtBQVlFLGdCQUFNLEVBQUU7QUFaVixXQVFPSCxJQUFJLENBQUNZLEVBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWdCRCxPQWpCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQXNCRCxHQXZCRCxNQXVCTztBQUNMLHdCQUNFO0FBQUssZUFBUyxFQUFFLG1EQUFoQjtBQUFBLGdCQUNHaEIsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZCLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8saUJBQU8sRUFBRTtBQUFBLG1CQUFNSixLQUFLLENBQUNZLFNBQU4sQ0FBZ0JSLElBQWhCLENBQU47QUFBQSxXQUFoQjtBQUVFLGFBQUcsRUFBRUEsSUFBSSxDQUFDVyxHQUZaO0FBR0UsYUFBRyxFQUFFWCxJQUFJLENBQUNHLEdBSFo7QUFJRSxlQUFLLEVBQUUsR0FKVDtBQUtFLGdCQUFNLEVBQUU7QUFMVixXQUNPSCxJQUFJLENBQUNZLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELE9BVkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFlRDtBQUNGLENBekNNO0tBQU1qQixTIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudCdcbmltcG9ydCBwb29mIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvcG9vZi5wbmcnXG5cbmNvbnN0IGRpc2FibGVkID0gKCkgPT4ge1xuICByZXR1cm5cbn1cblxuZXhwb3J0IGNvbnN0IE5lYXJTaG9yZSA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMuY2xpY2tlZEl0ZW0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBpdGVtJ30+XG4gICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3Byb3BzLmhhc0JlZW5JbkJvYXQubWFwKGJvYXRJdGVtID0+IHtcbiAgICAgICAgICAgICAgaWYoYm9hdEl0ZW0uYWx0ID09PSBpdGVtLmFsdCkgcmV0dXJuICdoaWRkZW4nXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvYXRJdGVtLmFsdCA9PT0gaXRlbS5hbHQpXG4gICAgICAgICAgICB9KX0gXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wbGFjZUl0ZW1JbkJvYXQubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gKCkgPT4gZGlzYWJsZWQoKVxuICAgICAgICAgICAgICAgIDogKCkgPT4gcHJvcHMuY2hlY2tJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgc3JjPXtwcm9wcy5jbGlja2VkSXRlbS5kZWFkID09PSBpdGVtLmFsdCA/IHBvb2YgOiBpdGVtLmltZ31cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfSAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQgaXRlbSd9PlxuICAgICAgICB7cHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCkgPT4gcHJvcHMuY2hlY2tJdGVtKGl0ZW0pfSBcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfSBcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfSAgXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});