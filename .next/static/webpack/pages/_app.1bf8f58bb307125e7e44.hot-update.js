/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ \"./node_modules/next/dist/compiled/css-loader/getUrl.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/landscape.jpg */ \"./public/images/landscape.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_2__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@-webkit-keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  -webkit-animation: boat-movement 10s forwards;\\n          animation: boat-movement 10s forwards;\\n}\\n\\n@-webkit-keyframes to-near-shore\\n{\\n  from {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n}\\n\\n@keyframes to-near-shore\\n{\\n  from {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n}\\n.to-near-shore {\\n  -webkit-animation: to-near-shore 10s forwards;\\n          animation: to-near-shore 10s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  -webkit-animation: pulse 1s linear infinite both;\\n          animation: pulse 1s linear infinite both;\\n}\\n.front {\\n  z-index: -1;\\n}\\n.bt-color {\\n  background-color: #5D3F59;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    -webkit-animation-name: dissolve;\\n            animation-name: dissolve;\\n  }\\n}\\n/* .float { \\n\\tanimation-name: floating;\\n  animation-duration: 3s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n@keyframes floating {\\n  0% { transform: translate(0,  0px); }\\n  50%  { transform: translate(0, 15px); }\\n  100%   { transform: translate(0, -0px); }    \\n} */\\n.glass {\\n  background: rgba( 0, 255, 255, 0.25 );\\n  -webkit-box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 4.5px );\\n  -webkit-backdrop-filter: blur( 11.5px );\\n  border-radius: 10px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@-webkit-keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n.far-shore-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n.far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;AACxE;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,yDAAuD;EACvD,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;;;;EAIE,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AATA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AACA;EACE,6CAAqC;UAArC,qCAAqC;AACvC;;AAEA;;EAEE;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;;EAEA;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;AACF;;AATA;;EAEE;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;;EAEA;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;AACF;AACA;EACE,6CAAqC;UAArC,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,gDAAwC;UAAxC,wCAAwC;AAC1C;AACA;EACE,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE;IACE,gCAAwB;YAAxB,wBAAwB;EAC1B;AACF;AACA;;;;;;;;;;GAUG;AACH;EACE,qCAAqC;EACrC,0DAAkD;UAAlD,kDAAkD;EAClD,8BAA8B;EAC9B,uCAAuC;EACvC,mBAAmB;EACnB,6CAA6C;AAC/C;AACA;EACE,+CAA+C;AACjD;AACA;EAGE,+CAA+C;EAC/C,uCAAuC;AACzC;;AAEA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAHA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,QAAQ;EACR,MAAM;EACN,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB\",\"sourcesContent\":[\"html,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url('../public/images/landscape.jpg');\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    transform: translate(0,0);\\n  }\\n\\n  to {\\n    transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  animation: boat-movement 10s forwards;\\n}\\n\\n@keyframes to-near-shore\\n{\\n  from {\\n    transform: translate(35vw,0);\\n  }\\n\\n  to {\\n    transform: translate(0,0);\\n  }\\n}\\n.to-near-shore {\\n  animation: to-near-shore 10s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  animation: pulse 1s linear infinite both;\\n}\\n.front {\\n  z-index: -1;\\n}\\n.bt-color {\\n  background-color: #5D3F59;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    animation-name: dissolve;\\n  }\\n}\\n/* .float { \\n\\tanimation-name: floating;\\n  animation-duration: 3s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n@keyframes floating {\\n  0% { transform: translate(0,  0px); }\\n  50%  { transform: translate(0, 15px); }\\n  100%   { transform: translate(0, -0px); }    \\n} */\\n.glass {\\n  background: rgba( 0, 255, 255, 0.25 );\\n  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 4.5px );\\n  -webkit-backdrop-filter: blur( 11.5px );\\n  border-radius: 10px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {\\n  -moz-animation: spinHorizontal 1.5s forwards;\\n  -o-animation: spinHorizontal 1.5s forwards;    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { transform: rotateY(0deg); }\\n  100% { transform: rotateY(180deg); }\\n}\\n\\n.far-shore-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n.far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2ZkMGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDK0Y7QUFDTztBQUMzQjtBQUMzRSw4QkFBOEIseUZBQTJCO0FBQ3pELHlDQUF5Qyw0RkFBK0IsQ0FBQyxpRUFBNkI7QUFDdEc7QUFDQSx1REFBdUQsZUFBZSxjQUFjLHdKQUF3SixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sbUNBQW1DLG1DQUFtQyxHQUFHLGtCQUFrQixrQkFBa0IsR0FBRyxjQUFjLHNFQUFzRSxpQ0FBaUMsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsR0FBRyxtQ0FBbUMsb0JBQW9CLEdBQUcsb0JBQW9CLGdCQUFnQixHQUFHLHFDQUFxQyxVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDJDQUEyQywyQ0FBMkMsS0FBSyxHQUFHLDZCQUE2QixVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDJDQUEyQywyQ0FBMkMsS0FBSyxHQUFHLG1CQUFtQixrREFBa0Qsa0RBQWtELEdBQUcsdUNBQXVDLFVBQVUsMkNBQTJDLDJDQUEyQyxLQUFLLFVBQVUsd0NBQXdDLHdDQUF3QyxLQUFLLEdBQUcsK0JBQStCLFVBQVUsMkNBQTJDLDJDQUEyQyxLQUFLLFVBQVUsd0NBQXdDLHdDQUF3QyxLQUFLLEdBQUcsa0JBQWtCLGtEQUFrRCxrREFBa0QsR0FBRyxjQUFjLGtCQUFrQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsY0FBYyxxREFBcUQscURBQXFELEdBQUcsVUFBVSxnQkFBZ0IsR0FBRyxhQUFhLDhCQUE4QixtQkFBbUIsaUJBQWlCLHVCQUF1QixHQUFHLG1DQUFtQyxnQkFBZ0IsdUNBQXVDLHVDQUF1QyxLQUFLLEdBQUcsYUFBYSw4QkFBOEIsMkJBQTJCLHdDQUF3QywyQ0FBMkMsR0FBRyx1QkFBdUIsUUFBUSwrQkFBK0IsRUFBRSxVQUFVLCtCQUErQixFQUFFLFlBQVksK0JBQStCLEVBQUUsT0FBTyxhQUFhLDBDQUEwQywrREFBK0QsK0RBQStELG1DQUFtQyw0Q0FBNEMsd0JBQXdCLGtEQUFrRCxHQUFHLFdBQVcsb0RBQW9ELEdBQUcsYUFBYSx3REFBd0QsNENBQTRDLEdBQUcsdUNBQXVDLFFBQVEsa0NBQWtDLDBCQUEwQixFQUFFLFVBQVUsb0NBQW9DLDRCQUE0QixFQUFFLEdBQUcsK0JBQStCLFFBQVEsa0NBQWtDLDBCQUEwQixFQUFFLFVBQVUsb0NBQW9DLDRCQUE0QixFQUFFLEdBQUcseUJBQXlCLGtCQUFrQixnQkFBZ0IsYUFBYSxXQUFXLHVCQUF1QixHQUFHLCtCQUErQixpQkFBaUIsdUJBQXVCLEdBQUcsT0FBTyxvRkFBb0YsVUFBVSxVQUFVLEtBQUssT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFFBQVEsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssY0FBYyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxtQ0FBbUMsb0NBQW9DLE9BQU8sS0FBSyxtQ0FBbUMsb0NBQW9DLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSx1Q0FBdUMsZUFBZSxjQUFjLHdKQUF3SixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLE9BQU8sMkJBQTJCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLGNBQWMsNERBQTRELGlDQUFpQywyQkFBMkIsZ0NBQWdDLGlDQUFpQyxHQUFHLG1DQUFtQyxvQkFBb0IsR0FBRyxvQkFBb0IsZ0JBQWdCLEdBQUcsNkJBQTZCLFVBQVUsZ0NBQWdDLEtBQUssVUFBVSxtQ0FBbUMsS0FBSyxHQUFHLG1CQUFtQiwwQ0FBMEMsR0FBRywrQkFBK0IsVUFBVSxtQ0FBbUMsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsa0JBQWtCLDBDQUEwQyxHQUFHLGNBQWMsa0JBQWtCLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLGFBQWEsdUJBQXVCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxjQUFjLDZDQUE2QyxHQUFHLFVBQVUsZ0JBQWdCLEdBQUcsYUFBYSw4QkFBOEIsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxtQ0FBbUMsZ0JBQWdCLCtCQUErQixLQUFLLEdBQUcsYUFBYSw4QkFBOEIsMkJBQTJCLHdDQUF3QywyQ0FBMkMsR0FBRyx1QkFBdUIsUUFBUSwrQkFBK0IsRUFBRSxVQUFVLCtCQUErQixFQUFFLFlBQVksK0JBQStCLEVBQUUsT0FBTyxhQUFhLDBDQUEwQyx1REFBdUQsbUNBQW1DLDRDQUE0Qyx3QkFBd0Isa0RBQWtELEdBQUcsV0FBVyxvREFBb0QsR0FBRyxhQUFhLGlEQUFpRCwrQ0FBK0Msd0RBQXdELDRDQUE0QyxHQUFHLCtCQUErQixRQUFRLDBCQUEwQixFQUFFLFVBQVUsNEJBQTRCLEVBQUUsR0FBRyx5QkFBeUIsa0JBQWtCLGdCQUFnQixhQUFhLFdBQVcsdUJBQXVCLEdBQUcsK0JBQStCLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUI7QUFDbHVQO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvbGFuZHNjYXBlLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYWluLWhlaWdodCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4ubGFuZHNjYXBlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNib2F0LFxcbiNjb3JuLFxcbiNjaGlja2VuLFxcbiNmb3gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmFybWVyLXBvc2l0aW9uIHtcXG4gIHRvcDogMS41cmVtO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm9hdC1tb3ZlbWVudFxcbntcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYm9hdC1tb3ZlbWVudFxcbntcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICB9XFxufVxcbi5ib2F0LWFuaW1hdGlvbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYm9hdC1tb3ZlbWVudCAxMHMgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYm9hdC1tb3ZlbWVudCAxMHMgZm9yd2FyZHM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB0by1uZWFyLXNob3JlXFxue1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0by1uZWFyLXNob3JlXFxue1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG59XFxuLnRvLW5lYXItc2hvcmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHRvLW5lYXItc2hvcmUgMTBzIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IHRvLW5lYXItc2hvcmUgMTBzIGZvcndhcmRzO1xcbn1cXG5cXG4jdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdG9vbHRpcFtkYXRhLXNob3ddIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmRlYWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFuaW1hdGlvbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMXMgbGluZWFyIGluZmluaXRlIGJvdGg7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgbGluZWFyIGluZmluaXRlIGJvdGg7XFxufVxcbi5mcm9udCB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmJ0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1RDNGNTk7XFxuICBjb2xvcjogI0Y1RTJEQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSB7XFxuICAuYW5pbWF0aW9uIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZGlzc29sdmU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGRpc3NvbHZlO1xcbiAgfVxcbn1cXG4vKiAuZmxvYXQgeyBcXG5cXHRhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XFxuICA1MCUgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCk7IH1cXG4gIDEwMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB9ICAgIFxcbn0gKi9cXG4uZ2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSggMCwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0LjVweCApO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDExLjVweCApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG59XFxuLnNoYWRvdyB7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjFyZW0gcmdiKDQ2LCA0NiwgNDYpKTtcXG59XFxuLngtcm90YXRlIHsgICAgXFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMS41cyBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMS41cyBmb3J3YXJkcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5Ib3Jpem9udGFsIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWwge1xcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG59XFxuXFxuLmZhci1zaG9yZS1wb3NpdGlvbiB7XFxuICBib3R0b206IDQ2MHB4O1xcbiAgbGVmdDogNTU5cHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZhci1zaG9yZS1jaGlja2VuLXBvc2l0aW9uIHtcXG4gIGxlZnQ6IDE0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNUO3dFQUNzRTtBQUN4RTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5REFBdUQ7RUFDdkQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCO0FBQ0E7Ozs7RUFJRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFUQTs7RUFFRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFDQTtFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUM7QUFDdkM7O0FBRUE7O0VBRUU7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGOztBQVRBOztFQUVFO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0UsNkNBQXFDO1VBQXJDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0RBQXdDO1VBQXhDLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7R0FVRztBQUNIO0VBQ0UscUNBQXFDO0VBQ3JDLDBEQUFrRDtVQUFsRCxrREFBa0Q7RUFDbEQsOEJBQThCO0VBQzlCLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUdFLCtDQUErQztFQUMvQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxLQUFLLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTtFQUMvQixPQUFPLGtDQUEwQixFQUExQiwwQkFBMEIsRUFBRTtBQUNyQzs7QUFIQTtFQUNFLEtBQUssZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFO0VBQy9CLE9BQU8sa0NBQTBCLEVBQTFCLDBCQUEwQixFQUFFO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxRQUFRO0VBQ1IsTUFBTTtFQUNOLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1haW4taGVpZ2h0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5sYW5kc2NhcGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9wdWJsaWMvaW1hZ2VzL2xhbmRzY2FwZS5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuI2JvYXQsXFxuI2Nvcm4sXFxuI2NoaWNrZW4sXFxuI2ZveCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mYXJtZXItcG9zaXRpb24ge1xcbiAgdG9wOiAxLjVyZW07XFxufVxcbkBrZXlmcmFtZXMgYm9hdC1tb3ZlbWVudFxcbntcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgfVxcbn1cXG4uYm9hdC1hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBib2F0LW1vdmVtZW50IDEwcyBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyB0by1uZWFyLXNob3JlXFxue1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxufVxcbi50by1uZWFyLXNob3JlIHtcXG4gIGFuaW1hdGlvbjogdG8tbmVhci1zaG9yZSAxMHMgZm9yd2FyZHM7XFxufVxcblxcbiN0b29sdGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b29sdGlwW2RhdGEtc2hvd10ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uZGVhZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW5pbWF0aW9uIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgMXMgbGluZWFyIGluZmluaXRlIGJvdGg7XFxufVxcbi5mcm9udCB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmJ0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1RDNGNTk7XFxuICBjb2xvcjogI0Y1RTJEQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSB7XFxuICAuYW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGRpc3NvbHZlO1xcbiAgfVxcbn1cXG4vKiAuZmxvYXQgeyBcXG5cXHRhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XFxuICA1MCUgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCk7IH1cXG4gIDEwMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB9ICAgIFxcbn0gKi9cXG4uZ2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSggMCwgMjU1LCAyNTUsIDAuMjUgKTtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCA0LjVweCApO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDExLjVweCApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcXG59XFxuLnNoYWRvdyB7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjFyZW0gcmdiKDQ2LCA0NiwgNDYpKTtcXG59XFxuLngtcm90YXRlIHtcXG4gIC1tb3otYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxLjVzIGZvcndhcmRzO1xcbiAgLW8tYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxLjVzIGZvcndhcmRzOyAgICBcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxLjVzIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxLjVzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5Ib3Jpem9udGFsIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG59XFxuXFxuLmZhci1zaG9yZS1wb3NpdGlvbiB7XFxuICBib3R0b206IDQ2MHB4O1xcbiAgbGVmdDogNTU5cHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZhci1zaG9yZS1jaGlja2VuLXBvc2l0aW9uIHtcXG4gIGxlZnQ6IDE0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css\n");

/***/ })

});