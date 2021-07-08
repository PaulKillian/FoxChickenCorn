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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/boatAndFarmer */ \"./pages/components/boatAndFarmer.js\");\n/* harmony import */ var _components_constraints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/constraints */ \"./pages/components/constraints.js\");\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/particles */ \"./pages/components/particles.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _components_nearShore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nearShore */ \"./pages/components/nearShore.js\");\n/* harmony import */ var _components_farShore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/farShore */ \"./pages/components/farShore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      clickedItem = _useState[0],\n      setClickedItem = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'fox',\n    id: 1\n  }, {\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'corn',\n    id: 3\n  }]),\n      items = _useState2[0],\n      setitems = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      placeItemInBoat = _useState3[0],\n      setPlaceItemInBoat = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      boatIsOnNearShore = _useState4[0],\n      setBoatIsOnNearShore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      animationEnd = _useState5[0],\n      setAnimationEnd = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      itemOnFarShore = _useState6[0],\n      setItemOnFarShore = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    (0,_components_particles__WEBPACK_IMPORTED_MODULE_5__.default)();\n    IsOnNearShore ? boat.classList.remove('boat-animation-to-nearShore', 'boat-animation') : boat.classList.add('boat-animation');\n  });\n\n  var checkItem = function checkItem(item) {\n    if (item.id === 1) {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    } else if (item.id === 2) {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    } else {\n      setClickedItem(item);\n      setPlaceItemInBoat([item]);\n    }\n\n    itemDropOff(item);\n  };\n\n  var sendBoatToFarShore = function sendBoatToFarShore() {\n    var boat = document.getElementById('boat-container');\n    boat.addEventListener('animationend', function () {\n      setBoatIsOnNearShore(false);\n    });\n  };\n\n  var itemDropOff = function itemDropOff(item) {\n    var boat = document.getElementById('boat');\n    boat.addEventListener('animationend', function () {\n      setAnimationEnd('boat landed on far shore');\n      var itemForFarShoreDropOff = [item];\n      setItemOnFarShore(itemForFarShoreDropOff);\n    });\n  };\n\n  var sendBoatToNearShore = function sendBoatToNearShore() {\n    var boat = document.getElementById('boat-container');\n    boat.addEventListener('animationend', function () {\n      setBoatIsOnNearShore(true);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'landscape main-height',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_constraints__WEBPACK_IMPORTED_MODULE_4__.Constraints, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-between',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'd-flex justify-content-start align-items-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nearShore__WEBPACK_IMPORTED_MODULE_10__.NearShore, {\n          checkItem: checkItem,\n          items: items,\n          clickedItem: clickedItem\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_3__.default, {\n          clickedItem: clickedItem,\n          items: items,\n          placeItemInBoat: placeItemInBoat,\n          itemOnFarShore: itemOnFarShore,\n          boatIsOnNearShore: boatIsOnNearShore,\n          sendBoatToFarShore: sendBoatToFarShore,\n          sendBoatToNearShore: sendBoatToNearShore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_farShore__WEBPACK_IMPORTED_MODULE_11__.FarShore, {\n        itemOnFarShore: itemOnFarShore,\n        items: items,\n        animationEnd: animationEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"eurBLI3nB4L00YAhoRsw7hvEKIY=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjbGlja2VkSXRlbSIsInNldENsaWNrZWRJdGVtIiwiaW1nIiwiZm94IiwiYWx0IiwiaWQiLCJjaGlja2VuIiwiY29ybiIsIml0ZW1zIiwic2V0aXRlbXMiLCJwbGFjZUl0ZW1JbkJvYXQiLCJzZXRQbGFjZUl0ZW1JbkJvYXQiLCJib2F0SXNPbk5lYXJTaG9yZSIsInNldEJvYXRJc09uTmVhclNob3JlIiwiYW5pbWF0aW9uRW5kIiwic2V0QW5pbWF0aW9uRW5kIiwiaXRlbU9uRmFyU2hvcmUiLCJzZXRJdGVtT25GYXJTaG9yZSIsInVzZUVmZmVjdCIsIlBhcnRpY2xlcyIsIklzT25OZWFyU2hvcmUiLCJib2F0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY2hlY2tJdGVtIiwiaXRlbSIsIml0ZW1Ecm9wT2ZmIiwic2VuZEJvYXRUb0ZhclNob3JlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtRm9yRmFyU2hvcmVEcm9wT2ZmIiwic2VuZEJvYXRUb05lYXJTaG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLElBQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUFBLG1CQUVIRiwrQ0FBUSxDQUFDLENBQ2pDO0FBQ0VHLE9BQUcsRUFBRUMsMkRBRFA7QUFFRUMsT0FBRyxFQUFFLEtBRlA7QUFHRUMsTUFBRSxFQUFFO0FBSE4sR0FEaUMsRUFNakM7QUFDRUgsT0FBRyxFQUFFSSwrREFEUDtBQUVFRixPQUFHLEVBQUUsU0FGUDtBQUdF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RTtBQUFLLGVBQVMsRUFBRSxnQ0FBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUUsOENBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsNkRBQUQ7QUFDRSxtQkFBUyxFQUFFWSxTQURiO0FBRUUsZUFBSyxFQUFFakIsS0FGVDtBQUdFLHFCQUFXLEVBQUVSO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FLDhEQUFDLDhEQUFEO0FBQ0UscUJBQVcsRUFBRUEsV0FEZjtBQUVFLGVBQUssRUFBRVEsS0FGVDtBQUdFLHlCQUFlLEVBQUVFLGVBSG5CO0FBSUUsd0JBQWMsRUFBRU0sY0FKbEI7QUFLRSwyQkFBaUIsRUFBRUosaUJBTHJCO0FBTUUsNEJBQWtCLEVBQUVnQixrQkFOdEI7QUFPRSw2QkFBbUIsRUFBRUs7QUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWlCRSw4REFBQywyREFBRDtBQUNFLHNCQUFjLEVBQUVqQixjQURsQjtBQUVFLGFBQUssRUFBRVIsS0FGVDtBQUdFLG9CQUFZLEVBQUVNO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBaEd1QmhCLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5pbXBvcnQgQm9hdEFuZEZhcm1lciBmcm9tICcuL2NvbXBvbmVudHMvYm9hdEFuZEZhcm1lcidcbmltcG9ydCB7IENvbnN0cmFpbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0cmFpbnRzJ1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICcuL2NvbXBvbmVudHMvcGFydGljbGVzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2NoaWNrZW4ucG5nJ1xuaW1wb3J0IGNvcm4gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9jb3JuLnBuZydcbmltcG9ydCBmb3ggZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mb3gucG5nJ1xuaW1wb3J0IHsgTmVhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL25lYXJTaG9yZSdcbmltcG9ydCB7IEZhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL2ZhclNob3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2xpY2tlZEl0ZW0sIHNldENsaWNrZWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpdGVtcywgc2V0aXRlbXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIGltZzogZm94LFxuICAgICAgYWx0OiAnZm94JyxcbiAgICAgIGlkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1nOiBjaGlja2VuLFxuICAgICAgYWx0OiAnY2hpY2tlbicsXG4gICAgICBpZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogY29ybixcbiAgICAgIGFsdDogJ2Nvcm4nLFxuICAgICAgaWQ6IDMsXG4gICAgfVxuICBdKVxuICBjb25zdCBbcGxhY2VJdGVtSW5Cb2F0LCBzZXRQbGFjZUl0ZW1JbkJvYXRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2JvYXRJc09uTmVhclNob3JlLCBzZXRCb2F0SXNPbk5lYXJTaG9yZV0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbYW5pbWF0aW9uRW5kLCBzZXRBbmltYXRpb25FbmRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2l0ZW1PbkZhclNob3JlLCBzZXRJdGVtT25GYXJTaG9yZV0gPSB1c2VTdGF0ZShbXSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUGFydGljbGVzKCk7XG4gICAgSXNPbk5lYXJTaG9yZVxuICAgID8gYm9hdC5jbGFzc0xpc3QucmVtb3ZlKCdib2F0LWFuaW1hdGlvbi10by1uZWFyU2hvcmUnLCAnYm9hdC1hbmltYXRpb24nKVxuICAgIDogYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0LWFuaW1hdGlvbicpXG4gIH0pXG5cbiAgY29uc3QgY2hlY2tJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5pZCA9PT0gMSkge1xuICAgICAgICBzZXRDbGlja2VkSXRlbShpdGVtKVxuICAgICAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW2l0ZW1dKVxuICAgIH0gZWxzZSBpZiAoaXRlbS5pZCA9PT0gMikge1xuICAgICAgICBzZXRDbGlja2VkSXRlbShpdGVtKVxuICAgICAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW2l0ZW1dKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGl0ZW0pXG4gICAgICAgIHNldFBsYWNlSXRlbUluQm9hdChbaXRlbV0pXG4gICAgfVxuICAgIGl0ZW1Ecm9wT2ZmKGl0ZW0pXG4gIH1cblxuICBjb25zdCBzZW5kQm9hdFRvRmFyU2hvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0LWNvbnRhaW5lcicpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRCb2F0SXNPbk5lYXJTaG9yZShmYWxzZSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaXRlbURyb3BPZmYgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdCcpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRBbmltYXRpb25FbmQoJ2JvYXQgbGFuZGVkIG9uIGZhciBzaG9yZScpO1xuICAgICAgY29uc3QgaXRlbUZvckZhclNob3JlRHJvcE9mZiA9IFtpdGVtXVxuICAgICAgc2V0SXRlbU9uRmFyU2hvcmUoaXRlbUZvckZhclNob3JlRHJvcE9mZik7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNlbmRCb2F0VG9OZWFyU2hvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0LWNvbnRhaW5lcicpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRCb2F0SXNPbk5lYXJTaG9yZSh0cnVlKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17J2xhbmRzY2FwZSBtYWluLWhlaWdodCd9PiBcbiAgICAgIDxDb25zdHJhaW50cyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCd9PlxuICAgICAgICAgIDxOZWFyU2hvcmUgXG4gICAgICAgICAgICBjaGVja0l0ZW09e2NoZWNrSXRlbX0gXG4gICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICBjbGlja2VkSXRlbT17Y2xpY2tlZEl0ZW19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm9hdEFuZEZhcm1lciBcbiAgICAgICAgICAgIGNsaWNrZWRJdGVtPXtjbGlja2VkSXRlbX1cbiAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgIHBsYWNlSXRlbUluQm9hdD17cGxhY2VJdGVtSW5Cb2F0fVxuICAgICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgICAgYm9hdElzT25OZWFyU2hvcmU9e2JvYXRJc09uTmVhclNob3JlfVxuICAgICAgICAgICAgc2VuZEJvYXRUb0ZhclNob3JlPXtzZW5kQm9hdFRvRmFyU2hvcmV9XG4gICAgICAgICAgICBzZW5kQm9hdFRvTmVhclNob3JlPXtzZW5kQm9hdFRvTmVhclNob3JlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmFyU2hvcmUgXG4gICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICBhbmltYXRpb25FbmQ9e2FuaW1hdGlvbkVuZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});