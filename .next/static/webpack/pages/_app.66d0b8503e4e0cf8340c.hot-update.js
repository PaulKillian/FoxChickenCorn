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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ \"./node_modules/next/dist/compiled/css-loader/getUrl.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_Rustic_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/Rustic.otf */ \"./public/Rustic.otf\");\n/* harmony import */ var _public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/landscape.jpg */ \"./public/images/landscape.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Rustic_otf__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: Rustic;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"opentype\\\");\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Rustic', sans-serif\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@-webkit-keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  -webkit-animation: boat-movement 2s forwards;\\n          animation: boat-movement 2s forwards;\\n}\\n\\n@-webkit-keyframes slide-left \\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(-35vw,0);\\n            transform: translate(-35vw,0);\\n  }\\n}\\n\\n@keyframes slide-left \\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(-35vw,0);\\n            transform: translate(-35vw,0);\\n  }\\n}\\n.move-to-near-shore {\\n  -webkit-animation: slide-left 2s forwards;\\n          animation: slide-left 2s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  -webkit-animation: pulse 1s linear infinite both;\\n          animation: pulse 1s linear infinite both;\\n}\\n.front {\\n  z-index: -1;\\n}\\n.bt-color {\\n  background-color: #44A4B4;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    -webkit-animation-name: dissolve;\\n            animation-name: dissolve;\\n  }\\n}\\n.float { \\n\\t-webkit-animation-name: floating; \\n\\t        animation-name: floating;\\n  -webkit-animation-duration: 3s;\\n          animation-duration: 3s;\\n  -webkit-animation-iteration-count: infinite;\\n          animation-iteration-count: infinite;\\n  -webkit-animation-timing-function: ease-in-out;\\n          animation-timing-function: ease-in-out;\\n}\\n@-webkit-keyframes floating {\\n  0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\\n  50%  { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\\n  100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \\n}\\n@keyframes floating {\\n  0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\\n  50%  { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\\n  100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \\n}\\n.glass {\\n  background: rgba( 55, 72, 95, 0.30 );\\n  -webkit-box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 1.5px );\\n  -webkit-backdrop-filter: blur( 1.5px );\\n  border-radius: 12px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@-webkit-keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n.x-rotate-near-shore {    \\n  -webkit-animation: spinHorizontalnear 1.5s forwards;\\n  animation: spinHorizontalnear 1.5s forwards;\\n}\\n\\n@-webkit-keyframes spinHorizontalnear {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(2700deg); transform: rotateY(2700deg); }\\n}\\n\\n@keyframes spinHorizontalnear {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(2700deg); transform: rotateY(2700deg); }\\n}\\n\\n.far-shore-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n.far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,+DAAmD;AACrD;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT;AACF;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,yDAAuD;EACvD,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;;;;EAIE,eAAe;EACf,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AATA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AACA;EACE,4CAAoC;UAApC,oCAAoC;AACtC;;AAEA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;;AATA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;AACA;EACE,yCAAiC;UAAjC,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,gDAAwC;UAAxC,wCAAwC;AAC1C;AACA;EACE,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE;IACE,gCAAwB;YAAxB,wBAAwB;EAC1B;AACF;AACA;CACC,gCAAwB;SAAxB,wBAAwB;EACvB,8BAAsB;UAAtB,sBAAsB;EACtB,2CAAmC;UAAnC,mCAAmC;EACnC,8CAAsC;UAAtC,sCAAsC;AACxC;AACA;EACE,KAAK,qCAA6B,EAA7B,6BAA6B,EAAE;EACpC,OAAO,qCAA6B,EAA7B,6BAA6B,EAAE;EACtC,SAAS,qCAA6B,EAA7B,6BAA6B,EAAE;AAC1C;AAJA;EACE,KAAK,qCAA6B,EAA7B,6BAA6B,EAAE;EACpC,OAAO,qCAA6B,EAA7B,6BAA6B,EAAE;EACtC,SAAS,qCAA6B,EAA7B,6BAA6B,EAAE;AAC1C;AACA;EACE,oCAAoC;EACpC,0DAAkD;UAAlD,kDAAkD;EAClD,8BAA8B;EAC9B,sCAAsC;EACtC,mBAAmB;EACnB,6CAA6C;AAC/C;AACA;EACE,+CAA+C;AACjD;AACA;EAGE,+CAA+C;EAC/C,uCAAuC;AACzC;;AAEA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAHA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;AACA;EAGE,mDAAmD;EACnD,2CAA2C;AAC7C;;AAEA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,mCAA2B,EAA3B,2BAA2B,EAAE;AACtC;;AAHA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,mCAA2B,EAA3B,2BAA2B,EAAE;AACtC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,QAAQ;EACR,MAAM;EACN,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB\",\"sourcesContent\":[\"@font-face {\\n  font-family: Rustic;\\n  src: url(\\\"../public/Rustic.otf\\\") format(\\\"opentype\\\");\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Rustic', sans-serif\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url('../public/images/landscape.jpg');\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    transform: translate(0,0);\\n  }\\n\\n  to {\\n    transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  animation: boat-movement 2s forwards;\\n}\\n\\n@keyframes slide-left \\n{\\n  from {\\n    transform: translate(0,0);\\n  }\\n\\n  to {\\n    transform: translate(-35vw,0);\\n  }\\n}\\n.move-to-near-shore {\\n  animation: slide-left 2s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  animation: pulse 1s linear infinite both;\\n}\\n.front {\\n  z-index: -1;\\n}\\n.bt-color {\\n  background-color: #44A4B4;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    animation-name: dissolve;\\n  }\\n}\\n.float { \\n\\tanimation-name: floating;\\n  animation-duration: 3s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n@keyframes floating {\\n  0% { transform: translate(0,  0px); }\\n  50%  { transform: translate(0, 10px); }\\n  100%   { transform: translate(0, -0px); }    \\n}\\n.glass {\\n  background: rgba( 55, 72, 95, 0.30 );\\n  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 1.5px );\\n  -webkit-backdrop-filter: blur( 1.5px );\\n  border-radius: 12px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {\\n  -moz-animation: spinHorizontal 1.5s forwards;\\n  -o-animation: spinHorizontal 1.5s forwards;    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { transform: rotateY(0deg); }\\n  100% { transform: rotateY(180deg); }\\n}\\n.x-rotate-near-shore {\\n  -moz-animation: spinHorizontalnear 1.5s forwards;\\n  -o-animation: spinHorizontalnear 1.5s forwards;    \\n  -webkit-animation: spinHorizontalnear 1.5s forwards;\\n  animation: spinHorizontalnear 1.5s forwards;\\n}\\n\\n@keyframes spinHorizontalnear {\\n  0% { transform: rotateY(0deg); }\\n  100% { transform: rotateY(2700deg); }\\n}\\n\\n.far-shore-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n.far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2ZkMGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQytGO0FBQ087QUFDckM7QUFDVTtBQUMzRSw4QkFBOEIseUZBQTJCO0FBQ3pELHlDQUF5Qyw0RkFBK0IsQ0FBQyx1REFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLGlFQUE2QjtBQUN0RztBQUNBLHNEQUFzRCx3QkFBd0IsOEVBQThFLEdBQUcsaUJBQWlCLGVBQWUsY0FBYyx3Q0FBd0MsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTyxtQ0FBbUMsbUNBQW1DLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLGNBQWMsc0VBQXNFLGlDQUFpQywyQkFBMkIsZ0NBQWdDLGlDQUFpQyxHQUFHLG1DQUFtQyxvQkFBb0IsZUFBZSxHQUFHLG9CQUFvQixnQkFBZ0IsR0FBRyxxQ0FBcUMsVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssVUFBVSwyQ0FBMkMsMkNBQTJDLEtBQUssR0FBRyw2QkFBNkIsVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssVUFBVSwyQ0FBMkMsMkNBQTJDLEtBQUssR0FBRyxtQkFBbUIsaURBQWlELGlEQUFpRCxHQUFHLHFDQUFxQyxVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDRDQUE0Qyw0Q0FBNEMsS0FBSyxHQUFHLDZCQUE2QixVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDRDQUE0Qyw0Q0FBNEMsS0FBSyxHQUFHLHVCQUF1Qiw4Q0FBOEMsOENBQThDLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxTQUFTLGtCQUFrQixHQUFHLGNBQWMscURBQXFELHFEQUFxRCxHQUFHLFVBQVUsZ0JBQWdCLEdBQUcsYUFBYSw4QkFBOEIsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxtQ0FBbUMsZ0JBQWdCLHVDQUF1Qyx1Q0FBdUMsS0FBSyxH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LDZCQUE2QixVQUFVLGdDQUFnQyxLQUFLLFVBQVUsbUNBQW1DLEtBQUssR0FBRyxtQkFBbUIseUNBQXlDLEdBQUcsNkJBQTZCLFVBQVUsZ0NBQWdDLEtBQUssVUFBVSxvQ0FBb0MsS0FBSyxHQUFHLHVCQUF1QixzQ0FBc0MsR0FBRyxjQUFjLGtCQUFrQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsY0FBYyw2Q0FBNkMsR0FBRyxVQUFVLGdCQUFnQixHQUFHLGFBQWEsOEJBQThCLG1CQUFtQixpQkFBaUIsdUJBQXVCLEdBQUcsbUNBQW1DLGdCQUFnQiwrQkFBK0IsS0FBSyxHQUFHLFVBQVUsOEJBQThCLDJCQUEyQix3Q0FBd0MsMkNBQTJDLEdBQUcsdUJBQXVCLFFBQVEsK0JBQStCLEVBQUUsVUFBVSwrQkFBK0IsRUFBRSxZQUFZLCtCQUErQixFQUFFLE9BQU8sVUFBVSx5Q0FBeUMsdURBQXVELG1DQUFtQywyQ0FBMkMsd0JBQXdCLGtEQUFrRCxHQUFHLFdBQVcsb0RBQW9ELEdBQUcsYUFBYSxpREFBaUQsK0NBQStDLHdEQUF3RCw0Q0FBNEMsR0FBRywrQkFBK0IsUUFBUSwwQkFBMEIsRUFBRSxVQUFVLDRCQUE0QixFQUFFLEdBQUcsd0JBQXdCLHFEQUFxRCxtREFBbUQsNERBQTRELGdEQUFnRCxHQUFHLG1DQUFtQyxRQUFRLDBCQUEwQixFQUFFLFVBQVUsNkJBQTZCLEVBQUUsR0FBRyx5QkFBeUIsa0JBQWtCLGdCQUFnQixhQUFhLFdBQVcsdUJBQXVCLEdBQUcsK0JBQStCLGlCQUFpQix1QkFBdUIsR0FBRyxxQkFBcUI7QUFDcnVUO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL3B1YmxpYy9SdXN0aWMub3RmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvbGFuZHNjYXBlLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSdXN0aWM7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUnVzdGljJywgc2Fucy1zZXJpZlxcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1haW4taGVpZ2h0IHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5sYW5kc2NhcGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuI2JvYXQsXFxuI2Nvcm4sXFxuI2NoaWNrZW4sXFxuI2ZveCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uZmFybWVyLXBvc2l0aW9uIHtcXG4gIHRvcDogMS41cmVtO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm9hdC1tb3ZlbWVudFxcbntcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYm9hdC1tb3ZlbWVudFxcbntcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICB9XFxufVxcbi5ib2F0LWFuaW1hdGlvbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYm9hdC1tb3ZlbWVudCAycyBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBib2F0LW1vdmVtZW50IDJzIGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtbGVmdCBcXG57XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1dncsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1dncsMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCBcXG57XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1dncsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1dncsMCk7XFxuICB9XFxufVxcbi5tb3ZlLXRvLW5lYXItc2hvcmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWxlZnQgMnMgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAycyBmb3J3YXJkcztcXG59XFxuXFxuI3Rvb2x0aXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rvb2x0aXBbZGF0YS1zaG93XSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5kZWFkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbmltYXRpb24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDFzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDFzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xcbn1cXG4uZnJvbnQge1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5idC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRBNEI0O1xcbiAgY29sb3I6ICNGNUUyREM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xcbiAgLmFuaW1hdGlvbiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGRpc3NvbHZlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBkaXNzb2x2ZTtcXG4gIH1cXG59XFxuLmZsb2F0IHsgXFxuXFx0LXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxvYXRpbmc7IFxcblxcdCAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsb2F0aW5nIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgIDBweCk7IH1cXG4gIDUwJSAgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTsgfVxcbiAgMTAwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMHB4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXFxufVxcbkBrZXlmcmFtZXMgZmxvYXRpbmcge1xcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgfVxcbiAgNTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpOyB9XFxuICAxMDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMHB4KTsgfSAgICBcXG59XFxuLmdsYXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoIDU1LCA3MiwgOTUsIDAuMzAgKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxLjVweCApO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEuNXB4ICk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbn1cXG4uc2hhZG93IHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMXJlbSByZ2IoNDYsIDQ2LCA0NikpO1xcbn1cXG4ueC1yb3RhdGUgeyAgICBcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxLjVzIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbCAxLjVzIGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbkhvcml6b250YWwge1xcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBzcGluSG9yaXpvbnRhbCB7XFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IH1cXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbn1cXG4ueC1yb3RhdGUtbmVhci1zaG9yZSB7ICAgIFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsbmVhciAxLjVzIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbG5lYXIgMS41cyBmb3J3YXJkcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5Ib3Jpem9udGFsbmVhciB7XFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IH1cXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgyNzAwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGVZKDI3MDBkZWcpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWxuZWFyIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDI3MDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMjcwMGRlZyk7IH1cXG59XFxuXFxuLmZhci1zaG9yZS1wb3NpdGlvbiB7XFxuICBib3R0b206IDQ2MHB4O1xcbiAgbGVmdDogNTU5cHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZhci1zaG9yZS1jaGlja2VuLXBvc2l0aW9uIHtcXG4gIGxlZnQ6IDE0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiwrREFBbUQ7QUFDckQ7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFNBQVM7RUFDVDtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlEQUF1RDtFQUN2RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTs7OztFQUlFLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBOztFQUVFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7RUFDOUI7QUFDRjtBQVRBOztFQUVFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEI7RUFDOUI7QUFDRjtBQUNBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBVEE7O0VBRUU7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjtBQUNGO0FBQ0E7RUFDRSx5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0FBQ0Y7QUFDQTtDQUNDLGdDQUF3QjtTQUF4Qix3QkFBd0I7RUFDdkIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLEtBQUsscUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3BDLE9BQU8scUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3RDLFNBQVMscUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0FBQzFDO0FBSkE7RUFDRSxLQUFLLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUNwQyxPQUFPLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUN0QyxTQUFTLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtBQUMxQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBEQUFrRDtVQUFsRCxrREFBa0Q7RUFDbEQsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUdFLCtDQUErQztFQUMvQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxLQUFLLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTtFQUMvQixPQUFPLGtDQUEwQixFQUExQiwwQkFBMEIsRUFBRTtBQUNyQzs7QUFIQTtFQUNFLEtBQUssZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFO0VBQy9CLE9BQU8sa0NBQTBCLEVBQTFCLDBCQUEwQixFQUFFO0FBQ3JDO0FBQ0E7RUFHRSxtREFBbUQ7RUFDbkQsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsS0FBSyxnQ0FBd0IsRUFBeEIsd0JBQXdCLEVBQUU7RUFDL0IsT0FBTyxtQ0FBMkIsRUFBM0IsMkJBQTJCLEVBQUU7QUFDdEM7O0FBSEE7RUFDRSxLQUFLLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTtFQUMvQixPQUFPLG1DQUEyQixFQUEzQiwyQkFBMkIsRUFBRTtBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsUUFBUTtFQUNSLE1BQU07RUFDTixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnVzdGljO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3B1YmxpYy9SdXN0aWMub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUnVzdGljJywgc2Fucy1zZXJpZlxcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYWluLWhlaWdodCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4ubGFuZHNjYXBlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL2ltYWdlcy9sYW5kc2NhcGUuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNib2F0LFxcbiNjb3JuLFxcbiNjaGlja2VuLFxcbiNmb3gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmZhcm1lci1wb3NpdGlvbiB7XFxuICB0b3A6IDEuNXJlbTtcXG59XFxuQGtleWZyYW1lcyBib2F0LW1vdmVtZW50XFxue1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICB9XFxufVxcbi5ib2F0LWFuaW1hdGlvbiB7XFxuICBhbmltYXRpb246IGJvYXQtbW92ZW1lbnQgMnMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCBcXG57XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1dncsMCk7XFxuICB9XFxufVxcbi5tb3ZlLXRvLW5lYXItc2hvcmUge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDJzIGZvcndhcmRzO1xcbn1cXG5cXG4jdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdG9vbHRpcFtkYXRhLXNob3ddIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmRlYWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFuaW1hdGlvbiB7XFxuICBhbmltYXRpb246IHB1bHNlIDFzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xcbn1cXG4uZnJvbnQge1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5idC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRBNEI0O1xcbiAgY29sb3I6ICNGNUUyREM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xcbiAgLmFuaW1hdGlvbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBkaXNzb2x2ZTtcXG4gIH1cXG59XFxuLmZsb2F0IHsgXFxuXFx0YW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgZmxvYXRpbmcge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgfVxcbiAgNTAlICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpOyB9XFxuICAxMDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMHB4KTsgfSAgICBcXG59XFxuLmdsYXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoIDU1LCA3MiwgOTUsIDAuMzAgKTtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxLjVweCApO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEuNXB4ICk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbn1cXG4uc2hhZG93IHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMXJlbSByZ2IoNDYsIDQ2LCA0NikpO1xcbn1cXG4ueC1yb3RhdGUge1xcbiAgLW1vei1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxuICAtby1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7ICAgIFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWwge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbn1cXG4ueC1yb3RhdGUtbmVhci1zaG9yZSB7XFxuICAtbW96LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWxuZWFyIDEuNXMgZm9yd2FyZHM7XFxuICAtby1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsbmVhciAxLjVzIGZvcndhcmRzOyAgICBcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbG5lYXIgMS41cyBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbjogc3Bpbkhvcml6b250YWxuZWFyIDEuNXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWxuZWFyIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDI3MDBkZWcpOyB9XFxufVxcblxcbi5mYXItc2hvcmUtcG9zaXRpb24ge1xcbiAgYm90dG9tOiA0NjBweDtcXG4gIGxlZnQ6IDU1OXB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mYXItc2hvcmUtY2hpY2tlbi1wb3NpdGlvbiB7XFxuICBsZWZ0OiAxNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css\n");

/***/ })

});