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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_boat_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/boat.png */ \"./public/images/boat.png\");\n/* harmony import */ var _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/farmer.png */ \"./public/images/farmer.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/boatAndFarmer.js\";\n\n\n\n\n\nfunction BoatAndFarmer(props) {\n  var _this = this;\n\n  if (props.clickedItem) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'boat-animation',\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end float',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: props.itemOnFarShore.length !== 0 ? 'position-relative farmer-position far-shore-rotate' : 'position-relative farmer-position',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            className: 'shadow',\n            src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_3__.default,\n            alt: \"The farmer\",\n            width: 200,\n            height: 280\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: props.itemOnFarShore.length !== 0 ? 'hidden position-absolute' : 'position-absolute',\n          children: props.placeItemInBoat.map(function (item) {\n            item.alt === props.clickedItem.alt;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              src: item.img,\n              alt: item.alt,\n              width: 130,\n              height: 150\n            }, item.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 33\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: 'position-absolute',\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n            className: 'shadow',\n            src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_2__.default,\n            alt: \"The row boat\",\n            width: 200,\n            height: 50\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: 'boat',\n      className: 'd-flex flex-column justify-content-end float',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'position-relative farmer-position',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          className: 'shadow',\n          src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_3__.default,\n          alt: \"The farmer\",\n          width: 200,\n          height: 280\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n          className: 'shadow',\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_2__.default,\n          alt: \"The row boat\",\n          width: 200,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_c = BoatAndFarmer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoatAndFarmer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoatAndFarmer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9ib2F0QW5kRmFybWVyLmpzPzQ4N2UiXSwibmFtZXMiOlsiQm9hdEFuZEZhcm1lciIsInByb3BzIiwiY2xpY2tlZEl0ZW0iLCJpdGVtT25GYXJTaG9yZSIsImxlbmd0aCIsImZhcm1lciIsInBsYWNlSXRlbUluQm9hdCIsIm1hcCIsIml0ZW0iLCJhbHQiLCJpbWciLCJpZCIsImJvYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQzFCLE1BQUlBLEtBQUssQ0FBQ0MsV0FBVixFQUF1QjtBQUNuQix3QkFDSTtBQUFLLGVBQVMsRUFBRSxnQkFBaEI7QUFBQSw2QkFDSTtBQUFLLFVBQUUsRUFBRSxNQUFUO0FBQWlCLGlCQUFTLEVBQUUsOENBQTVCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFRCxLQUFLLENBQUNFLGNBQU4sQ0FBcUJDLE1BQXJCLEtBQWdDLENBQWhDLEdBQ1Ysb0RBRFUsR0FFVixtQ0FGTjtBQUFBLGlDQUdJLDhEQUFDLG1EQUFEO0FBQU8scUJBQVMsRUFBRSxRQUFsQjtBQUNBLGVBQUcsRUFBRUMsOERBREw7QUFFQSxlQUFHLEVBQUMsWUFGSjtBQUdBLGlCQUFLLEVBQUUsR0FIUDtBQUlBLGtCQUFNLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVdJO0FBQUssbUJBQVMsRUFBRUosS0FBSyxDQUFDRSxjQUFOLENBQXFCQyxNQUFyQixLQUFnQyxDQUFoQyxHQUNWLDBCQURVLEdBRVYsbUJBRk47QUFBQSxvQkFHQ0gsS0FBSyxDQUFDSyxlQUFOLENBQXNCQyxHQUF0QixDQUEwQixVQUFBQyxJQUFJLEVBQUk7QUFDL0JBLGdCQUFJLENBQUNDLEdBQUwsS0FBYVIsS0FBSyxDQUFDQyxXQUFOLENBQWtCTyxHQUEvQjtBQUNJLGdDQUNJLDhEQUFDLG1EQUFEO0FBRUksaUJBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUZkO0FBR0ksaUJBQUcsRUFBRUYsSUFBSSxDQUFDQyxHQUhkO0FBSUksbUJBQUssRUFBRSxHQUpYO0FBS0ksb0JBQU0sRUFBRTtBQUxaLGVBQ1NELElBQUksQ0FBQ0csRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBU0gsV0FYSjtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEosZUEyQkk7QUFBSyxtQkFBUyxFQUFFLG1CQUFoQjtBQUFBLGlDQUNJLDhEQUFDLG1EQUFEO0FBQU8scUJBQVMsRUFBRSxRQUFsQjtBQUNBLGVBQUcsRUFBRUMsNERBREw7QUFFQSxlQUFHLEVBQUMsY0FGSjtBQUdBLGlCQUFLLEVBQUUsR0FIUDtBQUlBLGtCQUFNLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBd0NILEdBekNELE1BeUNPO0FBQ0gsd0JBQ0k7QUFBSyxRQUFFLEVBQUUsTUFBVDtBQUFpQixlQUFTLEVBQUUsOENBQTVCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFLG1DQUFoQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVMsRUFBRSxRQUFsQjtBQUNBLGFBQUcsRUFBRVAsOERBREw7QUFFQSxhQUFHLEVBQUMsWUFGSjtBQUdBLGVBQUssRUFBRSxHQUhQO0FBSUEsZ0JBQU0sRUFBRTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFTSTtBQUFLLGlCQUFTLEVBQUUsbUJBQWhCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFLFFBQWxCO0FBQ0EsYUFBRyxFQUFFTyw0REFETDtBQUVBLGFBQUcsRUFBQyxjQUZKO0FBR0EsZUFBSyxFQUFFLEdBSFA7QUFJQSxnQkFBTSxFQUFFO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQW9CSDtBQUNKOztLQWhFUVosYTtBQWtFVCwrREFBZUEsYUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvYm9hdEFuZEZhcm1lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGJvYXQgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9ib2F0LnBuZydcbmltcG9ydCBmYXJtZXIgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9mYXJtZXIucG5nJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmZ1bmN0aW9uIEJvYXRBbmRGYXJtZXIocHJvcHMpIHtcbiAgICBpZiAocHJvcHMuY2xpY2tlZEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYm9hdC1hbmltYXRpb24nfT4gXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17J2JvYXQnfSBjbGFzc05hbWU9eydkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBmbG9hdCd9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHMuaXRlbU9uRmFyU2hvcmUubGVuZ3RoICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdwb3NpdGlvbi1yZWxhdGl2ZSBmYXJtZXItcG9zaXRpb24gZmFyLXNob3JlLXJvdGF0ZScgXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdwb3NpdGlvbi1yZWxhdGl2ZSBmYXJtZXItcG9zaXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmYXJtZXJ9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhlIGZhcm1lclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjgwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5pdGVtT25GYXJTaG9yZS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hpZGRlbiBwb3NpdGlvbi1hYnNvbHV0ZScgXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdwb3NpdGlvbi1hYnNvbHV0ZSd9PiBcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnBsYWNlSXRlbUluQm9hdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFsdCA9PT0gcHJvcHMuY2xpY2tlZEl0ZW0uYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTMwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXsnc2hhZG93J30gXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhlIHJvdyBib2F0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17J2JvYXQnfSBjbGFzc05hbWU9eydkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBmbG9hdCd9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tcmVsYXRpdmUgZmFybWVyLXBvc2l0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Zhcm1lcn0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlRoZSBmYXJtZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXsnc2hhZG93J30gXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Ym9hdH0gXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlRoZSByb3cgYm9hdFwiIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXRBbmRGYXJtZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/boatAndFarmer.js\n");

/***/ })

});