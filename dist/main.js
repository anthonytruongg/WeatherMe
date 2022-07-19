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

/***/ "./src/fetchWeather.js":
/*!*****************************!*\
  !*** ./src/fetchWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// function makeRequest(location) {\r\n//     return new Promise((resolve, reject) => {\r\n//         console.log(`Fetching Weather Data from ${location}`)\r\n//         // fetch('https://api.openweathermap.org/data/2.5/weather?q=riverside&appid=1628dc811b0923126ac52c94f0272b97')\r\n//         if(location !== null) {\r\n//             resolve('Successfully fetched data')\r\n//             fetch('https://api.openweathermap.org/data/2.5/weather?q=riverside&appid=1628dc811b0923126ac52c94f0272b97')\r\n\r\n//         } else {\r\n//             reject('Location not found')\r\n//         }\r\n//     })\r\n// }\r\nfunction convertWeather (degrees) {\r\n    return (degrees - 273.15) * 1.8 + 32\r\n}\r\n\r\nasync function getWeather () {\r\n    try {\r\n    // const response = await makeRequest('Riverside')\r\n    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=eastvale&appid=1628dc811b0923126ac52c94f0272b97')\r\n    const weatherData = await response.json()\r\n    console.log(weatherData)\r\n    console.log(weatherData.main.temp)\r\n    const temp = convertWeather(weatherData.main.temp)\r\n    console.log('temperature in F',temp)\r\n    } catch {\r\n        console.log('Error: Unable to fetch weather data')\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://weatherme/./src/fetchWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeather */ \"./src/fetchWeather.js\");\n// function makeRequest(location) {\r\n//     return new Promise((resolve, reject) => {\r\n//         // This promise executes first\r\n//         console.log(`Making request to ${location}`)\r\n//         if(location === 'Google') {\r\n//             resolve('Google says hi')\r\n//         } else {\r\n//             reject('We can only talk to Google')\r\n//         }\r\n//     })\r\n// }\r\n\r\n// function processRequest(response) {\r\n//     return new Promise((resolve, reject) => {\r\n//         console.log(`Processing response from ${response}`)\r\n//         resolve(`Extra information + ${response}`)\r\n//     })\r\n// }\r\n\r\n\r\n// async function doWork() {\r\n//     try{\r\n//         const response = await makeRequest('Facebook')\r\n//         console.log('Response Received')\r\n//         const processedResponse = await processRequest(response)\r\n//         console.log(processedResponse)\r\n//     } catch (err) {\r\n//         console.log(err)\r\n//     }\r\n// }\r\n\r\n// doWork()\r\n\r\n(0,_fetchWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); \n\n//# sourceURL=webpack://weatherme/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;