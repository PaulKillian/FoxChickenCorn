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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/boatAndFarmer */ \"./pages/components/boatAndFarmer.js\");\n/* harmony import */ var _components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/riddleDescription */ \"./pages/components/riddleDescription.js\");\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/particles */ \"./pages/components/particles.js\");\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _components_nearShore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nearShore */ \"./pages/components/nearShore.js\");\n/* harmony import */ var _components_farShore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/farShore */ \"./pages/components/farShore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'fox',\n    id: 1\n  }, {\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'corn',\n    id: 3\n  }]),\n      items = _useState[0],\n      setitems = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      clickedItem = _useState2[0],\n      setClickedItem = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      placeItemInBoat = _useState3[0],\n      setPlaceItemInBoat = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      boatIsOnNearShore = _useState4[0],\n      setBoatIsOnNearShore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      animationEnd = _useState5[0],\n      setAnimationEnd = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      itemOnFarShore = _useState6[0],\n      setItemOnFarShore = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      hasBeenInBoat = _useState7[0],\n      setHasBeenInBoat = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isReset = _useState8[0],\n      setIsReset = _useState8[1];\n\n  var initialState = [[], null, true, false];\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    snow();\n    isReset && initialState.map(function (state) {\n      if (state === []) {\n        setPlaceItemInBoat(state);\n        setItemOnFarShore(state);\n        setHasBeenInBoat(state);\n      }\n\n      if (state === null) {\n        setClickedItem(state);\n      }\n\n      if (state === true) {\n        setBoatIsOnNearShore(state);\n      }\n\n      if (state === false) {\n        setIsReset(state);\n      }\n    });\n  }, []);\n  var value = 0;\n  var snow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    (0,_components_particles__WEBPACK_IMPORTED_MODULE_6__.default)();\n  }, [value]);\n\n  var checkItem = function checkItem(item) {\n    var checkItem = '';\n\n    if (item.alt === 'corn' && itemOnFarShore.length === 0) {\n      checkItem = {\n        dead: 'chicken',\n        hidden: 'corn'\n      };\n      setClickedItem(checkItem);\n    } else if (item.alt === 'fox' && itemOnFarShore.length === 0) {\n      checkItem = {\n        dead: 'corn',\n        hidden: 'fox'\n      };\n      setClickedItem(checkItem);\n    } else {\n      checkItem = {\n        hidden: 'chicken'\n      };\n      setClickedItem(checkItem);\n    }\n\n    placeInBoat(item);\n  };\n\n  var placeInBoat = function placeInBoat(item) {\n    setPlaceItemInBoat([item]);\n    itemHasBeenInBoat(item);\n  };\n\n  var itemHasBeenInBoat = function itemHasBeenInBoat(item) {\n    var boatItem = (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(hasBeenInBoat);\n\n    boatItem.push(item);\n    setHasBeenInBoat(boatItem);\n    itemDropOff(item);\n  };\n\n  var sendBoatToFarShore = function sendBoatToFarShore() {\n    if (clickedItem.dead) {\n      return;\n    } else {\n      var boat = document.getElementById('boat-container');\n      boat.classList.add('boat-animation');\n      boat.addEventListener('animationend', function () {\n        setBoatIsOnNearShore(false);\n        removeItemFromBoat();\n      });\n    }\n  };\n\n  var itemDropOff = function itemDropOff(item) {\n    var boat = document.getElementById('boat');\n    boat.addEventListener('animationend', function () {\n      setAnimationEnd('boat landed on far shore');\n      var itemForFarShoreDropOff = [item];\n      setItemOnFarShore(itemForFarShoreDropOff);\n    });\n  };\n\n  var sendBoatToNearShore = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    var boat = document.getElementById('boat-container');\n    boat.classList.add('boat-animation-to-nearShore');\n    boat.addEventListener('animationend', function () {\n      boat.classList.remove('boat-animation-to-nearShore', 'boat-animation');\n      setBoatIsOnNearShore(true);\n      setPlaceItemInBoat([]);\n    });\n  });\n\n  var removeItemFromBoat = function removeItemFromBoat() {\n    itemOnFarShore.legnth =  true ? setPlaceItemInBoat([]) : 0;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'landscape main-height',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n      className: 'position-absolute',\n      id: \"cvs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__.RiddleDescription, {\n      reset: isReset\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-between',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'd-flex justify-content-start align-items-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nearShore__WEBPACK_IMPORTED_MODULE_10__.NearShore, {\n          checkItem: checkItem,\n          items: items,\n          clickedItem: clickedItem,\n          itemOnFarShore: itemOnFarShore,\n          placeItemInBoat: placeItemInBoat,\n          hasBeenInBoat: hasBeenInBoat\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__.default, {\n          clickedItem: clickedItem,\n          items: items,\n          placeItemInBoat: placeItemInBoat,\n          itemOnFarShore: itemOnFarShore,\n          boatIsOnNearShore: boatIsOnNearShore,\n          sendBoatToFarShore: sendBoatToFarShore,\n          sendBoatToNearShore: sendBoatToNearShore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_farShore__WEBPACK_IMPORTED_MODULE_11__.FarShore, {\n        itemOnFarShore: itemOnFarShore,\n        items: items,\n        animationEnd: animationEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 161,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 138,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"D0pzI/z5UtHroQB3LVu4U5FSCxA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJpbWciLCJmb3giLCJhbHQiLCJpZCIsImNoaWNrZW4iLCJjb3JuIiwiaXRlbXMiLCJzZXRpdGVtcyIsImNsaWNrZWRJdGVtIiwic2V0Q2xpY2tlZEl0ZW0iLCJwbGFjZUl0ZW1JbkJvYXQiLCJzZXRQbGFjZUl0ZW1JbkJvYXQiLCJib2F0SXNPbk5lYXJTaG9yZSIsInNldEJvYXRJc09uTmVhclNob3JlIiwiYW5pbWF0aW9uRW5kIiwic2V0QW5pbWF0aW9uRW5kIiwiaXRlbU9uRmFyU2hvcmUiLCJzZXRJdGVtT25GYXJTaG9yZSIsImhhc0JlZW5JbkJvYXQiLCJzZXRIYXNCZWVuSW5Cb2F0IiwiaXNSZXNldCIsInNldElzUmVzZXQiLCJpbml0aWFsU3RhdGUiLCJ1c2VFZmZlY3QiLCJzbm93IiwibWFwIiwic3RhdGUiLCJ2YWx1ZSIsInVzZUNhbGxiYWNrIiwiUGFydGljbGVzIiwiY2hlY2tJdGVtIiwiaXRlbSIsImxlbmd0aCIsImRlYWQiLCJoaWRkZW4iLCJwbGFjZUluQm9hdCIsIml0ZW1IYXNCZWVuSW5Cb2F0IiwiYm9hdEl0ZW0iLCJwdXNoIiwiaXRlbURyb3BPZmYiLCJzZW5kQm9hdFRvRmFyU2hvcmUiLCJib2F0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVJdGVtRnJvbUJvYXQiLCJpdGVtRm9yRmFyU2hvcmVEcm9wT2ZmIiwic2VuZEJvYXRUb05lYXJTaG9yZSIsInJlbW92ZSIsImxlZ250aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDSEMsK0NBQVEsQ0FB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QUFBSyxlQUFTLEVBQUUsZ0NBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFLDhDQUFoQjtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQ0UsbUJBQVMsRUFBRVUsU0FEYjtBQUVFLGVBQUssRUFBRXhCLEtBRlQ7QUFHRSxxQkFBVyxFQUFFRSxXQUhmO0FBSUUsd0JBQWMsRUFBRVEsY0FKbEI7QUFLRSx5QkFBZSxFQUFFTixlQUxuQjtBQU1FLHVCQUFhLEVBQUVRO0FBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFTRSw4REFBQyw4REFBRDtBQUNFLHFCQUFXLEVBQUVWLFdBRGY7QUFFRSxlQUFLLEVBQUVGLEtBRlQ7QUFHRSx5QkFBZSxFQUFFSSxlQUhuQjtBQUlFLHdCQUFjLEVBQUVNLGNBSmxCO0FBS0UsMkJBQWlCLEVBQUVKLGlCQUxyQjtBQU1FLDRCQUFrQixFQUFFNEIsa0JBTnRCO0FBT0UsNkJBQW1CLEVBQUVTO0FBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFvQkUsOERBQUMsMkRBQUQ7QUFDRSxzQkFBYyxFQUFFakMsY0FEbEI7QUFFRSxhQUFLLEVBQUVWLEtBRlQ7QUFHRSxvQkFBWSxFQUFFUTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQTdKdUJoQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcbmltcG9ydCBCb2F0QW5kRmFybWVyIGZyb20gJy4vY29tcG9uZW50cy9ib2F0QW5kRmFybWVyJ1xuaW1wb3J0IHsgUmlkZGxlRGVzY3JpcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmlkZGxlRGVzY3JpcHRpb24nXG5pbXBvcnQgUGFydGljbGVzIGZyb20gJy4vY29tcG9uZW50cy9wYXJ0aWNsZXMnXG5pbXBvcnQgY2hpY2tlbiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2NoaWNrZW4ucG5nJ1xuaW1wb3J0IGNvcm4gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9jb3JuLnBuZydcbmltcG9ydCBmb3ggZnJvbSAnLi4vcHVibGljL2ltYWdlcy9mb3gucG5nJ1xuaW1wb3J0IHsgTmVhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL25lYXJTaG9yZSdcbmltcG9ydCB7IEZhclNob3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL2ZhclNob3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXRlbXMsIHNldGl0ZW1zXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBpbWc6IGZveCxcbiAgICAgIGFsdDogJ2ZveCcsXG4gICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogY2hpY2tlbixcbiAgICAgIGFsdDogJ2NoaWNrZW4nLFxuICAgICAgaWQ6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWc6IGNvcm4sXG4gICAgICBhbHQ6ICdjb3JuJyxcbiAgICAgIGlkOiAzLFxuICAgIH1cbiAgXSlcbiAgY29uc3QgW2NsaWNrZWRJdGVtLCBzZXRDbGlja2VkSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BsYWNlSXRlbUluQm9hdCwgc2V0UGxhY2VJdGVtSW5Cb2F0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2JvYXRJc09uTmVhclNob3JlLCBzZXRCb2F0SXNPbk5lYXJTaG9yZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FuaW1hdGlvbkVuZCwgc2V0QW5pbWF0aW9uRW5kXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXRlbU9uRmFyU2hvcmUsIHNldEl0ZW1PbkZhclNob3JlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hhc0JlZW5JbkJvYXQsIHNldEhhc0JlZW5JbkJvYXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNSZXNldCwgc2V0SXNSZXNldF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCBpbml0aWFsU3RhdGUgPSBbW10sIG51bGwsIHRydWUsIGZhbHNlXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNub3coKVxuICAgIGlzUmVzZXQgJiYgaW5pdGlhbFN0YXRlLm1hcChzdGF0ZSA9PiB7XG4gICAgICBpZiAoc3RhdGUgPT09IFtdKSB7XG4gICAgICAgIHNldFBsYWNlSXRlbUluQm9hdChzdGF0ZSlcbiAgICAgICAgc2V0SXRlbU9uRmFyU2hvcmUoc3RhdGUpXG4gICAgICAgIHNldEhhc0JlZW5JbkJvYXQoc3RhdGUpXG4gICAgICB9IGlmIChzdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldENsaWNrZWRJdGVtKHN0YXRlKVxuICAgICAgfSBpZihzdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKHN0YXRlKVxuICAgICAgfSBpZiAoc3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2V0SXNSZXNldChzdGF0ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdmFsdWUgPSAwO1xuICBjb25zdCBzbm93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1BhcnRpY2xlcygpfSwgW3ZhbHVlXSlcblxuICBjb25zdCBjaGVja0l0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCBjaGVja0l0ZW0gPSAnJ1xuICAgIGlmIChpdGVtLmFsdCA9PT0gJ2Nvcm4nICYmIGl0ZW1PbkZhclNob3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hlY2tJdGVtID0gXG4gICAgICAgIHtcbiAgICAgICAgICBkZWFkOiAnY2hpY2tlbicsXG4gICAgICAgICAgaGlkZGVuOiAnY29ybidcbiAgICAgICAgfVxuICAgICAgc2V0Q2xpY2tlZEl0ZW0oY2hlY2tJdGVtKVxuICAgIH0gZWxzZSBpZiAoaXRlbS5hbHQgPT09ICdmb3gnICYmIGl0ZW1PbkZhclNob3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2hlY2tJdGVtID0gXG4gICAgICAgIHtcbiAgICAgICAgICBkZWFkOiAnY29ybicsXG4gICAgICAgICAgaGlkZGVuOiAnZm94J1xuICAgICAgICB9XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGNoZWNrSXRlbSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tJdGVtID0gXG4gICAgICAgIHtcbiAgICAgICAgICBoaWRkZW46ICdjaGlja2VuJ1xuICAgICAgICB9XG4gICAgICAgIHNldENsaWNrZWRJdGVtKGNoZWNrSXRlbSlcbiAgICB9XG4gICAgICBwbGFjZUluQm9hdChpdGVtKVxuICB9XG5cbiAgY29uc3QgcGxhY2VJbkJvYXQgPSAoaXRlbSkgPT4ge1xuICAgIHNldFBsYWNlSXRlbUluQm9hdChbaXRlbV0pXG4gICAgaXRlbUhhc0JlZW5JbkJvYXQoaXRlbSlcbiAgfVxuXG4gIGNvbnN0IGl0ZW1IYXNCZWVuSW5Cb2F0ID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgYm9hdEl0ZW0gPSBbLi4uaGFzQmVlbkluQm9hdF1cbiAgICBib2F0SXRlbS5wdXNoKGl0ZW0pXG4gICAgc2V0SGFzQmVlbkluQm9hdChib2F0SXRlbSlcbiAgICBpdGVtRHJvcE9mZihpdGVtKVxuICB9XG5cbiAgY29uc3Qgc2VuZEJvYXRUb0ZhclNob3JlID0gKCkgPT4ge1xuICAgIGlmIChjbGlja2VkSXRlbS5kZWFkKSB7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQtY29udGFpbmVyJylcbiAgICBib2F0LmNsYXNzTGlzdC5hZGQoJ2JvYXQtYW5pbWF0aW9uJylcbiAgICBib2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKGZhbHNlKVxuICAgICAgcmVtb3ZlSXRlbUZyb21Cb2F0KClcbiAgICB9KVxuICB9XG59XG5cbiAgY29uc3QgaXRlbURyb3BPZmYgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdCcpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRBbmltYXRpb25FbmQoJ2JvYXQgbGFuZGVkIG9uIGZhciBzaG9yZScpO1xuICAgICAgY29uc3QgaXRlbUZvckZhclNob3JlRHJvcE9mZiA9IFtpdGVtXVxuICAgICAgc2V0SXRlbU9uRmFyU2hvcmUoaXRlbUZvckZhclNob3JlRHJvcE9mZik7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNlbmRCb2F0VG9OZWFyU2hvcmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0LWNvbnRhaW5lcicpXG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0LWFuaW1hdGlvbi10by1uZWFyU2hvcmUnKVxuICAgIGJvYXQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgYm9hdC5jbGFzc0xpc3QucmVtb3ZlKCdib2F0LWFuaW1hdGlvbi10by1uZWFyU2hvcmUnLCAnYm9hdC1hbmltYXRpb24nKVxuICAgICAgc2V0Qm9hdElzT25OZWFyU2hvcmUodHJ1ZSlcbiAgICAgIHNldFBsYWNlSXRlbUluQm9hdChbXSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQm9hdCA9ICgpID0+IHtcbiAgICBpdGVtT25GYXJTaG9yZS5sZWdudGggPSAxXG4gICAgPyBzZXRQbGFjZUl0ZW1JbkJvYXQoW10pXG4gICAgOiBudWxsXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXsnbGFuZHNjYXBlIG1haW4taGVpZ2h0J30+IFxuICAgICAgPGNhbnZhcyBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9IGlkPVwiY3ZzXCI+PC9jYW52YXM+XG4gICAgICA8UmlkZGxlRGVzY3JpcHRpb24gcmVzZXQ9e2lzUmVzZXR9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCBhbGlnbi1pdGVtcy1lbmQnfT5cbiAgICAgICAgICA8TmVhclNob3JlIFxuICAgICAgICAgICAgY2hlY2tJdGVtPXtjaGVja0l0ZW19IFxuICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgY2xpY2tlZEl0ZW09e2NsaWNrZWRJdGVtfVxuICAgICAgICAgICAgaXRlbU9uRmFyU2hvcmU9e2l0ZW1PbkZhclNob3JlfVxuICAgICAgICAgICAgcGxhY2VJdGVtSW5Cb2F0PXtwbGFjZUl0ZW1JbkJvYXR9XG4gICAgICAgICAgICBoYXNCZWVuSW5Cb2F0PXtoYXNCZWVuSW5Cb2F0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJvYXRBbmRGYXJtZXIgXG4gICAgICAgICAgICBjbGlja2VkSXRlbT17Y2xpY2tlZEl0ZW19XG4gICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICBwbGFjZUl0ZW1JbkJvYXQ9e3BsYWNlSXRlbUluQm9hdH1cbiAgICAgICAgICAgIGl0ZW1PbkZhclNob3JlPXtpdGVtT25GYXJTaG9yZX1cbiAgICAgICAgICAgIGJvYXRJc09uTmVhclNob3JlPXtib2F0SXNPbk5lYXJTaG9yZX1cbiAgICAgICAgICAgIHNlbmRCb2F0VG9GYXJTaG9yZT17c2VuZEJvYXRUb0ZhclNob3JlfVxuICAgICAgICAgICAgc2VuZEJvYXRUb05lYXJTaG9yZT17c2VuZEJvYXRUb05lYXJTaG9yZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZhclNob3JlIFxuICAgICAgICAgIGl0ZW1PbkZhclNob3JlPXtpdGVtT25GYXJTaG9yZX1cbiAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgYW5pbWF0aW9uRW5kPXthbmltYXRpb25FbmR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});