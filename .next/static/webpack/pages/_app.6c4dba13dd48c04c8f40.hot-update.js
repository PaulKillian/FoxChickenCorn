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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ \"./node_modules/next/dist/compiled/css-loader/getUrl.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_Rustic_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/Rustic.otf */ \"./public/Rustic.otf\");\n/* harmony import */ var _public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/landscape.jpg */ \"./public/images/landscape.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_Rustic_otf__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_public_images_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: Rustic;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"opentype\\\");\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Rustic', sans-serif\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@-webkit-keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(35vw,0);\\n            transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  -webkit-animation: boat-movement 2s forwards;\\n          animation: boat-movement 2s forwards;\\n}\\n\\n@-webkit-keyframes slide-left \\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(-14vw,0);\\n            transform: translate(-14vw,0);\\n  }\\n}\\n\\n@keyframes slide-left \\n{\\n  from {\\n    -webkit-transform: translate(0,0);\\n            transform: translate(0,0);\\n  }\\n\\n  to {\\n    -webkit-transform: translate(-14vw,0);\\n            transform: translate(-14vw,0);\\n  }\\n}\\n.move-to-near-shore {\\n  -webkit-animation: slide-left 2s forwards;\\n          animation: slide-left 2s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  -webkit-animation: pulse 1s linear infinite both;\\n          animation: pulse 1s linear infinite both;\\n}\\n.bt-color {\\n  background-color: #44A4B4;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    -webkit-animation-name: dissolve;\\n            animation-name: dissolve;\\n  }\\n}\\n.float { \\n\\t-webkit-animation-name: floating; \\n\\t        animation-name: floating;\\n  -webkit-animation-duration: 3s;\\n          animation-duration: 3s;\\n  -webkit-animation-iteration-count: infinite;\\n          animation-iteration-count: infinite;\\n  -webkit-animation-timing-function: ease-in-out;\\n          animation-timing-function: ease-in-out;\\n}\\n@-webkit-keyframes floating {\\n  0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\\n  50%  { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\\n  100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \\n}\\n@keyframes floating {\\n  0% { -webkit-transform: translate(0,  0px); transform: translate(0,  0px); }\\n  50%  { -webkit-transform: translate(0, 10px); transform: translate(0, 10px); }\\n  100%   { -webkit-transform: translate(0, -0px); transform: translate(0, -0px); }    \\n}\\n.glass {\\n  background: rgba( 55, 72, 95, 0.30 );\\n  -webkit-box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 1.5px );\\n  -webkit-backdrop-filter: blur( 1.5px );\\n  border-radius: 12px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@-webkit-keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n.x-rotate-near-shore {    \\n  -webkit-animation: spinHorizontalnear 1.5s forwards;\\n  animation: spinHorizontalnear 1.5s forwards;\\n}\\n\\n@-webkit-keyframes spinHorizontalnear {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n@keyframes spinHorizontalnear {\\n  0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }\\n  100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }\\n}\\n\\n.far-shore-boat-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n/* .far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n} */\\n\\n.rotate {\\n  -webkit-transform: rotateY(180deg);\\n          transform: rotateY(180deg);\\n  padding-left: 4rem;\\n}\\n\\n.z-front {\\n  z-index: 2;\\n}\\n.z-front-3 {\\n  z-index: 3;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,mBAAmB;EACnB,+DAAmD;AACrD;;AAEA;;EAEE,UAAU;EACV,SAAS;EACT;AACF;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,8BAAsB;UAAtB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,yDAAuD;EACvD,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;AACA;;;;EAIE,eAAe;EACf,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AATA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,oCAA4B;YAA5B,4BAA4B;EAC9B;AACF;AACA;EACE,4CAAoC;UAApC,oCAAoC;AACtC;;AAEA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;;AATA;;EAEE;IACE,iCAAyB;YAAzB,yBAAyB;EAC3B;;EAEA;IACE,qCAA6B;YAA7B,6BAA6B;EAC/B;AACF;AACA;EACE,yCAAiC;UAAjC,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,gDAAwC;UAAxC,wCAAwC;AAC1C;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE;IACE,gCAAwB;YAAxB,wBAAwB;EAC1B;AACF;AACA;CACC,gCAAwB;SAAxB,wBAAwB;EACvB,8BAAsB;UAAtB,sBAAsB;EACtB,2CAAmC;UAAnC,mCAAmC;EACnC,8CAAsC;UAAtC,sCAAsC;AACxC;AACA;EACE,KAAK,qCAA6B,EAA7B,6BAA6B,EAAE;EACpC,OAAO,qCAA6B,EAA7B,6BAA6B,EAAE;EACtC,SAAS,qCAA6B,EAA7B,6BAA6B,EAAE;AAC1C;AAJA;EACE,KAAK,qCAA6B,EAA7B,6BAA6B,EAAE;EACpC,OAAO,qCAA6B,EAA7B,6BAA6B,EAAE;EACtC,SAAS,qCAA6B,EAA7B,6BAA6B,EAAE;AAC1C;AACA;EACE,oCAAoC;EACpC,0DAAkD;UAAlD,kDAAkD;EAClD,8BAA8B;EAC9B,sCAAsC;EACtC,mBAAmB;EACnB,6CAA6C;AAC/C;AACA;EACE,+CAA+C;AACjD;AACA;EAGE,+CAA+C;EAC/C,uCAAuC;AACzC;;AAEA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAHA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;AACA;EAGE,mDAAmD;EACnD,2CAA2C;AAC7C;;AAEA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAHA;EACE,KAAK,gCAAwB,EAAxB,wBAAwB,EAAE;EAC/B,OAAO,kCAA0B,EAA1B,0BAA0B,EAAE;AACrC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,QAAQ;EACR,MAAM;EACN,kBAAkB;AACpB;AACA;;;GAGG;;AAEH;EACE,kCAA0B;UAA1B,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ\",\"sourcesContent\":[\"@font-face {\\n  font-family: Rustic;\\n  src: url(\\\"../public/Rustic.otf\\\") format(\\\"opentype\\\");\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Rustic', sans-serif\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.main-height {\\n  height: 100vh;\\n}\\n.landscape {\\n  background-image: url('../public/images/landscape.jpg');\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  background-position: bottom;\\n  background-attachment: fixed;\\n}\\n#boat,\\n#corn,\\n#chicken,\\n#fox {\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n.farmer-position {\\n  top: 1.5rem;\\n}\\n@keyframes boat-movement\\n{\\n  from {\\n    transform: translate(0,0);\\n  }\\n\\n  to {\\n    transform: translate(35vw,0);\\n  }\\n}\\n.boat-animation {\\n  animation: boat-movement 2s forwards;\\n}\\n\\n@keyframes slide-left \\n{\\n  from {\\n    transform: translate(0,0);\\n  }\\n\\n  to {\\n    transform: translate(-14vw,0);\\n  }\\n}\\n.move-to-near-shore {\\n  animation: slide-left 2s forwards;\\n}\\n\\n#tooltip {\\n  display: none;\\n}\\n\\n#tooltip[data-show] {\\n  display: block;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n.dead {\\n  display: none;\\n}\\n.animation {\\n  animation: pulse 1s linear infinite both;\\n}\\n.bt-color {\\n  background-color: #44A4B4;\\n  color: #F5E2DC;\\n  border: none;\\n  border-radius: 5px;\\n}\\n@media (prefers-reduced-motion) {\\n  .animation {\\n    animation-name: dissolve;\\n  }\\n}\\n.float { \\n\\tanimation-name: floating;\\n  animation-duration: 3s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n@keyframes floating {\\n  0% { transform: translate(0,  0px); }\\n  50%  { transform: translate(0, 10px); }\\n  100%   { transform: translate(0, -0px); }    \\n}\\n.glass {\\n  background: rgba( 55, 72, 95, 0.30 );\\n  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\\n  backdrop-filter: blur( 1.5px );\\n  -webkit-backdrop-filter: blur( 1.5px );\\n  border-radius: 12px;\\n  border: 1px solid rgba( 255, 255, 255, 0.18 );\\n}\\n.shadow {\\n  filter: drop-shadow(0 0 0.1rem rgb(46, 46, 46));\\n}\\n.x-rotate {\\n  -moz-animation: spinHorizontal 1.5s forwards;\\n  -o-animation: spinHorizontal 1.5s forwards;    \\n  -webkit-animation: spinHorizontal 1.5s forwards;\\n  animation: spinHorizontal 1.5s forwards;\\n}\\n\\n@keyframes spinHorizontal {\\n  0% { transform: rotateY(0deg); }\\n  100% { transform: rotateY(180deg); }\\n}\\n.x-rotate-near-shore {\\n  -moz-animation: spinHorizontalnear 1.5s forwards;\\n  -o-animation: spinHorizontalnear 1.5s forwards;    \\n  -webkit-animation: spinHorizontalnear 1.5s forwards;\\n  animation: spinHorizontalnear 1.5s forwards;\\n}\\n\\n@keyframes spinHorizontalnear {\\n  0% { transform: rotateY(0deg); }\\n  100% { transform: rotateY(180deg); }\\n}\\n\\n.far-shore-boat-position {\\n  bottom: 460px;\\n  left: 559px;\\n  right: 0;\\n  top: 0;\\n  position: relative;\\n}\\n/* .far-shore-chicken-position {\\n  left: 1400px;\\n  position: relative;\\n} */\\n\\n.rotate {\\n  transform: rotateY(180deg);\\n  padding-left: 4rem;\\n}\\n\\n.z-front {\\n  z-index: 2;\\n}\\n.z-front-3 {\\n  z-index: 3;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzP2ZkMGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQytGO0FBQ087QUFDckM7QUFDVTtBQUMzRSw4QkFBOEIseUZBQTJCO0FBQ3pELHlDQUF5Qyw0RkFBK0IsQ0FBQyx1REFBNkI7QUFDdEcseUNBQXlDLDRGQUErQixDQUFDLGlFQUE2QjtBQUN0RztBQUNBLHNEQUFzRCx3QkFBd0IsOEVBQThFLEdBQUcsaUJBQWlCLGVBQWUsY0FBYyx3Q0FBd0MsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTyxtQ0FBbUMsbUNBQW1DLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLGNBQWMsc0VBQXNFLGlDQUFpQywyQkFBMkIsZ0NBQWdDLGlDQUFpQyxHQUFHLG1DQUFtQyxvQkFBb0IsZUFBZSxHQUFHLG9CQUFvQixnQkFBZ0IsR0FBRyxxQ0FBcUMsVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssVUFBVSwyQ0FBMkMsMkNBQTJDLEtBQUssR0FBRyw2QkFBNkIsVUFBVSx3Q0FBd0Msd0NBQXdDLEtBQUssVUFBVSwyQ0FBMkMsMkNBQTJDLEtBQUssR0FBRyxtQkFBbUIsaURBQWlELGlEQUFpRCxHQUFHLHFDQUFxQyxVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDRDQUE0Qyw0Q0FBNEMsS0FBSyxHQUFHLDZCQUE2QixVQUFVLHdDQUF3Qyx3Q0FBd0MsS0FBSyxVQUFVLDRDQUE0Qyw0Q0FBNEMsS0FBSyxHQUFHLHVCQUF1Qiw4Q0FBOEMsOENBQThDLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxTQUFTLGtCQUFrQixHQUFHLGNBQWMscURBQXFELHFEQUFxRCxHQUFHLGFBQWEsOEJBQThCLG1CQUFtQixpQkFBaUIsdUJBQXVCLEdBQUcsbUNBQW1DLGdCQUFnQix1Q0FBdUMsdUNBQXVDLEtBQUssR0FBRyxVQUFVLHNDQUFzQyxz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b21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9wdWJsaWMvUnVzdGljLm90ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL2xhbmRzY2FwZS5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUnVzdGljO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1J1c3RpYycsIHNhbnMtc2VyaWZcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYWluLWhlaWdodCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4ubGFuZHNjYXBlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcbiNib2F0LFxcbiNjb3JuLFxcbiNjaGlja2VuLFxcbiNmb3gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmZhcm1lci1wb3NpdGlvbiB7XFxuICB0b3A6IDEuNXJlbTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvYXQtbW92ZW1lbnRcXG57XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGJvYXQtbW92ZW1lbnRcXG57XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgfVxcbn1cXG4uYm9hdC1hbmltYXRpb24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGJvYXQtbW92ZW1lbnQgMnMgZm9yd2FyZHM7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYm9hdC1tb3ZlbWVudCAycyBmb3J3YXJkcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWxlZnQgXFxue1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNHZ3LDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNHZ3LDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQgXFxue1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNHZ3LDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNHZ3LDApO1xcbiAgfVxcbn1cXG4ubW92ZS10by1uZWFyLXNob3JlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDJzIGZvcndhcmRzO1xcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlLWxlZnQgMnMgZm9yd2FyZHM7XFxufVxcblxcbiN0b29sdGlwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b29sdGlwW2RhdGEtc2hvd10ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uZGVhZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW5pbWF0aW9uIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAxcyBsaW5lYXIgaW5maW5pdGUgYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBsaW5lYXIgaW5maW5pdGUgYm90aDtcXG59XFxuLmJ0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NEE0QjQ7XFxuICBjb2xvcjogI0Y1RTJEQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSB7XFxuICAuYW5pbWF0aW9uIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZGlzc29sdmU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGRpc3NvbHZlO1xcbiAgfVxcbn1cXG4uZmxvYXQgeyBcXG5cXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZzsgXFxuXFx0ICAgICAgICBhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxvYXRpbmcge1xcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgfVxcbiAgNTAlICB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpOyB9XFxuICAxMDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMHB4KTsgfSAgICBcXG59XFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgIDBweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XFxuICA1MCUgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7IH1cXG4gIDEwMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB9ICAgIFxcbn1cXG4uZ2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSggNTUsIDcyLCA5NSwgMC4zMCApO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSggMzEsIDM4LCAxMzUsIDAuMzcgKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEuNXB4ICk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMS41cHggKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxufVxcbi5zaGFkb3cge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4xcmVtIHJnYig0NiwgNDYsIDQ2KSk7XFxufVxcbi54LXJvdGF0ZSB7ICAgIFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IHNwaW5Ib3Jpem9udGFsIDEuNXMgZm9yd2FyZHM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluSG9yaXpvbnRhbCB7XFxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IH1cXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW5Ib3Jpem9udGFsIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcbi54LXJvdGF0ZS1uZWFyLXNob3JlIHsgICAgXFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWxuZWFyIDEuNXMgZm9yd2FyZHM7XFxuICBhbmltYXRpb246IHNwaW5Ib3Jpem9udGFsbmVhciAxLjVzIGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbkhvcml6b250YWxuZWFyIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgc3Bpbkhvcml6b250YWxuZWFyIHtcXG4gIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcblxcbi5mYXItc2hvcmUtYm9hdC1wb3NpdGlvbiB7XFxuICBib3R0b206IDQ2MHB4O1xcbiAgbGVmdDogNTU5cHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLyogLmZhci1zaG9yZS1jaGlja2VuLXBvc2l0aW9uIHtcXG4gIGxlZnQ6IDE0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59ICovXFxuXFxuLnJvdGF0ZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gIHBhZGRpbmctbGVmdDogNHJlbTtcXG59XFxuXFxuLnotZnJvbnQge1xcbiAgei1pbmRleDogMjtcXG59XFxuLnotZnJvbnQtMyB7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLCtEQUFtRDtBQUNyRDs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNUO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseURBQXVEO0VBQ3ZELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBOzs7O0VBSUUsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7O0VBRUU7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5QjtBQUNGO0FBVEE7O0VBRUU7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QjtFQUM5QjtBQUNGO0FBQ0E7RUFDRSw0Q0FBb0M7VUFBcEMsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHFDQUE2QjtZQUE3Qiw2QkFBNkI7RUFDL0I7QUFDRjs7QUFUQTs7RUFFRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0VBQy9CO0FBQ0Y7QUFDQTtFQUNFLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdEQUF3QztVQUF4Qyx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0FBQ0Y7QUFDQTtDQUNDLGdDQUF3QjtTQUF4Qix3QkFBd0I7RUFDdkIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLEtBQUsscUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3BDLE9BQU8scUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0VBQ3RDLFNBQVMscUNBQTZCLEVBQTdCLDZCQUE2QixFQUFFO0FBQzFDO0FBSkE7RUFDRSxLQUFLLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUNwQyxPQUFPLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtFQUN0QyxTQUFTLHFDQUE2QixFQUE3Qiw2QkFBNkIsRUFBRTtBQUMxQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBEQUFrRDtVQUFsRCxrREFBa0Q7RUFDbEQsOEJBQThCO0VBQzlCLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUdFLCtDQUErQztFQUMvQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxLQUFLLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTtFQUMvQixPQUFPLGtDQUEwQixFQUExQiwwQkFBMEIsRUFBRTtBQUNyQzs7QUFIQTtFQUNFLEtBQUssZ0NBQXdCLEVBQXhCLHdCQUF3QixFQUFFO0VBQy9CLE9BQU8sa0NBQTBCLEVBQTFCLDBCQUEwQixFQUFFO0FBQ3JDO0FBQ0E7RUFHRSxtREFBbUQ7RUFDbkQsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsS0FBSyxnQ0FBd0IsRUFBeEIsd0JBQXdCLEVBQUU7RUFDL0IsT0FBTyxrQ0FBMEIsRUFBMUIsMEJBQTBCLEVBQUU7QUFDckM7O0FBSEE7RUFDRSxLQUFLLGdDQUF3QixFQUF4Qix3QkFBd0IsRUFBRTtFQUMvQixPQUFPLGtDQUEwQixFQUExQiwwQkFBMEIsRUFBRTtBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsUUFBUTtFQUNSLE1BQU07RUFDTixrQkFBa0I7QUFDcEI7QUFDQTs7O0dBR0c7O0FBRUg7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJ1c3RpYztcXG4gIHNyYzogdXJsKFxcXCIuLi9wdWJsaWMvUnVzdGljLm90ZlxcXCIpIGZvcm1hdChcXFwib3BlbnR5cGVcXFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1J1c3RpYycsIHNhbnMtc2VyaWZcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpbi1oZWlnaHQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmxhbmRzY2FwZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9pbWFnZXMvbGFuZHNjYXBlLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG4jYm9hdCxcXG4jY29ybixcXG4jY2hpY2tlbixcXG4jZm94IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5mYXJtZXItcG9zaXRpb24ge1xcbiAgdG9wOiAxLjVyZW07XFxufVxcbkBrZXlmcmFtZXMgYm9hdC1tb3ZlbWVudFxcbntcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzNXZ3LDApO1xcbiAgfVxcbn1cXG4uYm9hdC1hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBib2F0LW1vdmVtZW50IDJzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQgXFxue1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNHZ3LDApO1xcbiAgfVxcbn1cXG4ubW92ZS10by1uZWFyLXNob3JlIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAycyBmb3J3YXJkcztcXG59XFxuXFxuI3Rvb2x0aXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rvb2x0aXBbZGF0YS1zaG93XSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5kZWFkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSAxcyBsaW5lYXIgaW5maW5pdGUgYm90aDtcXG59XFxuLmJ0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NEE0QjQ7XFxuICBjb2xvcjogI0Y1RTJEQztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSB7XFxuICAuYW5pbWF0aW9uIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGRpc3NvbHZlO1xcbiAgfVxcbn1cXG4uZmxvYXQgeyBcXG5cXHRhbmltYXRpb24tbmFtZTogZmxvYXRpbmc7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuQGtleWZyYW1lcyBmbG9hdGluZyB7XFxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XFxuICA1MCUgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7IH1cXG4gIDEwMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB9ICAgIFxcbn1cXG4uZ2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSggNTUsIDcyLCA5NSwgMC4zMCApO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDEuNXB4ICk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMS41cHggKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XFxufVxcbi5zaGFkb3cge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4xcmVtIHJnYig0NiwgNDYsIDQ2KSk7XFxufVxcbi54LXJvdGF0ZSB7XFxuICAtbW96LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMS41cyBmb3J3YXJkcztcXG4gIC1vLWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMS41cyBmb3J3YXJkczsgICAgXFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMS41cyBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbjogc3Bpbkhvcml6b250YWwgMS41cyBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluSG9yaXpvbnRhbCB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxufVxcbi54LXJvdGF0ZS1uZWFyLXNob3JlIHtcXG4gIC1tb3otYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbG5lYXIgMS41cyBmb3J3YXJkcztcXG4gIC1vLWFuaW1hdGlvbjogc3Bpbkhvcml6b250YWxuZWFyIDEuNXMgZm9yd2FyZHM7ICAgIFxcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Ib3Jpem9udGFsbmVhciAxLjVzIGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uOiBzcGluSG9yaXpvbnRhbG5lYXIgMS41cyBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluSG9yaXpvbnRhbG5lYXIge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbn1cXG5cXG4uZmFyLXNob3JlLWJvYXQtcG9zaXRpb24ge1xcbiAgYm90dG9tOiA0NjBweDtcXG4gIGxlZnQ6IDU1OXB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi8qIC5mYXItc2hvcmUtY2hpY2tlbi1wb3NpdGlvbiB7XFxuICBsZWZ0OiAxNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcblxcbi5yb3RhdGUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICBwYWRkaW5nLWxlZnQ6IDRyZW07XFxufVxcblxcbi56LWZyb250IHtcXG4gIHotaW5kZXg6IDI7XFxufVxcbi56LWZyb250LTMge1xcbiAgei1pbmRleDogMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/globals.css\n");

/***/ })

});