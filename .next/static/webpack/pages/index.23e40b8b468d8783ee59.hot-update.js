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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/boatAndFarmer */ \"./pages/components/boatAndFarmer.js\");\n/* harmony import */ var _components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/riddleDescription */ \"./pages/components/riddleDescription.js\");\n/* harmony import */ var _components_particles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/particles */ \"./pages/components/particles.js\");\n/* harmony import */ var _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/chicken.png */ \"./public/images/chicken.png\");\n/* harmony import */ var _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/corn.png */ \"./public/images/corn.png\");\n/* harmony import */ var _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/fox.png */ \"./public/images/fox.png\");\n/* harmony import */ var _components_nearShore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nearShore */ \"./pages/components/nearShore.js\");\n/* harmony import */ var _components_farShore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/farShore */ \"./pages/components/farShore.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/zeal/Projects/FoxChickenCorn/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{\n    img: _public_images_fox_png__WEBPACK_IMPORTED_MODULE_9__.default,\n    alt: 'fox',\n    id: 1\n  }, {\n    img: _public_images_chicken_png__WEBPACK_IMPORTED_MODULE_7__.default,\n    alt: 'chicken',\n    id: 2\n  }, {\n    img: _public_images_corn_png__WEBPACK_IMPORTED_MODULE_8__.default,\n    alt: 'corn',\n    id: 3\n  }]),\n      items = _useState[0],\n      setitems = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      clickedItem = _useState2[0],\n      setClickedItem = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      placeItemInBoat = _useState3[0],\n      setPlaceItemInBoat = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      boatIsOnNearShore = _useState4[0],\n      setBoatIsOnNearShore = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      animationEnd = _useState5[0],\n      setAnimationEnd = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      itemOnFarShore = _useState6[0],\n      setItemOnFarShore = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      hasBeenInBoat = _useState7[0],\n      setHasBeenInBoat = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      isReset = _useState8[0],\n      setIsReset = _useState8[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    snow();\n  }, []);\n  var value = 0;\n  var snow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    (0,_components_particles__WEBPACK_IMPORTED_MODULE_6__.default)();\n  }, [value]);\n  var initialState = [[], null, true];\n\n  var reset = function reset(resetBool) {\n    resetBool && initialState.forEach(function (state) {\n      // console.log(state)\n      if (state !== null || state !== true) {\n        setPlaceItemInBoat(state);\n        setItemOnFarShore(state);\n        setHasBeenInBoat(state);\n      }\n\n      if (state === null) {\n        setClickedItem(state);\n        setAnimationEnd(state);\n      }\n\n      if (state === true) {\n        setBoatIsOnNearShore(state);\n      }\n    }); // console.log(itemOnFarShore)\n  };\n\n  var checkItem = function checkItem(item) {\n    var checkItem = '';\n\n    if (item.alt === 'corn' && itemOnFarShore.length === 0) {\n      checkItem = {\n        dead: 'chicken',\n        hidden: 'corn'\n      };\n      setClickedItem(checkItem);\n    } else if (item.alt === 'fox' && itemOnFarShore.length === 0) {\n      checkItem = {\n        dead: 'corn',\n        hidden: 'fox'\n      };\n      setClickedItem(checkItem);\n    } else {\n      checkItem = {\n        hidden: 'chicken'\n      };\n      setClickedItem(checkItem);\n    }\n\n    placeInBoat(item);\n  };\n\n  var placeInBoat = function placeInBoat(item) {\n    setPlaceItemInBoat([item]);\n    itemHasBeenInBoat(item);\n  };\n\n  var itemHasBeenInBoat = function itemHasBeenInBoat(item) {\n    console.log(hasBeenInBoat);\n\n    var boatItem = (0,_Users_zeal_Projects_FoxChickenCorn_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(hasBeenInBoat);\n\n    boatItem.push(item);\n    setHasBeenInBoat(boatItem);\n    itemDropOff(item);\n  };\n\n  var sendBoatToFarShore = function sendBoatToFarShore() {\n    if (clickedItem.dead) {\n      return;\n    } else {\n      var boat = document.getElementById('boat-container');\n      boat.classList.add('boat-animation');\n      boat.addEventListener('animationend', function () {\n        setBoatIsOnNearShore(false);\n        removeItemFromBoat();\n      });\n    }\n  };\n\n  var itemDropOff = function itemDropOff(item) {\n    var boat = document.getElementById('boat');\n    boat.addEventListener('animationend', function () {\n      setAnimationEnd('boat landed on far shore');\n      var itemForFarShoreDropOff = [item];\n      setItemOnFarShore(itemForFarShoreDropOff);\n    });\n  };\n\n  var sendBoatToNearShore = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {\n    var boat = document.getElementById('boat-container');\n    boat.classList.add('boat-animation-to-nearShore');\n    boat.addEventListener('animationend', function () {\n      boat.classList.remove('boat-animation-to-nearShore', 'boat-animation');\n      setBoatIsOnNearShore(true);\n      setPlaceItemInBoat([]);\n    });\n  });\n\n  var removeItemFromBoat = function removeItemFromBoat() {\n    itemOnFarShore.legnth =  true ? setPlaceItemInBoat([]) : 0;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: 'landscape main-height',\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n      className: 'position-absolute',\n      id: \"cvs\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_riddleDescription__WEBPACK_IMPORTED_MODULE_5__.RiddleDescription, {\n      reset: reset\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: 'd-flex justify-content-between',\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: 'd-flex justify-content-start align-items-end',\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nearShore__WEBPACK_IMPORTED_MODULE_10__.NearShore, {\n          checkItem: checkItem,\n          items: items,\n          clickedItem: clickedItem,\n          itemOnFarShore: itemOnFarShore,\n          placeItemInBoat: placeItemInBoat,\n          hasBeenInBoat: hasBeenInBoat\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boatAndFarmer__WEBPACK_IMPORTED_MODULE_4__.default, {\n          clickedItem: clickedItem,\n          items: items,\n          placeItemInBoat: placeItemInBoat,\n          itemOnFarShore: itemOnFarShore,\n          boatIsOnNearShore: boatIsOnNearShore,\n          sendBoatToFarShore: sendBoatToFarShore,\n          sendBoatToNearShore: sendBoatToNearShore\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 156,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_farShore__WEBPACK_IMPORTED_MODULE_11__.FarShore, {\n        itemOnFarShore: itemOnFarShore,\n        items: items,\n        animationEnd: animationEnd\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 143,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"D0pzI/z5UtHroQB3LVu4U5FSCxA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJpbWciLCJmb3giLCJhbHQiLCJpZCIsImNoaWNrZW4iLCJjb3JuIiwiaXRlbXMiLCJzZXRpdGVtcyIsImNsaWNrZWRJdGVtIiwic2V0Q2xpY2tlZEl0ZW0iLCJwbGFjZUl0ZW1JbkJvYXQiLCJzZXRQbGFjZUl0ZW1JbkJvYXQiLCJib2F0SXNPbk5lYXJTaG9yZSIsInNldEJvYXRJc09uTmVhclNob3JlIiwiYW5pbWF0aW9uRW5kIiwic2V0QW5pbWF0aW9uRW5kIiwiaXRlbU9uRmFyU2hvcmUiLCJzZXRJdGVtT25GYXJTaG9yZSIsImhhc0JlZW5JbkJvYXQiLCJzZXRIYXNCZWVuSW5Cb2F0IiwiaXNSZXNldCIsInNldElzUmVzZXQiLCJ1c2VFZmZlY3QiLCJzbm93IiwidmFsdWUiLCJ1c2VDYWxsYmFjayIsIlBhcnRpY2xlcyIsImluaXRpYWxTdGF0ZSIsInJlc2V0IiwicmVzZXRCb29sIiwiZm9yRWFjaCIsInN0YXRlIiwiY2hlY2tJdGVtIiwiaXRlbSIsImxlbmd0aCIsImRlYWQiLCJoaWRkZW4iLCJwbGFjZUluQm9hdCIsIml0ZW1IYXNCZWVuSW5Cb2F0IiwiY29uc29sZSIsImxvZyIsImJvYXRJdGVtIiwicHVzaCIsIml0ZW1Ecm9wT2ZmIiwic2VuZEJvYXRUb0ZhclNob3JlIiwiYm9hdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbUZyb21Cb2F0IiwiaXRlbUZvckZhclNob3JlRHJvcE9mZiIsInNlbmRCb2F0VG9OZWFyU2hvcmUiLCJyZW1vdmUiLCJsZWdudGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFT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QUFTLEVBQUUsbUJBQW5CO0FBQXdDLFFBQUUsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyw0RUFBRDtBQUFtQixXQUFLLEVBQUVpQjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFLLGVBQVMsRUFBRSxnQ0FBaEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUUsOENBQWhCO0FBQUEsZ0NBQ0UsOERBQUMsNkRBQUQ7QUFDRSxtQkFBUyxFQUFFSSxTQURiO0FBRUUsZUFBSyxFQUFFMUIsS0FGVDtBQUdFLHFCQUFXLEVBQUVFLFdBSGY7QUFJRSx3QkFBYyxFQUFFUSxjQUpsQjtBQUtFLHlCQUFlLEVBQUVOLGVBTG5CO0FBTUUsdUJBQWEsRUFBRVE7QUFOakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNFLDhEQUFDLDhEQUFEO0FBQ0UscUJBQVcsRUFBRVYsV0FEZjtBQUVFLGVBQUssRUFBRUYsS0FGVDtBQUdFLHlCQUFlLEVBQUVJLGVBSG5CO0FBSUUsd0JBQWMsRUFBRU0sY0FKbEI7QUFLRSwyQkFBaUIsRUFBRUosaUJBTHJCO0FBTUUsNEJBQWtCLEVBQUVnQyxrQkFOdEI7QUFPRSw2QkFBbUIsRUFBRVM7QUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQW9CRSw4REFBQywyREFBRDtBQUNFLHNCQUFjLEVBQUVyQyxjQURsQjtBQUVFLGFBQUssRUFBRVYsS0FGVDtBQUdFLG9CQUFZLEVBQUVRO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBbEt1QmhCLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuaW1wb3J0IEJvYXRBbmRGYXJtZXIgZnJvbSAnLi9jb21wb25lbnRzL2JvYXRBbmRGYXJtZXInXG5pbXBvcnQgeyBSaWRkbGVEZXNjcmlwdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9yaWRkbGVEZXNjcmlwdGlvbidcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSAnLi9jb21wb25lbnRzL3BhcnRpY2xlcydcbmltcG9ydCBjaGlja2VuIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvY2hpY2tlbi5wbmcnXG5pbXBvcnQgY29ybiBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2Nvcm4ucG5nJ1xuaW1wb3J0IGZveCBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL2ZveC5wbmcnXG5pbXBvcnQgeyBOZWFyU2hvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvbmVhclNob3JlJ1xuaW1wb3J0IHsgRmFyU2hvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvZmFyU2hvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0aXRlbXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIGltZzogZm94LFxuICAgICAgYWx0OiAnZm94JyxcbiAgICAgIGlkOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1nOiBjaGlja2VuLFxuICAgICAgYWx0OiAnY2hpY2tlbicsXG4gICAgICBpZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgIGltZzogY29ybixcbiAgICAgIGFsdDogJ2Nvcm4nLFxuICAgICAgaWQ6IDMsXG4gICAgfVxuICBdKVxuICBjb25zdCBbY2xpY2tlZEl0ZW0sIHNldENsaWNrZWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGxhY2VJdGVtSW5Cb2F0LCBzZXRQbGFjZUl0ZW1JbkJvYXRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYm9hdElzT25OZWFyU2hvcmUsIHNldEJvYXRJc09uTmVhclNob3JlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYW5pbWF0aW9uRW5kLCBzZXRBbmltYXRpb25FbmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpdGVtT25GYXJTaG9yZSwgc2V0SXRlbU9uRmFyU2hvcmVdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaGFzQmVlbkluQm9hdCwgc2V0SGFzQmVlbkluQm9hdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc1Jlc2V0LCBzZXRJc1Jlc2V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNub3coKVxuICB9LCBbXSk7XG4gIFxuICBjb25zdCB2YWx1ZSA9IDA7XG4gIGNvbnN0IHNub3cgPSB1c2VDYWxsYmFjaygoKSA9PiB7UGFydGljbGVzKCl9LCBbdmFsdWVdKVxuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IFtbXSwgbnVsbCwgdHJ1ZV07XG5cbiAgY29uc3QgcmVzZXQgPSAocmVzZXRCb29sKSA9PiB7XG4gICAgcmVzZXRCb29sICYmIGluaXRpYWxTdGF0ZS5mb3JFYWNoKHN0YXRlID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKVxuICAgICAgaWYgKHN0YXRlICE9PSBudWxsIHx8IHN0YXRlICE9PSB0cnVlKSB7XG4gICAgICAgIHNldFBsYWNlSXRlbUluQm9hdChzdGF0ZSlcbiAgICAgICAgc2V0SXRlbU9uRmFyU2hvcmUoc3RhdGUpXG4gICAgICAgIHNldEhhc0JlZW5JbkJvYXQoc3RhdGUpXG4gICAgICB9IGlmIChzdGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHNldENsaWNrZWRJdGVtKHN0YXRlKVxuICAgICAgICAgIHNldEFuaW1hdGlvbkVuZChzdGF0ZSlcbiAgICAgIH0gaWYoc3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRCb2F0SXNPbk5lYXJTaG9yZShzdGF0ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1PbkZhclNob3JlKVxuICB9XG5cbiAgY29uc3QgY2hlY2tJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgY2hlY2tJdGVtID0gJydcbiAgICBpZiAoaXRlbS5hbHQgPT09ICdjb3JuJyAmJiBpdGVtT25GYXJTaG9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrSXRlbSA9IFxuICAgICAgICB7XG4gICAgICAgICAgZGVhZDogJ2NoaWNrZW4nLFxuICAgICAgICAgIGhpZGRlbjogJ2Nvcm4nXG4gICAgICAgIH1cbiAgICAgIHNldENsaWNrZWRJdGVtKGNoZWNrSXRlbSlcbiAgICB9IGVsc2UgaWYgKGl0ZW0uYWx0ID09PSAnZm94JyAmJiBpdGVtT25GYXJTaG9yZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNoZWNrSXRlbSA9IFxuICAgICAgICB7XG4gICAgICAgICAgZGVhZDogJ2Nvcm4nLFxuICAgICAgICAgIGhpZGRlbjogJ2ZveCdcbiAgICAgICAgfVxuICAgICAgICBzZXRDbGlja2VkSXRlbShjaGVja0l0ZW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSXRlbSA9IFxuICAgICAgICB7XG4gICAgICAgICAgaGlkZGVuOiAnY2hpY2tlbidcbiAgICAgICAgfVxuICAgICAgICBzZXRDbGlja2VkSXRlbShjaGVja0l0ZW0pXG4gICAgfVxuICAgICAgcGxhY2VJbkJvYXQoaXRlbSlcbiAgfVxuXG4gIGNvbnN0IHBsYWNlSW5Cb2F0ID0gKGl0ZW0pID0+IHtcbiAgICBzZXRQbGFjZUl0ZW1JbkJvYXQoW2l0ZW1dKVxuICAgIGl0ZW1IYXNCZWVuSW5Cb2F0KGl0ZW0pXG4gIH1cblxuICBjb25zdCBpdGVtSGFzQmVlbkluQm9hdCA9IChpdGVtKSA9PiB7XG4gICAgY29uc29sZS5sb2coaGFzQmVlbkluQm9hdClcbiAgICBsZXQgYm9hdEl0ZW0gPSBbLi4uaGFzQmVlbkluQm9hdF1cbiAgICBib2F0SXRlbS5wdXNoKGl0ZW0pXG4gICAgc2V0SGFzQmVlbkluQm9hdChib2F0SXRlbSlcbiAgICBpdGVtRHJvcE9mZihpdGVtKVxuICB9XG5cbiAgY29uc3Qgc2VuZEJvYXRUb0ZhclNob3JlID0gKCkgPT4ge1xuICAgIGlmIChjbGlja2VkSXRlbS5kZWFkKSB7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXQtY29udGFpbmVyJylcbiAgICBib2F0LmNsYXNzTGlzdC5hZGQoJ2JvYXQtYW5pbWF0aW9uJylcbiAgICBib2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHNldEJvYXRJc09uTmVhclNob3JlKGZhbHNlKVxuICAgICAgcmVtb3ZlSXRlbUZyb21Cb2F0KClcbiAgICB9KVxuICB9XG59XG5cbiAgY29uc3QgaXRlbURyb3BPZmYgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGJvYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdCcpXG4gICAgYm9hdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICBzZXRBbmltYXRpb25FbmQoJ2JvYXQgbGFuZGVkIG9uIGZhciBzaG9yZScpO1xuICAgICAgY29uc3QgaXRlbUZvckZhclNob3JlRHJvcE9mZiA9IFtpdGVtXVxuICAgICAgc2V0SXRlbU9uRmFyU2hvcmUoaXRlbUZvckZhclNob3JlRHJvcE9mZik7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNlbmRCb2F0VG9OZWFyU2hvcmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgYm9hdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2F0LWNvbnRhaW5lcicpXG4gICAgYm9hdC5jbGFzc0xpc3QuYWRkKCdib2F0LWFuaW1hdGlvbi10by1uZWFyU2hvcmUnKVxuICAgIGJvYXQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgYm9hdC5jbGFzc0xpc3QucmVtb3ZlKCdib2F0LWFuaW1hdGlvbi10by1uZWFyU2hvcmUnLCAnYm9hdC1hbmltYXRpb24nKVxuICAgICAgc2V0Qm9hdElzT25OZWFyU2hvcmUodHJ1ZSlcbiAgICAgIHNldFBsYWNlSXRlbUluQm9hdChbXSlcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQm9hdCA9ICgpID0+IHtcbiAgICBpdGVtT25GYXJTaG9yZS5sZWdudGggPSAxXG4gICAgPyBzZXRQbGFjZUl0ZW1JbkJvYXQoW10pXG4gICAgOiBudWxsXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXsnbGFuZHNjYXBlIG1haW4taGVpZ2h0J30+IFxuICAgICAgPGNhbnZhcyBjbGFzc05hbWU9eydwb3NpdGlvbi1hYnNvbHV0ZSd9IGlkPVwiY3ZzXCI+PC9jYW52YXM+XG4gICAgICA8UmlkZGxlRGVzY3JpcHRpb24gcmVzZXQ9e3Jlc2V0fS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbid9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtZW5kJ30+XG4gICAgICAgICAgPE5lYXJTaG9yZSBcbiAgICAgICAgICAgIGNoZWNrSXRlbT17Y2hlY2tJdGVtfSBcbiAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgIGNsaWNrZWRJdGVtPXtjbGlja2VkSXRlbX1cbiAgICAgICAgICAgIGl0ZW1PbkZhclNob3JlPXtpdGVtT25GYXJTaG9yZX1cbiAgICAgICAgICAgIHBsYWNlSXRlbUluQm9hdD17cGxhY2VJdGVtSW5Cb2F0fVxuICAgICAgICAgICAgaGFzQmVlbkluQm9hdD17aGFzQmVlbkluQm9hdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCb2F0QW5kRmFybWVyIFxuICAgICAgICAgICAgY2xpY2tlZEl0ZW09e2NsaWNrZWRJdGVtfVxuICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgcGxhY2VJdGVtSW5Cb2F0PXtwbGFjZUl0ZW1JbkJvYXR9XG4gICAgICAgICAgICBpdGVtT25GYXJTaG9yZT17aXRlbU9uRmFyU2hvcmV9XG4gICAgICAgICAgICBib2F0SXNPbk5lYXJTaG9yZT17Ym9hdElzT25OZWFyU2hvcmV9XG4gICAgICAgICAgICBzZW5kQm9hdFRvRmFyU2hvcmU9e3NlbmRCb2F0VG9GYXJTaG9yZX1cbiAgICAgICAgICAgIHNlbmRCb2F0VG9OZWFyU2hvcmU9e3NlbmRCb2F0VG9OZWFyU2hvcmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGYXJTaG9yZSBcbiAgICAgICAgICBpdGVtT25GYXJTaG9yZT17aXRlbU9uRmFyU2hvcmV9XG4gICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgIGFuaW1hdGlvbkVuZD17YW5pbWF0aW9uRW5kfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});