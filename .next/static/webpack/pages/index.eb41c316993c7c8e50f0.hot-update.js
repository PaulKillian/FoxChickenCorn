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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/boat.png */ \"./public/images/boat.png\");\n/* harmony import */ var _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/farmer.png */ \"./public/images/farmer.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/boatAndFarmer.js\";\n\n\n\n\n\nfunction BoatAndFarmer(props) {\n  var _this = this;\n\n  if (props.clickedItem) {\n    var _jsxDEV2;\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      id: 'boat-container',\n      onClick: props.boatIsOnNearShore ? function () {\n        return props.sendBoatToFarShore();\n      } : function () {\n        return props.sendBoatToNearShore();\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", (_jsxDEV2 = {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end float'\n      }, (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"className\", props.itemOnFarShore.length !== 0 ? 'd-flex flex-column justify-content-end float far-shore-rotate' : 'd-flex flex-column justify-content-end float'), (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"children\", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-relative farmer-position',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          alt: \"The farmer\",\n          width: 200,\n          height: 280\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: props.placeItemInBoat < 1 ? 'hidden position-absolute' : 'position-absolute',\n        children: props.placeItemInBoat.map(function (item) {\n          item.alt === props.clickedItem.alt;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n            src: item.img,\n            alt: item.alt,\n            width: 130,\n            height: 150\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 33\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__.default,\n          alt: \"The row boat\",\n          width: 200,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }, this)]), _jsxDEV2), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      id: 'boat',\n      className: 'd-flex flex-column justify-content-end float',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-relative farmer-position',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          alt: \"The farmer\",\n          width: 200,\n          height: 280\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__.default,\n          alt: \"The row boat\",\n          width: 200,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_c = BoatAndFarmer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoatAndFarmer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoatAndFarmer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9ib2F0QW5kRmFybWVyLmpzPzQ4N2UiXSwibmFtZXMiOlsiQm9hdEFuZEZhcm1lciIsInByb3BzIiwiY2xpY2tlZEl0ZW0iLCJib2F0SXNPbk5lYXJTaG9yZSIsInNlbmRCb2F0VG9GYXJTaG9yZSIsInNlbmRCb2F0VG9OZWFyU2hvcmUiLCJpdGVtT25GYXJTaG9yZSIsImxlbmd0aCIsImZhcm1lciIsInBsYWNlSXRlbUluQm9hdCIsIm1hcCIsIml0ZW0iLCJhbHQiLCJpbWciLCJpZCIsImJvYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDMUIsTUFBSUEsS0FBSyxDQUFDQyxXQUFWLEVBQXVCO0FBQUE7O0FBQ25CLHdCQUNJO0FBQUssUUFBRSxFQUFFLGdCQUFUO0FBQTJCLGFBQU8sRUFDMUJELEtBQUssQ0FBQ0UsaUJBQU4sR0FDRTtBQUFBLGVBQU1GLEtBQUssQ0FBQ0csa0JBQU4sRUFBTjtBQUFBLE9BREYsR0FFRTtBQUFBLGVBQU1ILEtBQUssQ0FBQ0ksbUJBQU4sRUFBTjtBQUFBLE9BSFY7QUFBQSw2QkFLSTtBQUFLLFVBQUUsRUFBRSxNQUFUO0FBQWlCLGlCQUFTLEVBQUU7QUFBNUIsbUtBRVFKLEtBQUssQ0FBQ0ssY0FBTixDQUFxQkMsTUFBckIsS0FBZ0MsQ0FBaEMsR0FDRSwrREFERixHQUVFLDhDQUpWLDBLQU1JO0FBQUssaUJBQVMsRUFBRSxtQ0FBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFPLG1CQUFTLEVBQUUsUUFBbEI7QUFDQSxhQUFHLEVBQUVDLDhEQURMO0FBRUEsYUFBRyxFQUFDLFlBRko7QUFHQSxlQUFLLEVBQUUsR0FIUDtBQUlBLGdCQUFNLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBY0k7QUFBSyxpQkFBUyxFQUNWUCxLQUFLLENBQUNRLGVBQU4sR0FBd0IsQ0FBeEIsR0FDRSwwQkFERixHQUVFLG1CQUhOO0FBQUEsa0JBS0NSLEtBQUssQ0FBQ1EsZUFBTixDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQUMsSUFBSSxFQUFJO0FBQy9CQSxjQUFJLENBQUNDLEdBQUwsS0FBYVgsS0FBSyxDQUFDQyxXQUFOLENBQWtCVSxHQUEvQjtBQUNJLDhCQUNJLDhEQUFDLG1EQUFEO0FBRUksZUFBRyxFQUFFRCxJQUFJLENBQUNFLEdBRmQ7QUFHSSxlQUFHLEVBQUVGLElBQUksQ0FBQ0MsR0FIZDtBQUlJLGlCQUFLLEVBQUUsR0FKWDtBQUtJLGtCQUFNLEVBQUU7QUFMWixhQUNTRCxJQUFJLENBQUNHLEVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQVNILFNBWEo7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosZUFnQ0k7QUFBSyxpQkFBUyxFQUFFLG1CQUFoQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVMsRUFBRSxRQUFsQjtBQUNBLGFBQUcsRUFBRUMsNERBREw7QUFFQSxhQUFHLEVBQUMsY0FGSjtBQUdBLGVBQUssRUFBRSxHQUhQO0FBSUEsZ0JBQU0sRUFBRTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFpREgsR0FsREQsTUFrRE87QUFDSCx3QkFDSTtBQUFLLFFBQUUsRUFBRSxNQUFUO0FBQWlCLGVBQVMsRUFBRSw4Q0FBNUI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUUsbUNBQWhCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFLFFBQWxCO0FBQ0EsYUFBRyxFQUFFUCw4REFETDtBQUVBLGFBQUcsRUFBQyxZQUZKO0FBR0EsZUFBSyxFQUFFLEdBSFA7QUFJQSxnQkFBTSxFQUFFO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQVNJO0FBQUssaUJBQVMsRUFBRSxtQkFBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFPLG1CQUFTLEVBQUUsUUFBbEI7QUFDQSxhQUFHLEVBQUVPLDREQURMO0FBRUEsYUFBRyxFQUFDLGNBRko7QUFHQSxlQUFLLEVBQUUsR0FIUDtBQUlBLGdCQUFNLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBb0JIO0FBQ0o7O0tBekVRZixhO0FBMkVULCtEQUFlQSxhQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ib2F0QW5kRmFybWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYm9hdCBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2JvYXQucG5nJ1xuaW1wb3J0IGZhcm1lciBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2Zhcm1lci5wbmcnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuZnVuY3Rpb24gQm9hdEFuZEZhcm1lcihwcm9wcykge1xuICAgIGlmIChwcm9wcy5jbGlja2VkSXRlbSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17J2JvYXQtY29udGFpbmVyJ30gb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJvYXRJc09uTmVhclNob3JlXG4gICAgICAgICAgICAgICAgICAgID8gKCkgPT4gcHJvcHMuc2VuZEJvYXRUb0ZhclNob3JlKClcbiAgICAgICAgICAgICAgICAgICAgOiAoKSA9PiBwcm9wcy5zZW5kQm9hdFRvTmVhclNob3JlKClcbiAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9eydib2F0J30gY2xhc3NOYW1lPXsnZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQgZmxvYXQnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pdGVtT25GYXJTaG9yZS5sZW5ndGggIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kIGZsb2F0IGZhci1zaG9yZS1yb3RhdGUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQgZmxvYXQnXG4gICAgICAgICAgICAgICAgICAgIH0+IFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLXJlbGF0aXZlIGZhcm1lci1wb3NpdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17J3NoYWRvdyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Zhcm1lcn0gXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUaGUgZmFybWVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyODB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucGxhY2VJdGVtSW5Cb2F0IDwgMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaGlkZGVuIHBvc2l0aW9uLWFic29sdXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAncG9zaXRpb24tYWJzb2x1dGUnXG4gICAgICAgICAgICAgICAgICAgIH0+IFxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMucGxhY2VJdGVtSW5Cb2F0Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWx0ID09PSBwcm9wcy5jbGlja2VkSXRlbS5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMzB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Ym9hdH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUaGUgcm93IGJvYXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXsnYm9hdCd9IGNsYXNzTmFtZT17J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kIGZsb2F0J30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1yZWxhdGl2ZSBmYXJtZXItcG9zaXRpb24nfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17J3NoYWRvdyd9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZmFybWVyfSBcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhlIGZhcm1lclwiIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI4MH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLWFic29sdXRlJ30+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9eydzaGFkb3cnfSBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtib2F0fSBcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhlIHJvdyBib2F0XCIgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hdEFuZEZhcm1lcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/boatAndFarmer.js\n");

/***/ })

});