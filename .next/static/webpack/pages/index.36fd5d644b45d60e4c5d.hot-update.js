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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/boatAndFarmer */ \"./pages/components/boatAndFarmer.js\");\n/* harmony import */ var _components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/riddleDescription */ \"./pages/components/riddleDescription.js\");\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/particles */ \"./pages/components/particles.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _components_nearShore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nearShore */ \"./pages/components/nearShore.js\");\n/* harmony import */ var _components_farShore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/farShore */ \"./pages/components/farShore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_10__.default,\n    alt: 'fox',\n    id: 1\n  }, {\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'corn',\n    id: 3\n  }]),\n      items = _useState2[0],\n      setitems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      placeItemInBoat = _useState3[0],\n      setPlaceItemInBoat = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      boatIsOnNearShore = _useState4[0],\n      setBoatIsOnNearShore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      animationEnd = _useState5[0],\n      setAnimationEnd = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      itemOnFarShore = _useState6[0],\n      setItemOnFarShore = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      hasBeenInBoat = _useState7[0],\n      setHasBeenInBoat = _useState7[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    (0,_components_particles__WEBPACK_IMPORTED_MODULE_6__.default)();\n  });\n  console.log(itemOnFarShore);\n\n  var checkItem = function checkItem(item) {\n    if (item.id === 1) {\n      setClickedItem(item);\n    } else if (item.id === 2) {\n      setClickedItem(item);\n    } else {\n      setClickedItem(item);\n    }\n\n    placeInBoat(item);\n  };\n\n  var placeInBoat = function placeInBoat(item) {\n    setPlaceItemInBoat([item]);\n    itemHasBeenInBoat(item);\n  };\n\n  var itemHasBeenInBoat = function itemHasBeenInBoat(item) {\n    var boatItem = (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(hasBeenInBoat);\n\n    boatItem.push(item);\n    setHasBeenInBoat(boatItem);\n    itemDropOff(item);\n  };\n\n  console.log(hasBeenInBoat);\n  var sendBoatToFarShore = useCallback(function () {\n    var boat = document.getElementById('boat-container');\n    boat.classList.add('boat-animation');\n    boat.addEventListener('animationend', function () {\n      setBoatIsOnNearShore(false);\n      removeItemFromBoat();\n    });\n  });\n\n  var itemDropOff = function itemDropOff(item) {\n    var boat = document.getElementById('boat');\n    boat.addEventListener('animationend', function () {\n      setAnimationEnd('boat landed on far shore');\n      var itemForFarShoreDropOff = [item];\n      setItemOnFarShore(itemForFarShoreDropOff);\n    });\n  };\n\n  var sendBoatToNearShore = useCallback(function () {\n    var boat = document.getElementById('boat-container');\n    boat.classList.add('boat-animation-to-nearShore');\n    boat.addEventListener('animationend', function () {\n      boat.classList.remove('boat-animation-to-nearShore', 'boat-animation');\n      setBoatIsOnNearShore(true);\n      setPlaceItemInBoat([]);\n    });\n  });\n\n  var removeItemFromBoat = function removeItemFromBoat() {\n    itemOnFarShore.legnth =  true ? setPlaceItemInBoat([]) : 0;\n  };\n\n  var Snow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n      className: 'position-absolute',\n      id: \"cvs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }, _this);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'landscape main-height',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Snow, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__.Constraints, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-between',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'd-flex justify-content-start align-items-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nearShore__WEBPACK_IMPORTED_MODULE_11__.NearShore, {\n          checkItem: checkItem,\n          items: items,\n          clickedItem: clickedItem,\n          itemOnFarShore: itemOnFarShore,\n          placeItemInBoat: placeItemInBoat,\n          hasBeenInBoat: hasBeenInBoat\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__.default, {\n          clickedItem: clickedItem,\n          items: items,\n          placeItemInBoat: placeItemInBoat,\n          itemOnFarShore: itemOnFarShore,\n          boatIsOnNearShore: boatIsOnNearShore,\n          sendBoatToFarShore: sendBoatToFarShore,\n          sendBoatToNearShore: sendBoatToNearShore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_farShore__WEBPACK_IMPORTED_MODULE_12__.FarShore, {\n        itemOnFarShore: itemOnFarShore,\n        items: items,\n        animationEnd: animationEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"EDZM8F/U3y2nct2v43yw2YZNths=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaW1nIiwiZm94IiwiYWx0IiwiaWQiLCJjaGlja2VuIiwiY29ybiIsIml0ZW1zIiwic2V0aXRlbXMiLCJwbGFjZUl0ZW1JbkJvYXQiLCJzZXRQbGFjZUl0ZW1JbkJvYXQiLCJib2F0SXNPbk5lYXJTaG9yZSIsInNldEJvYXRJc09uTmVhclNob3JlIiwiYW5pbWF0aW9uRW5kIiwic2V0QW5pbWF0aW9uRW5kIiwiaXRlbU9uRmFyU2hvcmUiLCJzZXRJdGVtT25GYXJTaG9yZSIsImhhc0JlZW5JbkJvYXQiLCJzZXRIYXNCZWVuSW5Cb2F0IiwidXNlRWZmZWN0IiwiUGFydGljbGVzIiwiY29uc29sZSIsImxvZyIsImNoZWNrSXRlbSIsIml0ZW0iLCJwbGFjZUluQm9hdCIsIml0ZW1IYXNCZWVuSW5Cb2F0IiwiYm9hdEl0ZW0iLCJwdXNoIiwiaXRlbURyb3BPZmYiLCJzZW5kQm9hdFRvRmFyU2hvcmUiLCJ1c2VDYWxsYmFjayIsImJvYXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUl0ZW1Gcm9tQm9hdCIsIml0ZW1Gb3JGYXJTaG9yZURyb3BPZmYiLCJzZW5kQm9hdFRvTmVhclNob3JlIiwicmVtb3ZlIiwibGVnbnRoIiwiU25vdyIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLElBQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURT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ZUFHRTtBQUFLLGVBQVMsRUFBRSxnQ0FBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUUsOENBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsNkRBQUQ7QUFDRSxtQkFBUyxFQUFFckIsU0FEYjtBQUVFLGVBQUssRUFBRWhCLEtBRlQ7QUFHRSxxQkFBVyxFQUFFUixXQUhmO0FBSUUsd0JBQWMsRUFBRWdCLGNBSmxCO0FBS0UseUJBQWUsRUFBRU4sZUFMbkI7QUFNRSx1QkFBYSxFQUFFUTtBQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0UsOERBQUMsOERBQUQ7QUFDRSxxQkFBVyxFQUFFbEIsV0FEZjtBQUVFLGVBQUssRUFBRVEsS0FGVDtBQUdFLHlCQUFlLEVBQUVFLGVBSG5CO0FBSUUsd0JBQWMsRUFBRU0sY0FKbEI7QUFLRSwyQkFBaUIsRUFBRUosaUJBTHJCO0FBTUUsNEJBQWtCLEVBQUVtQixrQkFOdEI7QUFPRSw2QkFBbUIsRUFBRVU7QUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQW9CRSw4REFBQywyREFBRDtBQUNFLHNCQUFjLEVBQUV6QixjQURsQjtBQUVFLGFBQUssRUFBRVIsS0FGVDtBQUdFLG9CQUFZLEVBQUVNO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBakl1QmhCLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgQm9hdEFuZEZhcm1lciBmcm9tICcuL2NvbXBvbmVudHMvYm9hdEFuZEZhcm1lcidcbmltcG9ydCB7IENvbnN0cmFpbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL3JpZGRsZURlc2NyaXB0aW9uJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICcuL2NvbXBvbmVudHMvcGFydGljbGVzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2NoaWNrZW4ucG5nJ1xuaW1wb3J0IGNvcm4gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9jb3JuLnBuZydcbmltcG9ydCBmb3ggZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mb3gucG5nJ1xuaW1wb3J0IHsgTmVhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL25lYXJTaG9yZSdcbmltcG9ydCB7IEZhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL2ZhclNob3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2xpY2tlZEl0ZW0sIHNldENsaWNrZWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpdGVtcywgc2V0aXRlbXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIGltZzogZm94LFxuICAgICAgYWx0OiAnZm94JyxcbiAgICAgIGlkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1nOiBjaGlja2VuLFxuICAgICAgYWx0OiAnY2hpY2tlbicsXG4gICAgICBpZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogY29ybixcbiAgICAgIGFsdDogJ2Nvcm4nLFxuICAgICAgaWQ6IDMsXG4gICAgfVxuICBdKVxuICBjb25zdCBbcGxhY2VJdGVtSW5Cb2F0LCBzZXRQbGFjZUl0ZW1JbkJvYXRdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtib2F0SXNPbk5lYXJTaG9yZSwgc2V0Qm9hdElzT25OZWFyU2hvcmVdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2FuaW1hdGlvbkVuZCwgc2V0QW5pbWF0aW9uRW5kXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpdGVtT25GYXJTaG9yZSwgc2V0SXRlbU9uRmFyU2hvcmVdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtoYXNCZWVuSW5Cb2F0LCBzZXRIYXNCZWVuSW5Cb2F0XSA9IHVzZVN0YXRlKFtdKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBQYXJ0aWNsZXMoKTtcbiAgfSlcblxuICBjb25zb2xlLmxvZyhpdGVtT25GYXJTaG9yZSlcblxuICBjb25zdCBjaGVja0l0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmlkID09PSAxKSB7XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgfSBlbHNlIGlmIChpdGVtLmlkID09PSAyKSB7XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q2xpY2tlZEl0ZW0oaXRlbSlcbiAgICB9XG4gICAgcGxhY2VJbkJvYXQoaXRlbSlcbiAgfVxuXG4gIGNvbnN0IHBsYWNlSW5Cb2F0ID0gKGl0ZW0pID0+IHtcbiAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW2l0ZW1dKVxuICAgIGl0ZW1IYXNCZWVuSW5Cb2F0KGl0ZW0pXG4gIH1cblxuICBjb25zdCBpdGVtSGFzQmVlbkluQm9hdCA9IChpdGVtKSA9PiB7XG4gICAgbGV0IGJvYXRJdGVtID0gWy4uLmhhc0JlZW5JbkJvYXRdXG4gICAgYm9hdEl0ZW0ucHVzaChpdGVtKVxuICAgIHNldEhhc0JlZW5JbkJvYXQoYm9hdEl0ZW0pXG4gICAgaXRlbURyb3BPZmYoaXRlbSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGhhc0JlZW5JbkJvYXQpXG5cbiAgY29uc3Qgc2VuZEJvYXRUb0ZhclNob3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdC1jb250YWluZXInKVxuICAgIGJvYXQuY2xhc3NMaXN0LmFkZCgnYm9hdC1hbmltYXRpb24nKVxuICAgIGJvYXQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgc2V0Qm9hdElzT25OZWFyU2hvcmUoZmFsc2UpXG4gICAgICByZW1vdmVJdGVtRnJvbUJvYXQoKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaXRlbURyb3BPZmYgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdCcpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRBbmltYXRpb25FbmQoJ2JvYXQgbGFuZGVkIG9uIGZhciBzaG9yZScpO1xuICAgICAgY29uc3QgaXRlbUZvckZhclNob3JlRHJvcE9mZiA9IFtpdGVtXVxuICAgICAgc2V0SXRlbU9uRmFyU2hvcmUoaXRlbUZvckZhclNob3JlRHJvcE9mZik7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNlbmRCb2F0VG9OZWFyU2hvcmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0LWNvbnRhaW5lcicpXG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0LWFuaW1hdGlvbi10by1uZWFyU2hvcmUnKVxuICAgIGJvYXQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgYm9hdC5jbGFzc0xpc3QucmVtb3ZlKCdib2F0LWFuaW1hdGlvbi10by1uZWFyU2hvcmUnLCAnYm9hdC1hbmltYXRpb24nKVxuICAgICAgc2V0Qm9hdElzT25OZWFyU2hvcmUodHJ1ZSlcbiAgICAgIHNldFBsYWNlSXRlbUluQm9hdChbXSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQm9hdCA9ICgpID0+IHtcbiAgICBpdGVtT25GYXJTaG9yZS5sZWdudGggPSAxXG4gICAgPyBzZXRQbGFjZUl0ZW1JbkJvYXQoW10pXG4gICAgOiBudWxsXG4gIH1cblxuICBjb25zdCBTbm93ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9IGlkPVwiY3ZzXCI+PC9jYW52YXM+XG4gICAgKSBcbiAgfSwgW10pXG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17J2xhbmRzY2FwZSBtYWluLWhlaWdodCd9PiBcbiAgICAgIDxTbm93IC8+XG4gICAgICA8Q29uc3RyYWludHMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQnfT5cbiAgICAgICAgICA8TmVhclNob3JlIFxuICAgICAgICAgICAgY2hlY2tJdGVtPXtjaGVja0l0ZW19IFxuICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgY2xpY2tlZEl0ZW09e2NsaWNrZWRJdGVtfVxuICAgICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgICAgcGxhY2VJdGVtSW5Cb2F0PXtwbGFjZUl0ZW1JbkJvYXR9XG4gICAgICAgICAgICBoYXNCZWVuSW5Cb2F0PXtoYXNCZWVuSW5Cb2F0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvYXRBbmRGYXJtZXIgXG4gICAgICAgICAgICBjbGlja2VkSXRlbT17Y2xpY2tlZEl0ZW19XG4gICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICBwbGFjZUl0ZW1JbkJvYXQ9e3BsYWNlSXRlbUluQm9hdH1cbiAgICAgICAgICAgIGl0ZW1PbkZhclNob3JlPXtpdGVtT25GYXJTaG9yZX1cbiAgICAgICAgICAgIGJvYXRJc09uTmVhclNob3JlPXtib2F0SXNPbk5lYXJTaG9yZX1cbiAgICAgICAgICAgIHNlbmRCb2F0VG9GYXJTaG9yZT17c2VuZEJvYXRUb0ZhclNob3JlfVxuICAgICAgICAgICAgc2VuZEJvYXRUb05lYXJTaG9yZT17c2VuZEJvYXRUb05lYXJTaG9yZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZhclNob3JlIFxuICAgICAgICAgIGl0ZW1PbkZhclNob3JlPXtpdGVtT25GYXJTaG9yZX1cbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgYW5pbWF0aW9uRW5kPXthbmltYXRpb25FbmR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});