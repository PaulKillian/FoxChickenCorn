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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ \"./node_modules/next/dist/compiled/css-loader/getUrl.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_Rustic_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/Rustic.otf */ \"./public/Rustic.otf\");\n/* harmony import */ var _public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/landscape.jpg */ \"./public/images/landscape.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Rustic_otf__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: Rustic;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"opentype\\\");\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Rustic', sans-serif\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@-webkit-keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  -webkit-animation: boat-movement 2s forwards;\\n          animation: boat-movement 2s forwards;\\n}\\n\\n@-webkit-keyframes slide-left \\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(-35vw,0);\\n            transform: translate(-35vw,0);\\n  }\\n}\\n\\n@keyframes slide-left \\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(-35vw,0);\\n            transform: translate(-35vw,0);\\n  }\\n}\\n.move-to-near-shore {\\n  -webkit-animation: slide-left 2s forwards;\\n          animation: slide-left 2s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  -webkit-animation: pulse 1s linear infinite both;\\n          animation: pulse 1s linear infinite both;\\n}\\n.front {\\n  z-index: -1;\\n}\\n.bt-color {\\n  background-color: #44A4B4;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    -webkit-animation-name: dissolve;\\n            animation-name: dissolve;\\n  }\\n}\\n.float { \\n\\t-webkit-animation-name: floating; \\n\\t        animation-name: floating;\\n  -webkit-animation-duration: 3s;\\n          animation-duration: 3s;\\n  -webkit-animation-iteration-count: infinite;\\n          animation-iteration-count: infinite;\\n  -webkit-animation-timing-function: ease-in-out;\\n          animation-timing-function: ease-in-out;\\n}\\n@-webkit-keyframes floating {\\n  0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\\n  50%  { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\\n  100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \\n}\\n@keyframes floating {\\n  0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\\n  50%  { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\\n  100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \\n}\\n.glass {\\n  background: rgba( 55, 72, 95, 0.30 );\\n  -webkit-box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 1.5px );\\n  -webkit-backdrop-filter: blur( 1.5px );\\n  border-radius: 12px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@-webkit-keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n.x-rotate-near-shore {    \\n  -webkit-animation: spinHorizontalnear 1.5s forwards;\\n  animation: spinHorizontalnear 1.5s forwards;\\n}\\n\\n@-webkit-keyframes spinHorizontalnear {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n@keyframes spinHorizontalnear {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n.far-shore-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n.far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n}\\n\\n.rotate {\\n  -webkit-transform: rotateY(180deg);\\n          transform: rotateY(180deg);\\n  padding-left: 4rem;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,+DAAmD;AACrD;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT;AACF;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,yDAAuD;EACvD,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;;;;EAIE,eAAe;EACf,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AATA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AACA;EACE,4CAAoC;UAApC,oCAAoC;AACtC;;AAEA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;;AATA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;AACA;EACE,yCAAiC;UAAjC,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,gDAAwC;UAAxC,wCAAwC;AAC1C;AACA;EACE,WAAW;AACb;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE;IACE,gCAAwB;YAAxB,wBAAwB;EAC1B;AACF;AACA;CACC,gCAAwB;SAAxB,wBAAwB;EACvB,8BAAsB;UAAtB,sBAAsB;EACtB,2CAAmC;UAAnC,mCAAmC;EACnC,8CAAsC;UAAtC,sCAAsC;AACxC;AACA;EACE,KAAK,qCAA6B,EAA7B,6BAA6B,EAAE;EACpC,OAAO,qCAA6B,EAA7B,6BAA6B,EAAE;EACtC,SAAS,qCAA6B,EAA7B,6BAA6B,EAAE;AAC1C;AAJA;EACE,KAAK,qCAA6B,EAA7B,6BAA6B,EAAE;EACpC,OAAO,qCAA6B,EAA7B,6BAA6B,EAAE;EACtC,SAAS,qCAA6B,EAA7B,6BAA6B,EAAE;AAC1C;AACA;EACE,oCAAoC;EACpC,0DAAkD;UAAlD,kDAAkD;EAClD,8BAA8B;EAC9B,sCAAsC;EACtC,mBAAmB;EACnB,6CAA6C;AAC/C;AACA;EACE,+CAA+C;AACjD;AACA;EAGE,+CAA+C;EAC/C,uCAAuC;AACzC;;AAEA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAHA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;AACA;EAGE,mDAAmD;EACnD,2CAA2C;AAC7C;;AAEA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAHA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,QAAQ;EACR,MAAM;EACN,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kCAA0B;UAA1B,0BAA0B;EAC1B,kBAAkB;AACpB\",\"sourcesContent\":[\"@font-face {\\n  font-family: Rustic;\\n  src: url(\\\"../public/Rustic.otf\\\") format(\\\"opentype\\\");\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Rustic', sans-serif\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url('../public/images/landscape.jpg');\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    transform: translate(0,0);\\n  }\\n\\n  to {\\n    transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  animation: boat-movement 2s forwards;\\n}\\n\\n@keyframes slide-left \\n{\\n  from {\\n    transform: translate(0,0);\\n  }\\n\\n  to {\\n    transform: translate(-35vw,0);\\n  }\\n}\\n.move-to-near-shore {\\n  animation: slide-left 2s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  animation: pulse 1s linear infinite both;\\n}\\n.front {\\n  z-index: -1;\\n}\\n.bt-color {\\n  background-color: #44A4B4;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    animation-name: dissolve;\\n  }\\n}\\n.float { \\n\\tanimation-name: floating;\\n  animation-duration: 3s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n@keyframes floating {\\n  0% { transform: translate(0,  0px); }\\n  50%  { transform: translate(0, 10px); }\\n  100%   { transform: translate(0, -0px); }    \\n}\\n.glass {\\n  background: rgba( 55, 72, 95, 0.30 );\\n  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 1.5px );\\n  -webkit-backdrop-filter: blur( 1.5px );\\n  border-radius: 12px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {\\n  -moz-animation: spinHorizontal 1.5s forwards;\\n  -o-animation: spinHorizontal 1.5s forwards;    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { transform: rotateY(0deg); }\\n  100% { transform: rotateY(180deg); }\\n}\\n.x-rotate-near-shore {\\n  -moz-animation: spinHorizontalnear 1.5s forwards;\\n  -o-animation: spinHorizontalnear 1.5s forwards;    \\n  -webkit-animation: spinHorizontalnear 1.5s forwards;\\n  animation: spinHorizontalnear 1.5s forwards;\\n}\\n\\n@keyframes spinHorizontalnear {\\n  0% { transform: rotateY(0deg); }\\n  100% { transform: rotateY(180deg); }\\n}\\n\\n.far-shore-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n.far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n}\\n\\n.rotate {\\n  transform: rotateY(180deg);\\n  padding-left: 4rem;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2ZkMGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQytGO0FBQ087QUFDckM7QUFDVTtBQUMzRSw4QkFBOEIseUZBQTJCO0FBQ3pELHlDQUF5Qyw0RkFBK0IsQ0FBQyx1REFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLGlFQUE2QjtBQUN0RztBQUNBLHNEQUFzRCx3QkFBd0IsOEVBQThFLEdBQUcsaUJBQWlCLGVBQWUsY0FBYyx3Q0FBd0MsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTyxtQ0FBbUMsbUNBQW1DLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLGNBQWMsc0VBQXNFLGlDQUFpQywyQkFBMkIsZ0NBQWdDLGlDQUFpQyxHQUFHLG1DQUFtQyxvQkFBb0IsZUFBZSxHQUFHLG9CQUFvQixnQkFBZ0IsR0FBRyxxQ0FBcUMsVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssVUFBVSwyQ0FBMkMsMkNBQTJDLEtBQUssR0FBRyw2QkFBNkIsVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssVUFBVSwyQ0FBMkMsMkNBQTJDLEtBQUssR0FBRyxtQkFBbUIsaURBQWlELGlEQUFpRCxHQUFHLHFDQUFxQyxVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDRDQUE0Qyw0Q0FBNEMsS0FBSyxHQUFHLDZCQUE2QixVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDRDQUE0Qyw0Q0FBNEMsS0FBSyxHQUFHLHVCQUF1Qiw4Q0FBOEMsOENBQThDLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxTQUFTLGtCQUFrQixHQUFHLGNBQWMscURBQXFELHFEQUFxRCxHQUFHLFVBQVUsZ0JBQWdCLEdBQUcsYUFBYSw4QkFBOEIsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxtQ0FBbUMsZ0JBQWdCLHVDQUF1Qyx1Q0FBdUMsS0FBSyxH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MV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vcHVibGljL1J1c3RpYy5vdGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9sYW5kc2NhcGUuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJ1c3RpYztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIm9wZW50eXBlXFxcIik7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSdXN0aWMnLCBzYW5zLXNlcmlmXFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpbi1oZWlnaHQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmxhbmRzY2FwZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG4jYm9hdCxcXG4jY29ybixcXG4jY2hpY2tlbixcXG4jZm94IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5mYXJtZXItcG9zaXRpb24ge1xcbiAgdG9wOiAxLjVyZW07XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBib2F0LW1vdmVtZW50XFxue1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBib2F0LW1vdmVtZW50XFxue1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywwKTtcXG4gIH1cXG59XFxuLmJvYXQtYW5pbWF0aW9uIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBib2F0LW1vdmVtZW50IDJzIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IGJvYXQtbW92ZW1lbnQgMnMgZm9yd2FyZHM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1sZWZ0IFxcbntcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzV2dywwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzV2dywwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IFxcbntcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzV2dywwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzV2dywwKTtcXG4gIH1cXG59XFxuLm1vdmUtdG8tbmVhci1zaG9yZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtbGVmdCAycyBmb3J3YXJkcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDJzIGZvcndhcmRzO1xcbn1cXG5cXG4jdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdG9vbHRpcFtkYXRhLXNob3ddIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmRlYWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFuaW1hdGlvbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMXMgbGluZWFyIGluZmluaXRlIGJvdGg7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgbGluZWFyIGluZmluaXRlIGJvdGg7XFxufVxcbi5mcm9udCB7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmJ0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NEE0QjQ7XFxuICBjb2xvcjogI0Y1RTJEQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSB7XFxuICAuYW5pbWF0aW9uIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZGlzc29sdmU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGRpc3NvbHZlO1xcbiAgfVxcbn1cXG4uZmxvYXQgeyBcXG5cXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZzsgXFxuXFx0ICAgICAgICBhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxvYXRpbmcge1xcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgfVxcbiAgNTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpOyB9XFxuICAxMDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMHB4KTsgfSAgICBcXG59XFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgIDBweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XFxuICA1MCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7IH1cXG4gIDEwMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB9ICAgIFxcbn1cXG4uZ2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSggNTUsIDcyLCA5NSwgMC4zMCApO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEuNXB4ICk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMS41cHggKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxufVxcbi5zaGFkb3cge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4xcmVtIHJnYig0NiwgNDYsIDQ2KSk7XFxufVxcbi54LXJvdGF0ZSB7ICAgIFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluSG9yaXpvbnRhbCB7XFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IH1cXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5Ib3Jpem9udGFsIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcbi54LXJvdGF0ZS1uZWFyLXNob3JlIHsgICAgXFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWxuZWFyIDEuNXMgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IHNwaW5Ib3Jpem9udGFsbmVhciAxLjVzIGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbkhvcml6b250YWxuZWFyIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWxuZWFyIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcblxcbi5mYXItc2hvcmUtcG9zaXRpb24ge1xcbiAgYm90dG9tOiA0NjBweDtcXG4gIGxlZnQ6IDU1OXB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mYXItc2hvcmUtY2hpY2tlbi1wb3NpdGlvbiB7XFxuICBsZWZ0OiAxNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsK0RBQW1EO0FBQ3JEOztBQUVBOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1Q7QUFDRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5REFBdUQ7RUFDdkQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCO0FBQ0E7Ozs7RUFJRSxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7RUFFRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFUQTs7RUFFRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0VBQzlCO0FBQ0Y7QUFDQTtFQUNFLDRDQUFvQztVQUFwQyxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUU7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UscUNBQTZCO1lBQTdCLDZCQUE2QjtFQUMvQjtBQUNGOztBQVRBOztFQUVFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7QUFDRjtBQUNBO0VBQ0UseUNBQWlDO1VBQWpDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0RBQXdDO1VBQXhDLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtBQUNGO0FBQ0E7Q0FDQyxnQ0FBd0I7U0FBeEIsd0JBQXdCO0VBQ3ZCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyw4Q0FBc0M7VUFBdEMsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxLQUFLLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUNwQyxPQUFPLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUN0QyxTQUFTLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtBQUMxQztBQUpBO0VBQ0UsS0FBSyxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7RUFDcEMsT0FBTyxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7RUFDdEMsU0FBUyxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7QUFDMUM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQywwREFBa0Q7VUFBbEQsa0RBQWtEO0VBQ2xELDhCQUE4QjtFQUM5QixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFHRSwrQ0FBK0M7RUFDL0MsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsS0FBSyxnQ0FBd0IsRUFBeEIsd0JBQXdCLEVBQUU7RUFDL0IsT0FBTyxrQ0FBMEIsRUFBMUIsMEJBQTBCLEVBQUU7QUFDckM7O0FBSEE7RUFDRSxLQUFLLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTtFQUMvQixPQUFPLGtDQUEwQixFQUExQiwwQkFBMEIsRUFBRTtBQUNyQztBQUNBO0VBR0UsbURBQW1EO0VBQ25ELDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLEtBQUssZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFO0VBQy9CLE9BQU8sa0NBQTBCLEVBQTFCLDBCQUEwQixFQUFFO0FBQ3JDOztBQUhBO0VBQ0UsS0FBSyxnQ0FBd0IsRUFBeEIsd0JBQXdCLEVBQUU7RUFDL0IsT0FBTyxrQ0FBMEIsRUFBMUIsMEJBQTBCLEVBQUU7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFFBQVE7RUFDUixNQUFNO0VBQ04sa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnVzdGljO1xcbiAgc3JjOiB1cmwoXFxcIi4uL3B1YmxpYy9SdXN0aWMub3RmXFxcIikgZm9ybWF0KFxcXCJvcGVudHlwZVxcXCIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUnVzdGljJywgc2Fucy1zZXJpZlxcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYWluLWhlaWdodCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4ubGFuZHNjYXBlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL2ltYWdlcy9sYW5kc2NhcGUuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNib2F0LFxcbiNjb3JuLFxcbiNjaGlja2VuLFxcbiNmb3gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmZhcm1lci1wb3NpdGlvbiB7XFxuICB0b3A6IDEuNXJlbTtcXG59XFxuQGtleWZyYW1lcyBib2F0LW1vdmVtZW50XFxue1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDM1dncsMCk7XFxuICB9XFxufVxcbi5ib2F0LWFuaW1hdGlvbiB7XFxuICBhbmltYXRpb246IGJvYXQtbW92ZW1lbnQgMnMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCBcXG57XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1dncsMCk7XFxuICB9XFxufVxcbi5tb3ZlLXRvLW5lYXItc2hvcmUge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDJzIGZvcndhcmRzO1xcbn1cXG5cXG4jdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdG9vbHRpcFtkYXRhLXNob3ddIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmRlYWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFuaW1hdGlvbiB7XFxuICBhbmltYXRpb246IHB1bHNlIDFzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xcbn1cXG4uZnJvbnQge1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5idC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRBNEI0O1xcbiAgY29sb3I6ICNGNUUyREM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xcbiAgLmFuaW1hdGlvbiB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBkaXNzb2x2ZTtcXG4gIH1cXG59XFxuLmZsb2F0IHsgXFxuXFx0YW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgZmxvYXRpbmcge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgfVxcbiAgNTAlICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpOyB9XFxuICAxMDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMHB4KTsgfSAgICBcXG59XFxuLmdsYXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoIDU1LCA3MiwgOTUsIDAuMzAgKTtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxLjVweCApO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEuNXB4ICk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSggMjU1LCAyNTUsIDI1NSwgMC4xOCApO1xcbn1cXG4uc2hhZG93IHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMXJlbSByZ2IoNDYsIDQ2LCA0NikpO1xcbn1cXG4ueC1yb3RhdGUge1xcbiAgLW1vei1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxuICAtby1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7ICAgIFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWwge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbn1cXG4ueC1yb3RhdGUtbmVhci1zaG9yZSB7XFxuICAtbW96LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWxuZWFyIDEuNXMgZm9yd2FyZHM7XFxuICAtby1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsbmVhciAxLjVzIGZvcndhcmRzOyAgICBcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbG5lYXIgMS41cyBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbjogc3Bpbkhvcml6b250YWxuZWFyIDEuNXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWxuZWFyIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG59XFxuXFxuLmZhci1zaG9yZS1wb3NpdGlvbiB7XFxuICBib3R0b206IDQ2MHB4O1xcbiAgbGVmdDogNTU5cHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZhci1zaG9yZS1jaGlja2VuLXBvc2l0aW9uIHtcXG4gIGxlZnQ6IDE0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css\n");

/***/ })

});