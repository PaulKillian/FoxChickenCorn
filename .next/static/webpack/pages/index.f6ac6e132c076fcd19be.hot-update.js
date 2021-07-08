/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/boatAndFarmer */ \"./pages/components/boatAndFarmer.js\");\n/* harmony import */ var _components_constraints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/constraints */ \"./pages/components/constraints.js\");\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/particles */ \"./pages/components/particles.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _components_nearShore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nearShore */ \"./pages/components/nearShore.js\");\n/* harmony import */ var _components_farShore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/farShore */ \"./pages/components/farShore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'fox',\n    id: 1\n  }, {\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'corn',\n    id: 3\n  }]),\n      items = _useState2[0],\n      setitems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      placeItemInBoat = _useState3[0],\n      setPlaceItemInBoat = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      boatIsOnNearShore = _useState4[0],\n      setBoatIsOnNearShore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      animationEnd = _useState5[0],\n      setAnimationEnd = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      itemOnFarShore = _useState6[0],\n      setItemOnFarShore = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_particles__WEBPACK_IMPORTED_MODULE_5__.default)();\n    boatIsOnNearShore ? boat.classList.remove('boat-animation-to-nearShore', 'boat-animation') : boat.classList.add('boat-animation');\n  });\n\n  var checkItem = function checkItem(item) {\n    if (item.id === 1) {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    } else if (item.id === 2) {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    } else {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    }\n\n    itemDropOff(item);\n  };\n\n  var sendBoatToFarShore = function sendBoatToFarShore() {\n    var boat = document.getElementById('boat-container');\n    boat.addEventListener('animationend', function () {\n      setBoatIsOnNearShore(false);\n    });\n  };\n\n  var itemDropOff = function itemDropOff(item) {\n    var boat = document.getElementById('boat');\n    boat.addEventListener('animationend', function () {\n      setAnimationEnd('boat landed on far shore');\n      var itemForFarShoreDropOff = [item];\n      setItemOnFarShore(itemForFarShoreDropOff);\n    });\n  };\n\n  var sendBoatToNearShore = function sendBoatToNearShore() {\n    var boat = document.getElementById('boat-container');\n    boat.addEventListener('animationend', function () {\n      setBoatIsOnNearShore(true);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'landscape main-height',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_constraints__WEBPACK_IMPORTED_MODULE_4__.Constraints, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-between',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'd-flex justify-content-start align-items-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nearShore__WEBPACK_IMPORTED_MODULE_10__.NearShore, {\n          checkItem: checkItem,\n          items: items,\n          clickedItem: clickedItem\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_3__.default, {\n          clickedItem: clickedItem,\n          items: items,\n          placeItemInBoat: placeItemInBoat,\n          itemOnFarShore: itemOnFarShore,\n          boatIsOnNearShore: boatIsOnNearShore,\n          sendBoatToFarShore: sendBoatToFarShore,\n          sendBoatToNearShore: sendBoatToNearShore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_farShore__WEBPACK_IMPORTED_MODULE_11__.FarShore, {\n        itemOnFarShore: itemOnFarShore,\n        items: items,\n        animationEnd: animationEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"eurBLI3nB4L00YAhoRsw7hvEKIY=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaW1nIiwiZm94IiwiYWx0IiwiaWQiLCJjaGlja2VuIiwiY29ybiIsIml0ZW1zIiwic2V0aXRlbXMiLCJwbGFjZUl0ZW1JbkJvYXQiLCJzZXRQbGFjZUl0ZW1JbkJvYXQiLCJib2F0SXNPbk5lYXJTaG9yZSIsInNldEJvYXRJc09uTmVhclNob3JlIiwiYW5pbWF0aW9uRW5kIiwic2V0QW5pbWF0aW9uRW5kIiwiaXRlbU9uRmFyU2hvcmUiLCJzZXRJdGVtT25GYXJTaG9yZSIsInVzZUVmZmVjdCIsIlBhcnRpY2xlcyIsImJvYXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjaGVja0l0ZW0iLCJpdGVtIiwiaXRlbURyb3BPZmYiLCJzZW5kQm9hdFRvRmFyU2hvcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW1Gb3JGYXJTaG9yZURyb3BPZmYiLCJzZW5kQm9hdFRvTmVhclNob3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1NDLCtDQUFRLENBQUMsSUFBRCxDQURqQjtBQUFBLE1BQ3RCQyxXQURzQjtBQUFBLE1BQ1RDLGNBRFM7O0FBQUEsbUJBRUhGLCtDQUFRLENBQUMsQ0FDakM7QUFDRUcsT0FBRyxFQUFFQywyREFEUDtBQUVFQyxPQUFHLEVBQUUsS0FGUDtBQUdFQyxNQUFFLEVBQUU7QUFITixHQURpQyxFQU1qQztBQUNFSCxPQUFHLEVBQUVJLCtEQURQO0FBRUVGLE9BQUcsRUFBRSxTQUZQO0FBR0VDLE1BQUUsRUFBRTtBQUhO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LGdDQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRSw4Q0FBaEI7QUFBQSxnQ0FDRSw4REFBQyw2REFBRDtBQUNFLG1CQUFTLEVBQUVXLFNBRGI7QUFFRSxlQUFLLEVBQUVoQixLQUZUO0FBR0UscUJBQVcsRUFBRVI7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUUsOERBQUMsOERBQUQ7QUFDRSxxQkFBVyxFQUFFQSxXQURmO0FBRUUsZUFBSyxFQUFFUSxLQUZUO0FBR0UseUJBQWUsRUFBRUUsZUFIbkI7QUFJRSx3QkFBYyxFQUFFTSxjQUpsQjtBQUtFLDJCQUFpQixFQUFFSixpQkFMckI7QUFNRSw0QkFBa0IsRUFBRWUsa0JBTnRCO0FBT0UsNkJBQW1CLEVBQUVLO0FBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFpQkUsOERBQUMsMkRBQUQ7QUFDRSxzQkFBYyxFQUFFaEIsY0FEbEI7QUFFRSxhQUFLLEVBQUVSLEtBRlQ7QUFHRSxvQkFBWSxFQUFFTTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztHQWhHdUJoQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0IEJvYXRBbmRGYXJtZXIgZnJvbSAnLi9jb21wb25lbnRzL2JvYXRBbmRGYXJtZXInXG5pbXBvcnQgeyBDb25zdHJhaW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9jb25zdHJhaW50cydcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAnLi9jb21wb25lbnRzL3BhcnRpY2xlcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGNoaWNrZW4gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9jaGlja2VuLnBuZydcbmltcG9ydCBjb3JuIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvY29ybi5wbmcnXG5pbXBvcnQgZm94IGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvZm94LnBuZydcbmltcG9ydCB7IE5lYXJTaG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9uZWFyU2hvcmUnXG5pbXBvcnQgeyBGYXJTaG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9mYXJTaG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2NsaWNrZWRJdGVtLCBzZXRDbGlja2VkSXRlbV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaXRlbXMsIHNldGl0ZW1zXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBpbWc6IGZveCxcbiAgICAgIGFsdDogJ2ZveCcsXG4gICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogY2hpY2tlbixcbiAgICAgIGFsdDogJ2NoaWNrZW4nLFxuICAgICAgaWQ6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWc6IGNvcm4sXG4gICAgICBhbHQ6ICdjb3JuJyxcbiAgICAgIGlkOiAzLFxuICAgIH1cbiAgXSlcbiAgY29uc3QgW3BsYWNlSXRlbUluQm9hdCwgc2V0UGxhY2VJdGVtSW5Cb2F0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtib2F0SXNPbk5lYXJTaG9yZSwgc2V0Qm9hdElzT25OZWFyU2hvcmVdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2FuaW1hdGlvbkVuZCwgc2V0QW5pbWF0aW9uRW5kXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpdGVtT25GYXJTaG9yZSwgc2V0SXRlbU9uRmFyU2hvcmVdID0gdXNlU3RhdGUoW10pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFBhcnRpY2xlcygpO1xuICAgIGJvYXRJc09uTmVhclNob3JlXG4gICAgPyBib2F0LmNsYXNzTGlzdC5yZW1vdmUoJ2JvYXQtYW5pbWF0aW9uLXRvLW5lYXJTaG9yZScsICdib2F0LWFuaW1hdGlvbicpXG4gICAgOiBib2F0LmNsYXNzTGlzdC5hZGQoJ2JvYXQtYW5pbWF0aW9uJylcbiAgfSlcblxuICBjb25zdCBjaGVja0l0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmlkID09PSAxKSB7XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgICAgIHNldFBsYWNlSXRlbUluQm9hdChbaXRlbV0pXG4gICAgfSBlbHNlIGlmIChpdGVtLmlkID09PSAyKSB7XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgICAgIHNldFBsYWNlSXRlbUluQm9hdChbaXRlbV0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q2xpY2tlZEl0ZW0oaXRlbSlcbiAgICAgICAgc2V0UGxhY2VJdGVtSW5Cb2F0KFtpdGVtXSlcbiAgICB9XG4gICAgaXRlbURyb3BPZmYoaXRlbSlcbiAgfVxuXG4gIGNvbnN0IHNlbmRCb2F0VG9GYXJTaG9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQtY29udGFpbmVyJylcbiAgICBib2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKGZhbHNlKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBpdGVtRHJvcE9mZiA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0JylcbiAgICBib2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHNldEFuaW1hdGlvbkVuZCgnYm9hdCBsYW5kZWQgb24gZmFyIHNob3JlJyk7XG4gICAgICBjb25zdCBpdGVtRm9yRmFyU2hvcmVEcm9wT2ZmID0gW2l0ZW1dXG4gICAgICBzZXRJdGVtT25GYXJTaG9yZShpdGVtRm9yRmFyU2hvcmVEcm9wT2ZmKTtcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2VuZEJvYXRUb05lYXJTaG9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQtY29udGFpbmVyJylcbiAgICBib2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKHRydWUpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXsnbGFuZHNjYXBlIG1haW4taGVpZ2h0J30+IFxuICAgICAgPENvbnN0cmFpbnRzIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbid9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kJ30+XG4gICAgICAgICAgPE5lYXJTaG9yZSBcbiAgICAgICAgICAgIGNoZWNrSXRlbT17Y2hlY2tJdGVtfSBcbiAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgIGNsaWNrZWRJdGVtPXtjbGlja2VkSXRlbX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb2F0QW5kRmFybWVyIFxuICAgICAgICAgICAgY2xpY2tlZEl0ZW09e2NsaWNrZWRJdGVtfVxuICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgcGxhY2VJdGVtSW5Cb2F0PXtwbGFjZUl0ZW1JbkJvYXR9XG4gICAgICAgICAgICBpdGVtT25GYXJTaG9yZT17aXRlbU9uRmFyU2hvcmV9XG4gICAgICAgICAgICBib2F0SXNPbk5lYXJTaG9yZT17Ym9hdElzT25OZWFyU2hvcmV9XG4gICAgICAgICAgICBzZW5kQm9hdFRvRmFyU2hvcmU9e3NlbmRCb2F0VG9GYXJTaG9yZX1cbiAgICAgICAgICAgIHNlbmRCb2F0VG9OZWFyU2hvcmU9e3NlbmRCb2F0VG9OZWFyU2hvcmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGYXJTaG9yZSBcbiAgICAgICAgICBpdGVtT25GYXJTaG9yZT17aXRlbU9uRmFyU2hvcmV9XG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIGFuaW1hdGlvbkVuZD17YW5pbWF0aW9uRW5kfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});