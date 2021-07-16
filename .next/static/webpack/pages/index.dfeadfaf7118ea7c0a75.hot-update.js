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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/boat.png */ \"./public/images/boat.png\");\n/* harmony import */ var _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/farmer.png */ \"./public/images/farmer.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/components/boatAndFarmer.js\";\n\n\n\n\n\nfunction BoatAndFarmer(props) {\n  var _this = this;\n\n  console.log(props.itemOnFarShore);\n\n  if (props.clickedItem) {\n    var _jsxDEV2;\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      id: 'boat-container',\n      onClick: props.boatIsOnNearShore ? function () {\n        return props.sendBoatToFarShore();\n      } : function () {\n        return props.sendBoatToNearShore();\n      },\n      className: props.boatIsOnFarShore && 'boat-animation',\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", (_jsxDEV2 = {\n        id: 'boat',\n        className: 'd-flex flex-column justify-content-end float'\n      }, (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"className\", props.itemOnFarShore.length !== 0 ? 'd-flex flex-column justify-content-end float far-shore-rotate' : 'd-flex flex-column justify-content-end float'), (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"children\", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-relative farmer-position',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          alt: \"The farmer\",\n          width: 200,\n          height: 280\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: props.placeItemInBoat < 1 ? 'hidden position-absolute' : 'position-absolute',\n        children: props.placeItemInBoat.map(function (item) {\n          item.alt === props.clickedItem.alt;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n            src: item.img,\n            alt: item.alt,\n            width: 130,\n            height: 150\n          }, item.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 33\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__.default,\n          alt: \"The row boat\",\n          width: 200,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 21\n      }, this)]), _jsxDEV2), void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      id: 'boat',\n      className: 'd-flex flex-column justify-content-end float',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-relative farmer-position',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_farmer_png__WEBPACK_IMPORTED_MODULE_4__.default,\n          alt: \"The farmer\",\n          width: 200,\n          height: 280\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: 'position-absolute',\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: 'shadow',\n          src: _public_images_boat_png__WEBPACK_IMPORTED_MODULE_3__.default,\n          alt: \"The row boat\",\n          width: 200,\n          height: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, this);\n  }\n}\n\n_c = BoatAndFarmer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoatAndFarmer);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoatAndFarmer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9ib2F0QW5kRmFybWVyLmpzPzQ4N2UiXSwibmFtZXMiOlsiQm9hdEFuZEZhcm1lciIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIml0ZW1PbkZhclNob3JlIiwiY2xpY2tlZEl0ZW0iLCJib2F0SXNPbk5lYXJTaG9yZSIsInNlbmRCb2F0VG9GYXJTaG9yZSIsInNlbmRCb2F0VG9OZWFyU2hvcmUiLCJib2F0SXNPbkZhclNob3JlIiwibGVuZ3RoIiwiZmFybWVyIiwicGxhY2VJdGVtSW5Cb2F0IiwibWFwIiwiaXRlbSIsImFsdCIsImltZyIsImlkIiwiYm9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csY0FBbEI7O0FBQ0EsTUFBSUgsS0FBSyxDQUFDSSxXQUFWLEVBQXVCO0FBQUE7O0FBQ25CLHdCQUNJO0FBQUssUUFBRSxFQUFFLGdCQUFUO0FBQTJCLGFBQU8sRUFDMUJKLEtBQUssQ0FBQ0ssaUJBQU4sR0FDRTtBQUFBLGVBQU1MLEtBQUssQ0FBQ00sa0JBQU4sRUFBTjtBQUFBLE9BREYsR0FFRTtBQUFBLGVBQU1OLEtBQUssQ0FBQ08sbUJBQU4sRUFBTjtBQUFBLE9BSFY7QUFLSSxlQUFTLEVBQUVQLEtBQUssQ0FBQ1EsZ0JBQU4sSUFBMEIsZ0JBTHpDO0FBQUEsNkJBTUk7QUFBSyxVQUFFLEVBQUUsTUFBVDtBQUFpQixpQkFBUyxFQUFFO0FBQTVCLG1LQUVRUixLQUFLLENBQUNHLGNBQU4sQ0FBcUJNLE1BQXJCLEtBQWdDLENBQWhDLEdBQ0UsK0RBREYsR0FFRSw4Q0FKViwwS0FNSTtBQUFLLGlCQUFTLEVBQUUsbUNBQWhCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFLFFBQWxCO0FBQ0EsYUFBRyxFQUFFQyw4REFETDtBQUVBLGFBQUcsRUFBQyxZQUZKO0FBR0EsZUFBSyxFQUFFLEdBSFA7QUFJQSxnQkFBTSxFQUFFO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQWNJO0FBQUssaUJBQVMsRUFDVlYsS0FBSyxDQUFDVyxlQUFOLEdBQXdCLENBQXhCLEdBQ0UsMEJBREYsR0FFRSxtQkFITjtBQUFBLGtCQUtDWCxLQUFLLENBQUNXLGVBQU4sQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUFDLElBQUksRUFBSTtBQUMvQkEsY0FBSSxDQUFDQyxHQUFMLEtBQWFkLEtBQUssQ0FBQ0ksV0FBTixDQUFrQlUsR0FBL0I7QUFDSSw4QkFDSSw4REFBQyxtREFBRDtBQUVJLGVBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUZkO0FBR0ksZUFBRyxFQUFFRixJQUFJLENBQUNDLEdBSGQ7QUFJSSxpQkFBSyxFQUFFLEdBSlg7QUFLSSxrQkFBTSxFQUFFO0FBTFosYUFDU0QsSUFBSSxDQUFDRyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFTSCxTQVhKO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBZ0NJO0FBQUssaUJBQVMsRUFBRSxtQkFBaEI7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFPLG1CQUFTLEVBQUUsUUFBbEI7QUFDQSxhQUFHLEVBQUVDLDREQURMO0FBRUEsYUFBRyxFQUFDLGNBRko7QUFHQSxlQUFLLEVBQUUsR0FIUDtBQUlBLGdCQUFNLEVBQUU7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBa0RILEdBbkRELE1BbURPO0FBQ0gsd0JBQ0k7QUFBSyxRQUFFLEVBQUUsTUFBVDtBQUFpQixlQUFTLEVBQUUsOENBQTVCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFLG1DQUFoQjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVMsRUFBRSxRQUFsQjtBQUNBLGFBQUcsRUFBRVAsOERBREw7QUFFQSxhQUFHLEVBQUMsWUFGSjtBQUdBLGVBQUssRUFBRSxHQUhQO0FBSUEsZ0JBQU0sRUFBRTtBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFTSTtBQUFLLGlCQUFTLEVBQUUsbUJBQWhCO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFFLFFBQWxCO0FBQ0EsYUFBRyxFQUFFTyw0REFETDtBQUVBLGFBQUcsRUFBQyxjQUZKO0FBR0EsZUFBSyxFQUFFLEdBSFA7QUFJQSxnQkFBTSxFQUFFO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQW9CSDtBQUNKOztLQTNFUWxCLGE7QUE2RVQsK0RBQWVBLGFBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2JvYXRBbmRGYXJtZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBib2F0IGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvYm9hdC5wbmcnXG5pbXBvcnQgZmFybWVyIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvZmFybWVyLnBuZydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5mdW5jdGlvbiBCb2F0QW5kRmFybWVyKHByb3BzKSB7XG4gICAgY29uc29sZS5sb2cocHJvcHMuaXRlbU9uRmFyU2hvcmUpXG4gICAgaWYgKHByb3BzLmNsaWNrZWRJdGVtKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXsnYm9hdC1jb250YWluZXInfSBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYm9hdElzT25OZWFyU2hvcmVcbiAgICAgICAgICAgICAgICAgICAgPyAoKSA9PiBwcm9wcy5zZW5kQm9hdFRvRmFyU2hvcmUoKVxuICAgICAgICAgICAgICAgICAgICA6ICgpID0+IHByb3BzLnNlbmRCb2F0VG9OZWFyU2hvcmUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmJvYXRJc09uRmFyU2hvcmUgJiYgJ2JvYXQtYW5pbWF0aW9uJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD17J2JvYXQnfSBjbGFzc05hbWU9eydkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBmbG9hdCd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLml0ZW1PbkZhclNob3JlLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQgZmxvYXQgZmFyLXNob3JlLXJvdGF0ZScgXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWVuZCBmbG9hdCdcbiAgICAgICAgICAgICAgICAgICAgfT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tcmVsYXRpdmUgZmFybWVyLXBvc2l0aW9uJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXsnc2hhZG93J31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmFybWVyfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlRoZSBmYXJtZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5wbGFjZUl0ZW1JbkJvYXQgPCAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoaWRkZW4gcG9zaXRpb24tYWJzb2x1dGUnXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdwb3NpdGlvbi1hYnNvbHV0ZSdcbiAgICAgICAgICAgICAgICAgICAgfT4gXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5wbGFjZUl0ZW1JbkJvYXQubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hbHQgPT09IHByb3BzLmNsaWNrZWRJdGVtLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5hbHR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEzMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17J3NoYWRvdyd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtib2F0fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlRoZSByb3cgYm9hdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9eydib2F0J30gY2xhc3NOYW1lPXsnZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1lbmQgZmxvYXQnfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Bvc2l0aW9uLXJlbGF0aXZlIGZhcm1lci1wb3NpdGlvbid9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXsnc2hhZG93J31cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtmYXJtZXJ9IFxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUaGUgZmFybWVyXCIgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjgwfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17J3NoYWRvdyd9IFxuICAgICAgICAgICAgICAgICAgICBzcmM9e2JvYXR9IFxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJUaGUgcm93IGJvYXRcIiBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2F0QW5kRmFybWVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/boatAndFarmer.js\n");

/***/ })

});