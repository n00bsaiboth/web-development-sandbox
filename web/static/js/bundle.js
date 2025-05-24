/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _modules_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigations */ \"./src/js/modules/navigations.js\");\n/* harmony import */ var _modules_back_to_top_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/back-to-top.js */ \"./src/js/modules/back-to-top.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_navigations__WEBPACK_IMPORTED_MODULE_1__.toggleMenu)();\n  (0,_modules_back_to_top_js__WEBPACK_IMPORTED_MODULE_2__.backToTop)();\n});\nvar helloWebpack = function helloWebpack(name) {\n  console.log(\"Hello from \".concat(name, \"!\"));\n};\nhelloWebpack('Webpack and Babel');\n\n//# sourceURL=webpack://web-development-sandbox/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/back-to-top.js":
/*!***************************************!*\
  !*** ./src/js/modules/back-to-top.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backToTop: () => (/* binding */ backToTop)\n/* harmony export */ });\n// modules/backToTop.js\n\n\nvar backToTop = function backToTop() {\n  var button = document.getElementById(\"back-to-top-button\");\n  if (!button) return;\n\n  // Show/hide button on scroll\n  window.addEventListener(\"scroll\", function () {\n    var scrollY = window.scrollY || document.documentElement.scrollTop;\n    button.style.display = scrollY > 20 ? \"block\" : \"none\";\n  });\n\n  // Scroll to top on click\n  button.addEventListener(\"click\", function () {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n};\n\n\n//# sourceURL=webpack://web-development-sandbox/./src/js/modules/back-to-top.js?");

/***/ }),

/***/ "./src/js/modules/navigations.js":
/*!***************************************!*\
  !*** ./src/js/modules/navigations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleMenu: () => (/* binding */ toggleMenu)\n/* harmony export */ });\n\n\nvar toggleMenu = function toggleMenu() {\n  var btn = document.querySelector('[data-collapse-toggle]');\n  var menu = document.getElementById(btn.getAttribute('data-collapse-toggle'));\n  btn.addEventListener('click', function () {\n    menu.classList.toggle('hidden');\n    btn.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');\n  });\n};\n\n\n//# sourceURL=webpack://web-development-sandbox/./src/js/modules/navigations.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web-development-sandbox/./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;