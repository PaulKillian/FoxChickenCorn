/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/particles.js":
/*!***************************************!*\
  !*** ./pages/components/particles.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    particles = _useState[0],\n    setParticles = _useState[1];\n\nvar Particles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(_c = function _c(particles) {\n  /************* SHIM ************************/\n  window.requestAnimFrame = function () {\n    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n      window.setTimeout(callback, 1000 / 60);\n    };\n  }();\n  /********************************************/\n\n\n  var canvas = document.getElementById('cvs'),\n      ctx = canvas.getContext('2d'),\n      height = canvas.height = document.body.offsetHeight,\n      width = canvas.width = document.body.offsetWidth,\n      collection = [],\n      num_drops = 1024,\n      // number of drops\n  gravity = 1,\n      // gravity multiplier \n  windforce = 0,\n      // yea i'd just leave this\n  windmultiplier = 0.007,\n      // this freaks out on large numbers\n  maxspeed = 5,\n      // this is so you never run too fast (it is a multiplier not raw)\n  gutter = 0.001; // the percentage distance to travel off screen before wrapping\n\n  function Drop() {\n    this.x;\n    this.y;\n    this.radius;\n    this.distance;\n    this.color;\n    this.speed;\n    this.vx;\n    this.vy;\n  }\n\n  Drop.prototype = {\n    constructor: Drop,\n    random_x: function random_x() {\n      var n = width * (1 + gutter);\n      return 1 - (1 + gutter) + Math.random() * n;\n    },\n    draw: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n      ctx.closePath();\n      ctx.fill();\n    }\n  };\n\n  function draw_frame() {\n    // this was recommended (see comments)\n    // check it out, just comment out the \n    // ctx.clearRect(0, 0, width, height);\n    // line and uncomment the three below:\n    //ctx.globalCompositeOperation=\"darker\";\n    //ctx.fillStyle=\"rgba(0,0,0,0.5)\";\n    //ctx.fillRect(0,0,width,height);  \n    ctx.clearRect(0, 0, width, height); // in a previous attempt I even go as far\n    // as to ensure i'm drawing the furthest particles \n    // first for the z-index overlay.\n    // in this run I felt it was unneeded\n\n    collection.forEach(function (drop) {\n      // costly but ultimatly I think it's worth it for now\n      // I muck with the opacity to help with the illusion of depth\n      ctx.globalAlpha = (drop.distance + 1) / 10;\n      drop.draw(ctx);\n      ctx.globalAlpha = 1;\n      drop.x += drop.vx;\n      drop.y += drop.vy;\n      var lx = drop.vx + windforce;\n      lx < maxspeed && lx > 1 - maxspeed && (drop.vx = lx);\n\n      if (drop.y > (drop.distance + 1) / 10 * height) {\n        drop.y = Math.random() * -drop.radius * (num_drops / 10);\n        drop.x = drop.random_x();\n      }\n\n      if (drop.x > width * (1 + gutter)) {\n        drop.x = 1 - width * gutter;\n      }\n\n      if (drop.x < 1 - width * gutter) {\n        drop.x = width * (1 + gutter);\n      }\n    });\n  }\n\n  function animate() {\n    requestAnimFrame(animate);\n    draw_frame();\n  }\n\n  function windtimer() {\n    // this is a super cheap way to do this,\n    // i will need to look into how to properly \n    // emulate wind\n    windforce = Math.random() > 0.5 ? windmultiplier : -windmultiplier;\n    setTimeout(windtimer, Math.random() * (1000 * 30));\n  }\n\n  function init() {\n    collection = [];\n\n    while (num_drops--) {\n      var drop = new Drop(); // todo: make constructor do this shit\n\n      drop.color = \"white\";\n      drop.distance = Math.random() * 10 | 0;\n      drop.speed = Math.random() * (drop.distance / 10) + gravity;\n      drop.vx = 0;\n      drop.vy = Math.random() * drop.speed + drop.speed / 2;\n      drop.radius = (drop.distance + 1) / 16 * 3;\n      drop.x = drop.random_x();\n      drop.y = Math.random() * height;\n      collection.push(drop);\n    }\n\n    windtimer();\n    animate();\n\n    window.onresize = function () {\n      height = canvas.height = document.body.offsetHeight;\n      width = canvas.width = document.body.offsetWidth;\n    };\n  }\n\n  init();\n}, [particles]);\n_c2 = Particles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Particles);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Particles$useMemo\");\n$RefreshReg$(_c2, \"Particles\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9wYXJ0aWNsZXMuanM/MjdjNSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInBhcnRpY2xlcyIsInNldFBhcnRpY2xlcyIsIlBhcnRpY2xlcyIsInVzZU1lbW8iLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImNvbGxlY3Rpb24iLCJudW1fZHJvcHMiLCJncmF2aXR5Iiwid2luZGZvcmNlIiwid2luZG11bHRpcGxpZXIiLCJtYXhzcGVlZCIsImd1dHRlciIsIkRyb3AiLCJ4IiwieSIsInJhZGl1cyIsImRpc3RhbmNlIiwiY29sb3IiLCJzcGVlZCIsInZ4IiwidnkiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsInJhbmRvbV94IiwibiIsIk1hdGgiLCJyYW5kb20iLCJkcmF3IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiZHJhd19mcmFtZSIsImNsZWFyUmVjdCIsImZvckVhY2giLCJkcm9wIiwiZ2xvYmFsQWxwaGEiLCJseCIsImFuaW1hdGUiLCJ3aW5kdGltZXIiLCJpbml0IiwicHVzaCIsIm9ucmVzaXplIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2dCQUNrQ0EsK0NBQVEsQ0FBQyxFQUFELEM7SUFBbkNDLFM7SUFBV0MsWTs7QUFFbEIsSUFBTUMsU0FBUyxHQUFH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UCxHQUFrQixZQUFXO0FBQzNCNUMsWUFBTSxHQUFHTCxNQUFNLENBQUNLLE1BQVAsR0FBZ0JKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxZQUF2QztBQUNBQyxXQUFLLEdBQUdSLE1BQU0sQ0FBQ1EsS0FBUCxHQUFlUCxRQUFRLENBQUNLLElBQVQsQ0FBY0csV0FBckM7QUFDRCxLQUhEO0FBSUQ7O0FBQ0RzQyxNQUFJO0FBQ0wsQ0E1SHdCLEVBNEh0QixDQUFDNUQsU0FBRCxDQTVIc0IsQ0FBekI7TUFBTUUsUztBQThITiwrREFBZUEsU0FBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvcGFydGljbGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmNvbnN0IFtwYXJ0aWNsZXMsIHNldFBhcnRpY2xlc10gPSB1c2VTdGF0ZShbXSlcblxuY29uc3QgUGFydGljbGVzID0gdXNlTWVtbygocGFydGljbGVzKSA9PiB7XG4gIC8qKioqKioqKioqKioqIFNISU0gKioqKioqKioqKioqKioqKioqKioqKioqL1xud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcbiAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApe1xuICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgICAgICAgIH07XG4gIH0pKCk7XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdnMnKSxcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgd2lkdGggPSBjYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLFxuICAgIGNvbGxlY3Rpb24gPSBbXSxcbiAgICBudW1fZHJvcHMgPSAxMDI0LCAvLyBudW1iZXIgb2YgZHJvcHNcbiAgICBncmF2aXR5ID0gMSwgLy8gZ3Jhdml0eSBtdWx0aXBsaWVyIFxuICAgIHdpbmRmb3JjZSA9IDAsIC8vIHllYSBpJ2QganVzdCBsZWF2ZSB0aGlzXG4gICAgd2luZG11bHRpcGxpZXIgPSAwLjAwNywgLy8gdGhpcyBmcmVha3Mgb3V0IG9uIGxhcmdlIG51bWJlcnNcbiAgICBtYXhzcGVlZCA9IDUsIC8vIHRoaXMgaXMgc28geW91IG5ldmVyIHJ1biB0b28gZmFzdCAoaXQgaXMgYSBtdWx0aXBsaWVyIG5vdCByYXcpXG4gICAgZ3V0dGVyID0gMC4wMDE7IC8vIHRoZSBwZXJjZW50YWdlIGRpc3RhbmNlIHRvIHRyYXZlbCBvZmYgc2NyZWVuIGJlZm9yZSB3cmFwcGluZ1xuICBcbiAgZnVuY3Rpb24gRHJvcCgpIHtcbiAgICB0aGlzLng7XG4gICAgdGhpcy55O1xuICAgIHRoaXMucmFkaXVzO1xuICAgIHRoaXMuZGlzdGFuY2U7XG4gICAgdGhpcy5jb2xvcjtcbiAgICB0aGlzLnNwZWVkO1xuICAgIHRoaXMudng7XG4gICAgdGhpcy52eTtcbiAgfVxuICBEcm9wLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogRHJvcCxcbiAgICBcbiAgICByYW5kb21feDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbiA9IHdpZHRoICogKDEgKyBndXR0ZXIpO1xuICAgICAgcmV0dXJuICgxIC0gKDEgKyBndXR0ZXIpKSArIChNYXRoLnJhbmRvbSgpICogbik7XG4gICAgfSxcbiAgICBkcmF3OiBmdW5jdGlvbihjdHgpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIGRyYXdfZnJhbWUoKSB7XG4gICAgLy8gdGhpcyB3YXMgcmVjb21tZW5kZWQgKHNlZSBjb21tZW50cylcbiAgICAvLyBjaGVjayBpdCBvdXQsIGp1c3QgY29tbWVudCBvdXQgdGhlIFxuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgLy8gbGluZSBhbmQgdW5jb21tZW50IHRoZSB0aHJlZSBiZWxvdzpcbiAgXG4gICAgLy9jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwiZGFya2VyXCI7XG4gICAgLy9jdHguZmlsbFN0eWxlPVwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgLy9jdHguZmlsbFJlY3QoMCwwLHdpZHRoLGhlaWdodCk7ICBcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIFxuICAgIC8vIGluIGEgcHJldmlvdXMgYXR0ZW1wdCBJIGV2ZW4gZ28gYXMgZmFyXG4gICAgLy8gYXMgdG8gZW5zdXJlIGknbSBkcmF3aW5nIHRoZSBmdXJ0aGVzdCBwYXJ0aWNsZXMgXG4gICAgLy8gZmlyc3QgZm9yIHRoZSB6LWluZGV4IG92ZXJsYXkuXG4gICAgLy8gaW4gdGhpcyBydW4gSSBmZWx0IGl0IHdhcyB1bm5lZWRlZFxuICAgIGNvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoZHJvcCkge1xuICAgICAgLy8gY29zdGx5IGJ1dCB1bHRpbWF0bHkgSSB0aGluayBpdCdzIHdvcnRoIGl0IGZvciBub3dcbiAgICAgIC8vIEkgbXVjayB3aXRoIHRoZSBvcGFjaXR5IHRvIGhlbHAgd2l0aCB0aGUgaWxsdXNpb24gb2YgZGVwdGhcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IChkcm9wLmRpc3RhbmNlICsgMSkgLyAxMDsgXG4gICAgICBkcm9wLmRyYXcoY3R4KTtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICBkcm9wLnggKz0gZHJvcC52eDtcbiAgICAgIGRyb3AueSArPSBkcm9wLnZ5O1xuICAgICAgdmFyIGx4ID0gZHJvcC52eCArIHdpbmRmb3JjZTtcbiAgICAgIGx4IDwgbWF4c3BlZWQgJiYgbHggPiAxIC0gbWF4c3BlZWQgJiYgKGRyb3AudnggPSBseCk7XG4gICAgICBpZiAoZHJvcC55ID4gKGRyb3AuZGlzdGFuY2UgKyAxKSAvIDEwICogaGVpZ2h0KSB7XG4gICAgICAgIGRyb3AueSA9IE1hdGgucmFuZG9tKCkgKiAtZHJvcC5yYWRpdXMgKiAobnVtX2Ryb3BzIC8gMTApO1xuICAgICAgICBkcm9wLnggPSBkcm9wLnJhbmRvbV94KCk7XG4gICAgICB9XG4gICAgICBpZiAoZHJvcC54ID4gd2lkdGggKiAoMSArIGd1dHRlcikpIHtcbiAgICAgICAgZHJvcC54ID0gMSAtICh3aWR0aCAqIGd1dHRlcik7XG4gICAgICB9XG4gICAgICBpZiAoZHJvcC54IDwgMSAtICh3aWR0aCAqIGd1dHRlcikpIHtcbiAgICAgICAgZHJvcC54ID0gd2lkdGggKiAoMSArIGd1dHRlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1GcmFtZShhbmltYXRlKTtcbiAgICBkcmF3X2ZyYW1lKCk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHdpbmR0aW1lcigpIHtcbiAgICAvLyB0aGlzIGlzIGEgc3VwZXIgY2hlYXAgd2F5IHRvIGRvIHRoaXMsXG4gICAgLy8gaSB3aWxsIG5lZWQgdG8gbG9vayBpbnRvIGhvdyB0byBwcm9wZXJseSBcbiAgICAvLyBlbXVsYXRlIHdpbmRcbiAgICB3aW5kZm9yY2UgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gd2luZG11bHRpcGxpZXIgOiAtd2luZG11bHRpcGxpZXI7XG4gICAgc2V0VGltZW91dCh3aW5kdGltZXIsIE1hdGgucmFuZG9tKCkgKiAoMTAwMCAqIDMwKSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29sbGVjdGlvbiA9IFtdO1xuICAgIHdoaWxlIChudW1fZHJvcHMtLSkge1xuICAgICAgdmFyIGRyb3AgPSBuZXcgRHJvcCgpOyAvLyB0b2RvOiBtYWtlIGNvbnN0cnVjdG9yIGRvIHRoaXMgc2hpdFxuICAgICAgZHJvcC5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIGRyb3AuZGlzdGFuY2UgPSBNYXRoLnJhbmRvbSgpICogMTAgfCAwO1xuICAgICAgZHJvcC5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAoZHJvcC5kaXN0YW5jZSAvIDEwKSArIGdyYXZpdHk7XG4gICAgICBkcm9wLnZ4ID0gMDtcbiAgICAgIGRyb3AudnkgPSBNYXRoLnJhbmRvbSgpICogZHJvcC5zcGVlZCArIChkcm9wLnNwZWVkIC8gMik7XG4gICAgICBkcm9wLnJhZGl1cyA9IChkcm9wLmRpc3RhbmNlICsgMSkgLyAxNiAqIDM7XG4gICAgICBkcm9wLnggPSBkcm9wLnJhbmRvbV94KCk7XG4gICAgICBkcm9wLnkgPSBNYXRoLnJhbmRvbSgpICogaGVpZ2h0O1xuICAgICAgY29sbGVjdGlvbi5wdXNoKGRyb3ApO1xuICAgIH1cbiAgICB3aW5kdGltZXIoKTtcbiAgICBhbmltYXRlKCk7XG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XG4gICAgICB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG4gICAgfTtcbiAgfVxuICBpbml0KCk7XG59LCBbcGFydGljbGVzXSlcblxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGVzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/particles.js\n");

/***/ })

});