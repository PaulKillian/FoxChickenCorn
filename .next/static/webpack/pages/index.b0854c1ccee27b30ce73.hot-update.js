/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/boatAndFarmer.js":
/*!*******************************************!*\
  !*** ./pages/components/boatAndFarmer.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/boat.png */ \"./public/images/boat.png\");\n/* harmony import */ var _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/farmer.png */ \"./public/images/farmer.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/boatAndFarmer.js\";\n\n\n\n\n\nfunction BoatAndFarmer(props) {\n  var _this = this;\n\n  if (props.clickedItem) {\n    var _jsxDEV2;\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      id: 'boat-container',\n      onClick: props.boatIsOnNearShore ? function () {\n        return props.sendBoatToFarShore();\n      } : function () {\n        return props.sendBoatToNearShore();\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", (_jsxDEV2 = {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end float'\n      }, (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"className\", props.itemOnFarShore.length !== 0 ? 'd-flex flex-column justify-content-end float far-shore-rotate' : 'd-flex flex-column justify-content-end float'), (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"children\", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-relative farmer-position',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          alt: \"The farmer\",\n          width: 200,\n          height: 280\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: props.itemOnFarShore.length !== 0 ? 'hidden position-absolute' : 'position-absolute',\n        children: props.placeItemInBoat.map(function (item) {\n          item.alt === props.clickedItem.alt;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n            src: item.img,\n            alt: item.alt,\n            width: 130,\n            height: 150\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 33\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__.default,\n          alt: \"The row boat\",\n          width: 200,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }, this)]), _jsxDEV2), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      id: 'boat',\n      className: 'd-flex flex-column justify-content-end float',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-relative farmer-position',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          alt: \"The farmer\",\n          width: 200,\n          height: 280\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__.default,\n          alt: \"The row boat\",\n          width: 200,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_c = BoatAndFarmer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoatAndFarmer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoatAndFarmer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9ib2F0QW5kRmFybWVyLmpzPzQ4N2UiXSwibmFtZXMiOlsiQm9hdEFuZEZhcm1lciIsInByb3BzIiwiY2xpY2tlZEl0ZW0iLCJib2F0SXNPbk5lYXJTaG9yZSIsInNlbmRCb2F0VG9GYXJTaG9yZSIsInNlbmRCb2F0VG9OZWFyU2hvcmUiLCJpdGVtT25GYXJTaG9yZSIsImxlbmd0aCIsImZhcm1lciIsInBsYWNlSXRlbUluQm9hdCIsIm1hcCIsIml0ZW0iLCJhbHQiLCJpbWciLCJpZCIsImJvYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDMUIsTUFBSUEsS0FBSyxDQUFDQyxXQUFWLEVBQXVCO0FBQUE7O0FBQ25CLHdCQUNJO0FBQUssUUFBRSxFQUFFLGdCQUFUO0FBQTJCLGFBQU8sRUFDMUJELEtBQUssQ0FBQ0UsaUJBQU4sR0FDRTtBQUFBLGVBQU1GLEtBQUssQ0FBQ0csa0JBQU4sRUFBTjtBQUFBLE9BREYsR0FFRTtBQUFBLGVBQU1ILEtBQUssQ0FBQ0ksbUJBQU4sRUFBTjtBQUFBLE9BSFY7QUFBQSw2QkFLSTtBQUFLLFVBQUUsRUFBRSxNQUFUO0FBQWlCLGlCQUFTLEVBQUU7QUFBNUIsbUtBRVFKLEtBQUssQ0FBQ0ssY0FBTixDQUFxQkMsTUFBckIsS0FBZ0MsQ0FBaEMsR0FDRSwrREFERixHQUVFLDhDQUpWLDBLQU1JO0FBQUssaUJBQVMsRUFBRSxtQ0FBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFPLG1CQUFTLEVBQUUsUUFBbEI7QUFDQSxhQUFHLEVBQUVDLDhEQURMO0FBRUEsYUFBRyxFQUFDLFlBRko7QUFHQSxlQUFLLEVBQUUsR0FIUDtBQUlBLGdCQUFNLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBY0k7QUFBSyxpQkFBUyxFQUNWUCxLQUFLLENBQUNLLGNBQU4sQ0FBcUJDLE1BQXJCLEtBQWdDLENBQWhDLEdBQ0UsMEJBREYsR0FFRSxtQkFITjtBQUFBLGtCQUtDTixLQUFLLENBQUNRLGVBQU4sQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUFDLElBQUksRUFBSTtBQUMvQkEsY0FBSSxDQUFDQyxHQUFMLEtBQWFYLEtBQUssQ0FBQ0MsV0FBTixDQUFrQlUsR0FBL0I7QUFDSSw4QkFDSSw4REFBQyxtREFBRDtBQUVJLGVBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUZkO0FBR0ksZUFBRyxFQUFFRixJQUFJLENBQUNDLEdBSGQ7QUFJSSxpQkFBSyxFQUFFLEdBSlg7QUFLSSxrQkFBTSxFQUFFO0FBTFosYUFDU0QsSUFBSSxDQUFDRyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFTSCxTQVhKO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBZ0NJO0FBQUssaUJBQVMsRUFBRSxtQkFBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFPLG1CQUFTLEVBQUUsUUFBbEI7QUFDQSxhQUFHLEVBQUVDLDREQURMO0FBRUEsYUFBRyxFQUFDLGNBRko7QUFHQSxlQUFLLEVBQUUsR0FIUDtBQUlBLGdCQUFNLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBaURILEdBbERELE1Ba0RPO0FBQ0gsd0JBQ0k7QUFBSyxRQUFFLEVBQUUsTUFBVDtBQUFpQixlQUFTLEVBQUUsOENBQTVCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFLG1DQUFoQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVMsRUFBRSxRQUFsQjtBQUNBLGFBQUcsRUFBRVAsOERBREw7QUFFQSxhQUFHLEVBQUMsWUFGSjtBQUdBLGVBQUssRUFBRSxHQUhQO0FBSUEsZ0JBQU0sRUFBRTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFTSTtBQUFLLGlCQUFTLEVBQUUsbUJBQWhCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFLFFBQWxCO0FBQ0EsYUFBRyxFQUFFTyw0REFETDtBQUVBLGFBQUcsRUFBQyxjQUZKO0FBR0EsZUFBSyxFQUFFLEdBSFA7QUFJQSxnQkFBTSxFQUFFO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQW9CSDtBQUNKOztLQXpFUWYsYTtBQTJFVCwrREFBZUEsYUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvYm9hdEFuZEZhcm1lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGJvYXQgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9ib2F0LnBuZydcbmltcG9ydCBmYXJtZXIgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9mYXJtZXIucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmZ1bmN0aW9uIEJvYXRBbmRGYXJtZXIocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuY2xpY2tlZEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9eydib2F0LWNvbnRhaW5lcid9IG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5ib2F0SXNPbk5lYXJTaG9yZVxuICAgICAgICAgICAgICAgICAgICA/ICgpID0+IHByb3BzLnNlbmRCb2F0VG9GYXJTaG9yZSgpXG4gICAgICAgICAgICAgICAgICAgIDogKCkgPT4gcHJvcHMuc2VuZEJvYXRUb05lYXJTaG9yZSgpXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXsnYm9hdCd9IGNsYXNzTmFtZT17J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kIGZsb2F0J31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRlbU9uRmFyU2hvcmUubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBmbG9hdCBmYXItc2hvcmUtcm90YXRlJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kIGZsb2F0J1xuICAgICAgICAgICAgICAgICAgICB9PiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1yZWxhdGl2ZSBmYXJtZXItcG9zaXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmYXJtZXJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhlIGZhcm1lclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjgwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1PbkZhclNob3JlLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaGlkZGVuIHBvc2l0aW9uLWFic29sdXRlJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ3Bvc2l0aW9uLWFic29sdXRlJ1xuICAgICAgICAgICAgICAgICAgICB9PiBcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnBsYWNlSXRlbUluQm9hdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFsdCA9PT0gcHJvcHMuY2xpY2tlZEl0ZW0uYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXsnc2hhZG93J30gXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhlIHJvdyBib2F0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17J2JvYXQnfSBjbGFzc05hbWU9eydkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBmbG9hdCd9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tcmVsYXRpdmUgZmFybWVyLXBvc2l0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Zhcm1lcn0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlRoZSBmYXJtZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXsnc2hhZG93J30gXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Ym9hdH0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlRoZSByb3cgYm9hdFwiIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXRBbmRGYXJtZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/boatAndFarmer.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/boatAndFarmer */ \"./pages/components/boatAndFarmer.js\");\n/* harmony import */ var _components_constraints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/constraints */ \"./pages/components/constraints.js\");\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/particles */ \"./pages/components/particles.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _components_nearShore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nearShore */ \"./pages/components/nearShore.js\");\n/* harmony import */ var _components_farShore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/farShore */ \"./pages/components/farShore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'fox',\n    id: 1\n  }, {\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'corn',\n    id: 3\n  }]),\n      items = _useState2[0],\n      setitems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      placeItemInBoat = _useState3[0],\n      setPlaceItemInBoat = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      boatIsOnNearShore = _useState4[0],\n      setBoatIsOnNearShore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      animationEnd = _useState5[0],\n      setAnimationEnd = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      itemOnFarShore = _useState6[0],\n      setItemOnFarShore = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_particles__WEBPACK_IMPORTED_MODULE_5__.default)();\n    itemOnFarShore ? setPlaceItemInBoat([]) : null;\n  }, []);\n  console.log(itemOnFarShore);\n\n  var checkItem = function checkItem(item) {\n    if (item.id === 1) {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    } else if (item.id === 2) {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    } else {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    }\n\n    itemDropOff(item);\n  };\n\n  var sendBoatToFarShore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    var boat = document.getElementById('boat-container');\n    boat.classList.add('boat-animation');\n    boat.addEventListener('animationend', function () {\n      setBoatIsOnNearShore(false);\n    });\n  });\n\n  var itemDropOff = function itemDropOff(item) {\n    var boat = document.getElementById('boat');\n    boat.addEventListener('animationend', function () {\n      setAnimationEnd('boat landed on far shore');\n      var itemForFarShoreDropOff = [item];\n      setItemOnFarShore(itemForFarShoreDropOff);\n    });\n  };\n\n  var sendBoatToNearShore = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {\n    var boat = document.getElementById('boat-container');\n    boat.classList.add('boat-animation-to-nearShore');\n    boat.addEventListener('animationend', function () {\n      boat.classList.remove('boat-animation-to-nearShore', 'boat-animation');\n      setBoatIsOnNearShore(true);\n    });\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'landscape main-height',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_constraints__WEBPACK_IMPORTED_MODULE_4__.Constraints, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-between',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'd-flex justify-content-start align-items-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nearShore__WEBPACK_IMPORTED_MODULE_10__.NearShore, {\n          checkItem: checkItem,\n          items: items,\n          clickedItem: clickedItem\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_3__.default, {\n          clickedItem: clickedItem,\n          items: items,\n          placeItemInBoat: placeItemInBoat,\n          itemOnFarShore: itemOnFarShore,\n          boatIsOnNearShore: boatIsOnNearShore,\n          sendBoatToFarShore: sendBoatToFarShore,\n          sendBoatToNearShore: sendBoatToNearShore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_farShore__WEBPACK_IMPORTED_MODULE_11__.FarShore, {\n        itemOnFarShore: itemOnFarShore,\n        items: items,\n        animationEnd: animationEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"TlbFo8H+/aRNt7vEkiruzDY5Nlk=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaW1nIiwiZm94IiwiYWx0IiwiaWQiLCJjaGlja2VuIiwiY29ybiIsIml0ZW1zIiwic2V0aXRlbXMiLCJwbGFjZUl0ZW1JbkJvYXQiLCJzZXRQbGFjZUl0ZW1JbkJvYXQiLCJib2F0SXNPbk5lYXJTaG9yZSIsInNldEJvYXRJc09uTmVhclNob3JlIiwiYW5pbWF0aW9uRW5kIiwic2V0QW5pbWF0aW9uRW5kIiwiaXRlbU9uRmFyU2hvcmUiLCJzZXRJdGVtT25GYXJTaG9yZSIsInVzZUVmZmVjdCIsIlBhcnRpY2xlcyIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0l0ZW0iLCJpdGVtIiwiaXRlbURyb3BPZmYiLCJzZW5kQm9hdFRvRmFyU2hvcmUiLCJ1c2VDYWxsYmFjayIsImJvYXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW1Gb3JGYXJTaG9yZURyb3BPZmYiLCJzZW5kQm9hdFRvTmVhclNob3JlIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1NDLCtDQUFRLENBQUMsSUFBRCxDQURqQjtBQUFBLE1BQ3RCQyxXQURzQjtBQUFBLE1BQ1RDLGNBRFM7O0FBQUEsbUJBRUhGLCtDQUFRLENBQUMsQ0FDakM7QUFDRUcsT0FBRyxFQUFFQywyREFEUDtBQUVFQyxPQUFHLEVBQUUsS0FGUDtBQUdFQyxNQUFFLEVBQUU7QUFITixHQURpQyxFQU1qQztBQUNFSCxPQUFHLEVBQUVJLCtEQURQO0FBRUVGLE9BQUcs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QUFDQXRCLDBCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDRCxLQUhEO0FBSUQsR0FQc0MsQ0FBdkM7QUFTQSxzQkFDRTtBQUFNLGFBQVMsRUFBRSx1QkFBakI7QUFBQSw0QkFDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRSxnQ0FBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUUsOENBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsNkRBQUQ7QUFDRSxtQkFBUyxFQUFFUyxTQURiO0FBRUUsZUFBSyxFQUFFZCxLQUZUO0FBR0UscUJBQVcsRUFBRVI7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUUsOERBQUMsOERBQUQ7QUFDRSxxQkFBVyxFQUFFQSxXQURmO0FBRUUsZUFBSyxFQUFFUSxLQUZUO0FBR0UseUJBQWUsRUFBRUUsZUFIbkI7QUFJRSx3QkFBYyxFQUFFTSxjQUpsQjtBQUtFLDJCQUFpQixFQUFFSixpQkFMckI7QUFNRSw0QkFBa0IsRUFBRWEsa0JBTnRCO0FBT0UsNkJBQW1CLEVBQUVTO0FBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFpQkUsOERBQUMsMkRBQUQ7QUFDRSxzQkFBYyxFQUFFbEIsY0FEbEI7QUFFRSxhQUFLLEVBQUVSLEtBRlQ7QUFHRSxvQkFBWSxFQUFFTTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztHQXJHdUJoQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCBCb2F0QW5kRmFybWVyIGZyb20gJy4vY29tcG9uZW50cy9ib2F0QW5kRmFybWVyJ1xuaW1wb3J0IHsgQ29uc3RyYWludHMgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3RyYWludHMnXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJy4vY29tcG9uZW50cy9wYXJ0aWNsZXMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBjaGlja2VuIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvY2hpY2tlbi5wbmcnXG5pbXBvcnQgY29ybiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2Nvcm4ucG5nJ1xuaW1wb3J0IGZveCBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2ZveC5wbmcnXG5pbXBvcnQgeyBOZWFyU2hvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvbmVhclNob3JlJ1xuaW1wb3J0IHsgRmFyU2hvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvZmFyU2hvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjbGlja2VkSXRlbSwgc2V0Q2xpY2tlZEl0ZW1dID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2l0ZW1zLCBzZXRpdGVtc10gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgaW1nOiBmb3gsXG4gICAgICBhbHQ6ICdmb3gnLFxuICAgICAgaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWc6IGNoaWNrZW4sXG4gICAgICBhbHQ6ICdjaGlja2VuJyxcbiAgICAgIGlkOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1nOiBjb3JuLFxuICAgICAgYWx0OiAnY29ybicsXG4gICAgICBpZDogMyxcbiAgICB9XG4gIF0pXG4gIGNvbnN0IFtwbGFjZUl0ZW1JbkJvYXQsIHNldFBsYWNlSXRlbUluQm9hdF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbYm9hdElzT25OZWFyU2hvcmUsIHNldEJvYXRJc09uTmVhclNob3JlXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFthbmltYXRpb25FbmQsIHNldEFuaW1hdGlvbkVuZF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaXRlbU9uRmFyU2hvcmUsIHNldEl0ZW1PbkZhclNob3JlXSA9IHVzZVN0YXRlKFtdKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQYXJ0aWNsZXMoKTtcblxuICAgIGl0ZW1PbkZhclNob3JlIFxuICAgID8gc2V0UGxhY2VJdGVtSW5Cb2F0KFtdKVxuICAgIDogbnVsbFxuICB9LCBbXSlcbiAgY29uc29sZS5sb2coaXRlbU9uRmFyU2hvcmUpXG5cbiAgY29uc3QgY2hlY2tJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5pZCA9PT0gMSkge1xuICAgICAgICBzZXRDbGlja2VkSXRlbShpdGVtKVxuICAgICAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW2l0ZW1dKVxuICAgIH0gZWxzZSBpZiAoaXRlbS5pZCA9PT0gMikge1xuICAgICAgICBzZXRDbGlja2VkSXRlbShpdGVtKVxuICAgICAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW2l0ZW1dKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgICAgIHNldFBsYWNlSXRlbUluQm9hdChbaXRlbV0pXG4gICAgfVxuICAgIGl0ZW1Ecm9wT2ZmKGl0ZW0pXG4gIH1cblxuICBjb25zdCBzZW5kQm9hdFRvRmFyU2hvcmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0LWNvbnRhaW5lcicpXG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0LWFuaW1hdGlvbicpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRCb2F0SXNPbk5lYXJTaG9yZShmYWxzZSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGl0ZW1Ecm9wT2ZmID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQnKVxuICAgIGJvYXQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgc2V0QW5pbWF0aW9uRW5kKCdib2F0IGxhbmRlZCBvbiBmYXIgc2hvcmUnKTtcbiAgICAgIGNvbnN0IGl0ZW1Gb3JGYXJTaG9yZURyb3BPZmYgPSBbaXRlbV1cbiAgICAgIHNldEl0ZW1PbkZhclNob3JlKGl0ZW1Gb3JGYXJTaG9yZURyb3BPZmYpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBzZW5kQm9hdFRvTmVhclNob3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdC1jb250YWluZXInKVxuICAgIGJvYXQuY2xhc3NMaXN0LmFkZCgnYm9hdC1hbmltYXRpb24tdG8tbmVhclNob3JlJylcbiAgICBib2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGJvYXQuY2xhc3NMaXN0LnJlbW92ZSgnYm9hdC1hbmltYXRpb24tdG8tbmVhclNob3JlJywgJ2JvYXQtYW5pbWF0aW9uJylcbiAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKHRydWUpXG4gICAgfSlcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17J2xhbmRzY2FwZSBtYWluLWhlaWdodCd9PiBcbiAgICAgIDxDb25zdHJhaW50cyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCd9PlxuICAgICAgICAgIDxOZWFyU2hvcmUgXG4gICAgICAgICAgICBjaGVja0l0ZW09e2NoZWNrSXRlbX0gXG4gICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICBjbGlja2VkSXRlbT17Y2xpY2tlZEl0ZW19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm9hdEFuZEZhcm1lciBcbiAgICAgICAgICAgIGNsaWNrZWRJdGVtPXtjbGlja2VkSXRlbX1cbiAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgIHBsYWNlSXRlbUluQm9hdD17cGxhY2VJdGVtSW5Cb2F0fVxuICAgICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgICAgYm9hdElzT25OZWFyU2hvcmU9e2JvYXRJc09uTmVhclNob3JlfVxuICAgICAgICAgICAgc2VuZEJvYXRUb0ZhclNob3JlPXtzZW5kQm9hdFRvRmFyU2hvcmV9XG4gICAgICAgICAgICBzZW5kQm9hdFRvTmVhclNob3JlPXtzZW5kQm9hdFRvTmVhclNob3JlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmFyU2hvcmUgXG4gICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICBhbmltYXRpb25FbmQ9e2FuaW1hdGlvbkVuZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});