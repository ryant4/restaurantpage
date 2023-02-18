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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMaker)\n/* harmony export */ });\n/* harmony import */ var _images_egg_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/egg.jpeg */ \"./src/images/egg.jpeg\");\n/* harmony import */ var _images_avocado_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/avocado.jpg */ \"./src/images/avocado.jpg\");\n/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/burger.jpg */ \"./src/images/burger.jpg\");\n/* harmony import */ var _images_salad_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/salad.jpeg */ \"./src/images/salad.jpeg\");\n\n\n\n\n\nconst pageContent = document.getElementById('content');\n\nfunction menuMaker() {\n    const pageContent = document.getElementById('content');\n    \n    function createMenuCard(title, content, picture) {\n        const newCard = document.createElement('div');\n        newCard.setAttribute('class', 'content-card');\n        const newCardTitle = document.createElement(\"h2\");\n        newCardTitle.innerHTML = title;\n        newCard.appendChild(newCardTitle);\n        const newCardText = document.createElement('p');\n        newCardText.innerHTML = content;\n        newCard.appendChild(newCardText);\n        const newCardImage = document.createElement('img');\n        newCardImage.src = picture;\n        newCard.appendChild(newCardImage);\n        pageContent.appendChild(newCard);\n    }\n\n    createMenuCard(\"Avocado\", \"Just one single slice of avocado with sea salt\", _images_avocado_jpg__WEBPACK_IMPORTED_MODULE_1__);\n    createMenuCard(\"Egg\", \"One egg, scrambled or fried\", _images_egg_jpeg__WEBPACK_IMPORTED_MODULE_0__);\n    createMenuCard(\"Burger\", \"Grass-fed angus beef from Upstate New York\", _images_burger_jpg__WEBPACK_IMPORTED_MODULE_2__);\n    createMenuCard(\"Salad\", \"House salad with lemon dressing\", _images_salad_jpeg__WEBPACK_IMPORTED_MODULE_3__);\n};\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/images/avocado.jpg":
/*!********************************!*\
  !*** ./src/images/avocado.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce50637255bb4e221cef.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/avocado.jpg?");

/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6806090fab2895ffe330.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/burger.jpg?");

/***/ }),

/***/ "./src/images/egg.jpeg":
/*!*****************************!*\
  !*** ./src/images/egg.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"732e25b20e789c6e7243.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/egg.jpeg?");

/***/ }),

/***/ "./src/images/salad.jpeg":
/*!*******************************!*\
  !*** ./src/images/salad.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e079842a1b1ba5b2a77c.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/salad.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;