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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/boatAndFarmer */ \"./pages/components/boatAndFarmer.js\");\n/* harmony import */ var _components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/riddleDescription */ \"./pages/components/riddleDescription.js\");\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/particles */ \"./pages/components/particles.js\");\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _components_nearShore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nearShore */ \"./pages/components/nearShore.js\");\n/* harmony import */ var _components_farShore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/farShore */ \"./pages/components/farShore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'fox',\n    id: 1\n  }, {\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'corn',\n    id: 3\n  }]),\n      items = _useState[0],\n      setitems = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      clickedItem = _useState2[0],\n      setClickedItem = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      placeItemInBoat = _useState3[0],\n      setPlaceItemInBoat = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      boatIsOnNearShore = _useState4[0],\n      setBoatIsOnNearShore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      animationEnd = _useState5[0],\n      setAnimationEnd = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      itemOnFarShore = _useState6[0],\n      setItemOnFarShore = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      hasBeenInBoat = _useState7[0],\n      setHasBeenInBoat = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isReset = _useState8[0],\n      setIsReset = _useState8[1];\n\n  var initialState = [[], null, true, false];\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    snow();\n  }, []);\n  var value = 0;\n  var snow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    (0,_components_particles__WEBPACK_IMPORTED_MODULE_6__.default)();\n  }, [value]);\n\n  var reset = function reset(resetBool) {\n    resetBool && initialState.map(function (state) {\n      if (state === []) {\n        setPlaceItemInBoat(state);\n        setItemOnFarShore(state);\n        setHasBeenInBoat(state);\n      }\n\n      if (state === null) {\n        setClickedItem(state);\n      }\n\n      if (state === true) {\n        setBoatIsOnNearShore(state);\n      }\n\n      if (state === false) {\n        setIsReset(state);\n      }\n    });\n  };\n\n  var checkItem = function checkItem(item) {\n    var checkItem = '';\n\n    if (item.alt === 'corn' && itemOnFarShore.length === 0) {\n      checkItem = {\n        dead: 'chicken',\n        hidden: 'corn'\n      };\n      setClickedItem(checkItem);\n    } else if (item.alt === 'fox' && itemOnFarShore.length === 0) {\n      checkItem = {\n        dead: 'corn',\n        hidden: 'fox'\n      };\n      setClickedItem(checkItem);\n    } else {\n      checkItem = {\n        hidden: 'chicken'\n      };\n      setClickedItem(checkItem);\n    }\n\n    placeInBoat(item);\n  };\n\n  var placeInBoat = function placeInBoat(item) {\n    setPlaceItemInBoat([item]);\n    itemHasBeenInBoat(item);\n  };\n\n  var itemHasBeenInBoat = function itemHasBeenInBoat(item) {\n    var boatItem = (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(hasBeenInBoat);\n\n    boatItem.push(item);\n    setHasBeenInBoat(boatItem);\n    itemDropOff(item);\n  };\n\n  var sendBoatToFarShore = function sendBoatToFarShore() {\n    if (clickedItem.dead) {\n      return;\n    } else {\n      var boat = document.getElementById('boat-container');\n      boat.classList.add('boat-animation');\n      boat.addEventListener('animationend', function () {\n        setBoatIsOnNearShore(false);\n        removeItemFromBoat();\n      });\n    }\n  };\n\n  var itemDropOff = function itemDropOff(item) {\n    var boat = document.getElementById('boat');\n    boat.addEventListener('animationend', function () {\n      setAnimationEnd('boat landed on far shore');\n      var itemForFarShoreDropOff = [item];\n      setItemOnFarShore(itemForFarShoreDropOff);\n    });\n  };\n\n  var sendBoatToNearShore = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    var boat = document.getElementById('boat-container');\n    boat.classList.add('boat-animation-to-nearShore');\n    boat.addEventListener('animationend', function () {\n      boat.classList.remove('boat-animation-to-nearShore', 'boat-animation');\n      setBoatIsOnNearShore(true);\n      setPlaceItemInBoat([]);\n    });\n  });\n\n  var removeItemFromBoat = function removeItemFromBoat() {\n    itemOnFarShore.legnth =  true ? setPlaceItemInBoat([]) : 0;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'landscape main-height',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n      className: 'position-absolute',\n      id: \"cvs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__.RiddleDescription, {\n      reset: reset\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-between',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'd-flex justify-content-start align-items-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nearShore__WEBPACK_IMPORTED_MODULE_10__.NearShore, {\n          checkItem: checkItem,\n          items: items,\n          clickedItem: clickedItem,\n          itemOnFarShore: itemOnFarShore,\n          placeItemInBoat: placeItemInBoat,\n          hasBeenInBoat: hasBeenInBoat\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__.default, {\n          clickedItem: clickedItem,\n          items: items,\n          placeItemInBoat: placeItemInBoat,\n          itemOnFarShore: itemOnFarShore,\n          boatIsOnNearShore: boatIsOnNearShore,\n          sendBoatToFarShore: sendBoatToFarShore,\n          sendBoatToNearShore: sendBoatToNearShore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 145,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_farShore__WEBPACK_IMPORTED_MODULE_11__.FarShore, {\n        itemOnFarShore: itemOnFarShore,\n        items: items,\n        animationEnd: animationEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 164,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 141,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"D0pzI/z5UtHroQB3LVu4U5FSCxA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJpbWciLCJmb3giLCJhbHQiLCJpZCIsImNoaWNrZW4iLCJjb3JuIiwiaXRlbXMiLCJzZXRpdGVtcyIsImNsaWNrZWRJdGVtIiwic2V0Q2xpY2tlZEl0ZW0iLCJwbGFjZUl0ZW1JbkJvYXQiLCJzZXRQbGFjZUl0ZW1JbkJvYXQiLCJib2F0SXNPbk5lYXJTaG9yZSIsInNldEJvYXRJc09uTmVhclNob3JlIiwiYW5pbWF0aW9uRW5kIiwic2V0QW5pbWF0aW9uRW5kIiwiaXRlbU9uRmFyU2hvcmUiLCJzZXRJdGVtT25GYXJTaG9yZSIsImhhc0JlZW5JbkJvYXQiLCJzZXRIYXNCZWVuSW5Cb2F0IiwiaXNSZXNldCIsInNldElzUmVzZXQiLCJpbml0aWFsU3RhdGUiLCJ1c2VFZmZlY3QiLCJzbm93IiwidmFsdWUiLCJ1c2VDYWxsYmFjayIsIlBhcnRpY2xlcyIsInJlc2V0IiwicmVzZXRCb29sIiwibWFwIiwic3RhdGUiLCJjaGVja0l0ZW0iLCJpdGVtIiwibGVuZ3RoIiwiZGVhZCIsImhpZGRlbiIsInBsYWNlSW5Cb2F0IiwiaXRlbUhhc0JlZW5JbkJvYXQiLCJib2F0SXRlbSIsInB1c2giLCJpdGVtRHJvcE9mZiIsInNlbmRCb2F0VG9GYXJTaG9yZSIsImJvYXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUl0ZW1Gcm9tQm9hdCIsIml0ZW1Gb3JGYXJTaG9yZURyb3BPZmYiLCJzZW5kQm9hdFRvTmVhclNob3JlIiwicmVtb3ZlIiwibGVnbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztB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O0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsNEVBQUQ7QUFBbUIsV0FBSyxFQUFFaUI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUUsZ0NBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFLDhDQUFoQjtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQ0UsbUJBQVMsRUFBRUksU0FEYjtBQUVFLGVBQUssRUFBRTFCLEtBRlQ7QUFHRSxxQkFBVyxFQUFFRSxXQUhmO0FBSUUsd0JBQWMsRUFBRVEsY0FKbEI7QUFLRSx5QkFBZSxFQUFFTixlQUxuQjtBQU1FLHVCQUFhLEVBQUVRO0FBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRSw4REFBQyw4REFBRDtBQUNFLHFCQUFXLEVBQUVWLFdBRGY7QUFFRSxlQUFLLEVBQUVGLEtBRlQ7QUFHRSx5QkFBZSxFQUFFSSxlQUhuQjtBQUlFLHdCQUFjLEVBQUVNLGNBSmxCO0FBS0UsMkJBQWlCLEVBQUVKLGlCQUxyQjtBQU1FLDRCQUFrQixFQUFFOEIsa0JBTnRCO0FBT0UsNkJBQW1CLEVBQUVTO0FBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFvQkUsOERBQUMsMkRBQUQ7QUFDRSxzQkFBYyxFQUFFbkMsY0FEbEI7QUFFRSxhQUFLLEVBQUVWLEtBRlQ7QUFHRSxvQkFBWSxFQUFFUTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQWhLdUJoQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCBCb2F0QW5kRmFybWVyIGZyb20gJy4vY29tcG9uZW50cy9ib2F0QW5kRmFybWVyJ1xuaW1wb3J0IHsgUmlkZGxlRGVzY3JpcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmlkZGxlRGVzY3JpcHRpb24nXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJy4vY29tcG9uZW50cy9wYXJ0aWNsZXMnXG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2NoaWNrZW4ucG5nJ1xuaW1wb3J0IGNvcm4gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9jb3JuLnBuZydcbmltcG9ydCBmb3ggZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mb3gucG5nJ1xuaW1wb3J0IHsgTmVhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL25lYXJTaG9yZSdcbmltcG9ydCB7IEZhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL2ZhclNob3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXRlbXMsIHNldGl0ZW1zXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBpbWc6IGZveCxcbiAgICAgIGFsdDogJ2ZveCcsXG4gICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogY2hpY2tlbixcbiAgICAgIGFsdDogJ2NoaWNrZW4nLFxuICAgICAgaWQ6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWc6IGNvcm4sXG4gICAgICBhbHQ6ICdjb3JuJyxcbiAgICAgIGlkOiAzLFxuICAgIH1cbiAgXSlcbiAgY29uc3QgW2NsaWNrZWRJdGVtLCBzZXRDbGlja2VkSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BsYWNlSXRlbUluQm9hdCwgc2V0UGxhY2VJdGVtSW5Cb2F0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2JvYXRJc09uTmVhclNob3JlLCBzZXRCb2F0SXNPbk5lYXJTaG9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FuaW1hdGlvbkVuZCwgc2V0QW5pbWF0aW9uRW5kXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXRlbU9uRmFyU2hvcmUsIHNldEl0ZW1PbkZhclNob3JlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hhc0JlZW5JbkJvYXQsIHNldEhhc0JlZW5JbkJvYXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNSZXNldCwgc2V0SXNSZXNldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBpbml0aWFsU3RhdGUgPSBbW10sIG51bGwsIHRydWUsIGZhbHNlXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNub3coKVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdmFsdWUgPSAwO1xuICBjb25zdCBzbm93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1BhcnRpY2xlcygpfSwgW3ZhbHVlXSlcblxuICBjb25zdCByZXNldCA9IChyZXNldEJvb2wpID0+IHtcbiAgICByZXNldEJvb2wgJiYgaW5pdGlhbFN0YXRlLm1hcChzdGF0ZSA9PiB7XG4gICAgICBpZiAoc3RhdGUgPT09IFtdKSB7XG4gICAgICAgIHNldFBsYWNlSXRlbUluQm9hdChzdGF0ZSlcbiAgICAgICAgc2V0SXRlbU9uRmFyU2hvcmUoc3RhdGUpXG4gICAgICAgIHNldEhhc0JlZW5JbkJvYXQoc3RhdGUpXG4gICAgICB9IGlmIChzdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldENsaWNrZWRJdGVtKHN0YXRlKVxuICAgICAgfSBpZihzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKHN0YXRlKVxuICAgICAgfSBpZiAoc3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2V0SXNSZXNldChzdGF0ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY2hlY2tJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgY2hlY2tJdGVtID0gJydcbiAgICBpZiAoaXRlbS5hbHQgPT09ICdjb3JuJyAmJiBpdGVtT25GYXJTaG9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrSXRlbSA9IFxuICAgICAgICB7XG4gICAgICAgICAgZGVhZDogJ2NoaWNrZW4nLFxuICAgICAgICAgIGhpZGRlbjogJ2Nvcm4nXG4gICAgICAgIH1cbiAgICAgIHNldENsaWNrZWRJdGVtKGNoZWNrSXRlbSlcbiAgICB9IGVsc2UgaWYgKGl0ZW0uYWx0ID09PSAnZm94JyAmJiBpdGVtT25GYXJTaG9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrSXRlbSA9IFxuICAgICAgICB7XG4gICAgICAgICAgZGVhZDogJ2Nvcm4nLFxuICAgICAgICAgIGhpZGRlbjogJ2ZveCdcbiAgICAgICAgfVxuICAgICAgICBzZXRDbGlja2VkSXRlbShjaGVja0l0ZW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSXRlbSA9IFxuICAgICAgICB7XG4gICAgICAgICAgaGlkZGVuOiAnY2hpY2tlbidcbiAgICAgICAgfVxuICAgICAgICBzZXRDbGlja2VkSXRlbShjaGVja0l0ZW0pXG4gICAgfVxuICAgICAgcGxhY2VJbkJvYXQoaXRlbSlcbiAgfVxuXG4gIGNvbnN0IHBsYWNlSW5Cb2F0ID0gKGl0ZW0pID0+IHtcbiAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW2l0ZW1dKVxuICAgIGl0ZW1IYXNCZWVuSW5Cb2F0KGl0ZW0pXG4gIH1cblxuICBjb25zdCBpdGVtSGFzQmVlbkluQm9hdCA9IChpdGVtKSA9PiB7XG4gICAgbGV0IGJvYXRJdGVtID0gWy4uLmhhc0JlZW5JbkJvYXRdXG4gICAgYm9hdEl0ZW0ucHVzaChpdGVtKVxuICAgIHNldEhhc0JlZW5JbkJvYXQoYm9hdEl0ZW0pXG4gICAgaXRlbURyb3BPZmYoaXRlbSlcbiAgfVxuXG4gIGNvbnN0IHNlbmRCb2F0VG9GYXJTaG9yZSA9ICgpID0+IHtcbiAgICBpZiAoY2xpY2tlZEl0ZW0uZGVhZCkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0LWNvbnRhaW5lcicpXG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0LWFuaW1hdGlvbicpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRCb2F0SXNPbk5lYXJTaG9yZShmYWxzZSlcbiAgICAgIHJlbW92ZUl0ZW1Gcm9tQm9hdCgpXG4gICAgfSlcbiAgfVxufVxuXG4gIGNvbnN0IGl0ZW1Ecm9wT2ZmID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQnKVxuICAgIGJvYXQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgc2V0QW5pbWF0aW9uRW5kKCdib2F0IGxhbmRlZCBvbiBmYXIgc2hvcmUnKTtcbiAgICAgIGNvbnN0IGl0ZW1Gb3JGYXJTaG9yZURyb3BPZmYgPSBbaXRlbV1cbiAgICAgIHNldEl0ZW1PbkZhclNob3JlKGl0ZW1Gb3JGYXJTaG9yZURyb3BPZmYpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBzZW5kQm9hdFRvTmVhclNob3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdC1jb250YWluZXInKVxuICAgIGJvYXQuY2xhc3NMaXN0LmFkZCgnYm9hdC1hbmltYXRpb24tdG8tbmVhclNob3JlJylcbiAgICBib2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIGJvYXQuY2xhc3NMaXN0LnJlbW92ZSgnYm9hdC1hbmltYXRpb24tdG8tbmVhclNob3JlJywgJ2JvYXQtYW5pbWF0aW9uJylcbiAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKHRydWUpXG4gICAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW10pXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCByZW1vdmVJdGVtRnJvbUJvYXQgPSAoKSA9PiB7XG4gICAgaXRlbU9uRmFyU2hvcmUubGVnbnRoID0gMVxuICAgID8gc2V0UGxhY2VJdGVtSW5Cb2F0KFtdKVxuICAgIDogbnVsbFxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17J2xhbmRzY2FwZSBtYWluLWhlaWdodCd9PiBcbiAgICAgIDxjYW52YXMgY2xhc3NOYW1lPXsncG9zaXRpb24tYWJzb2x1dGUnfSBpZD1cImN2c1wiPjwvY2FudmFzPlxuICAgICAgPFJpZGRsZURlc2NyaXB0aW9uIHJlc2V0PXtyZXNldH0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWVuZCd9PlxuICAgICAgICAgIDxOZWFyU2hvcmUgXG4gICAgICAgICAgICBjaGVja0l0ZW09e2NoZWNrSXRlbX0gXG4gICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICBjbGlja2VkSXRlbT17Y2xpY2tlZEl0ZW19XG4gICAgICAgICAgICBpdGVtT25GYXJTaG9yZT17aXRlbU9uRmFyU2hvcmV9XG4gICAgICAgICAgICBwbGFjZUl0ZW1JbkJvYXQ9e3BsYWNlSXRlbUluQm9hdH1cbiAgICAgICAgICAgIGhhc0JlZW5JbkJvYXQ9e2hhc0JlZW5JbkJvYXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Qm9hdEFuZEZhcm1lciBcbiAgICAgICAgICAgIGNsaWNrZWRJdGVtPXtjbGlja2VkSXRlbX1cbiAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgIHBsYWNlSXRlbUluQm9hdD17cGxhY2VJdGVtSW5Cb2F0fVxuICAgICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgICAgYm9hdElzT25OZWFyU2hvcmU9e2JvYXRJc09uTmVhclNob3JlfVxuICAgICAgICAgICAgc2VuZEJvYXRUb0ZhclNob3JlPXtzZW5kQm9hdFRvRmFyU2hvcmV9XG4gICAgICAgICAgICBzZW5kQm9hdFRvTmVhclNob3JlPXtzZW5kQm9hdFRvTmVhclNob3JlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RmFyU2hvcmUgXG4gICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICBhbmltYXRpb25FbmQ9e2FuaW1hdGlvbkVuZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});