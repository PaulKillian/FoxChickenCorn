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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NearShore\": function() { return /* binding */ NearShore; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/poof.png */ \"./public/images/poof.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/nearShore.js\",\n    _this = undefined;\n\n\n\n\nvar disabled = function disabled() {\n  return;\n};\n\nvar NearShore = function NearShore(props) {\n  console.log(props.placeItemInBoat);\n\n  if (props.clickedItem) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          className: props.clickedItem.alt === item.alt ? 'hidden' : null,\n          onClick: props.placeItemInBoat !== null ? function () {\n            return disabled();\n          } : function () {\n            return props.checkItem(item);\n          },\n          src: props.clickedItem === item.alt ? _public_images_poof_png__WEBPACK_IMPORTED_MODULE_2__.default : item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-start align-items-end item',\n      children: props.items.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          onClick: function onClick() {\n            return props.checkItem(item);\n          },\n          src: item.img,\n          alt: item.alt,\n          width: 130,\n          height: 150\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this);\n  }\n};\n_c = NearShore;\n\nvar _c;\n\n$RefreshReg$(_c, \"NearShore\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZWFyU2hvcmUuanM/ZDdmNCJdLCJuYW1lcyI6WyJkaXNhYmxlZCIsIk5lYXJTaG9yZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBsYWNlSXRlbUluQm9hdCIsImNsaWNrZWRJdGVtIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiYWx0IiwiY2hlY2tJdGVtIiwicG9vZiIsImltZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckI7QUFDRCxDQUZEOztBQUlPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUNsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csZUFBbEI7O0FBQ0EsTUFBSUgsS0FBSyxDQUFDSSxXQUFWLEVBQXVCO0FBQ3JCLHdCQUNFO0FBQUssZUFBUyxFQUFFLDhDQUFoQjtBQUFBLGdCQUNHSixLQUFLLENBQUNLLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFUCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JJLEdBQWxCLEtBQTBCRCxJQUFJLENBQUNDLEdBQS9CLEdBQXFDLFFBQXJDLEdBQWdELElBQWxFO0FBQ0EsaUJBQU8sRUFBRVIsS0FBSyxDQUFDRyxlQUFOLEtBQTBCLElBQTFCLEdBQ0g7QUFBQSxtQkFBTUwsUUFBUSxFQUFkO0FBQUEsV0FERyxHQUVIO0FBQUEsbUJBQU1FLEtBQUssQ0FBQ1MsU0FBTixDQUFnQkYsSUFBaEIsQ0FBTjtBQUFBLFdBSE47QUFNRSxhQUFHLEVBQUVQLEtBQUssQ0FBQ0ksV0FBTixLQUFzQkcsSUFBSSxDQUFDQyxHQUEzQixHQUFpQ0UsNERBQWpDLEdBQXdDSCxJQUFJLENBQUNJLEdBTnBEO0FBT0UsYUFBRyxFQUFFSixJQUFJLENBQUNDLEdBUFo7QUFRRSxlQUFLLEVBQUUsR0FSVDtBQVNFLGdCQUFNLEVBQUU7QUFUVixXQUtPRCxJQUFJLENBQUNLLEVBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWFELE9BZEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFtQkQsR0FwQkQsTUFvQk87QUFDTCx3QkFDRTtBQUFLLGVBQVMsRUFBRSxtREFBaEI7QUFBQSxnQkFDR1osS0FBSyxDQUFDSyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQ3ZCLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8saUJBQU8sRUFBRTtBQUFBLG1CQUFNUCxLQUFLLENBQUNTLFNBQU4sQ0FBZ0JGLElBQWhCLENBQU47QUFBQSxXQUFoQjtBQUVFLGFBQUcsRUFBRUEsSUFBSSxDQUFDSSxHQUZaO0FBR0UsYUFBRyxFQUFFSixJQUFJLENBQUNDLEdBSFo7QUFJRSxlQUFLLEVBQUUsR0FKVDtBQUtFLGdCQUFNLEVBQUU7QUFMVixXQUNPRCxJQUFJLENBQUNLLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELE9BVkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFlRDtBQUNGLENBdkNNO0tBQU1iLFMiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25lYXJTaG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHBvb2YgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9wb29mLnBuZydcblxuY29uc3QgZGlzYWJsZWQgPSAoKSA9PiB7XG4gIHJldHVyblxufVxuXG5leHBvcnQgY29uc3QgTmVhclNob3JlID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzLnBsYWNlSXRlbUluQm9hdClcbiAgaWYgKHByb3BzLmNsaWNrZWRJdGVtKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQnfT5cbiAgICAgICAge3Byb3BzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17cHJvcHMuY2xpY2tlZEl0ZW0uYWx0ID09PSBpdGVtLmFsdCA/ICdoaWRkZW4nIDogbnVsbH0gXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5wbGFjZUl0ZW1JbkJvYXQgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/ICgpID0+IGRpc2FibGVkKClcbiAgICAgICAgICAgICAgICA6ICgpID0+IHByb3BzLmNoZWNrSXRlbShpdGVtKVxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHNyYz17cHJvcHMuY2xpY2tlZEl0ZW0gPT09IGl0ZW0uYWx0ID8gcG9vZiA6IGl0ZW0uaW1nfVxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICAgICAgd2lkdGg9ezEzMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9ICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCBpdGVtJ30+XG4gICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGVja0l0ZW0oaXRlbSl9IFxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9IFxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICAgICAgd2lkdGg9ezEzMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9ICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/nearShore.js\n");

/***/ })

});