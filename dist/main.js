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

/***/ "./src/display-weather.js":
/*!********************************!*\
  !*** ./src/display-weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherContainer = document.querySelector('#weather');\n\nfunction displayWeather(weatherData) {\n  let name = document.createElement('p');\n  let country = document.createElement('p')\n  let desc = document.createElement('p');\n  let temp = document.createElement('p');\n  let feelsLike = document.createElement('p');\n  let tempMax = document.createElement('p');\n  let tempMin = document.createElement('p');\n  let windSpeed = document.createElement('p');\n  let windDirection = document.createElement('p');\n\n  name.innerHTML = weatherData.name;\n  country.innerHTML = weatherData.country;\n  desc.innerHTML = weatherData.desc;\n  temp.innerHTML = weatherData.temp;\n  feelsLike.innerHTML = weatherData.feelsLike;\n  tempMax.innerHTML = weatherData.tempMax;\n  tempMin.innerHTML = weatherData.tempMin;\n  windSpeed.innerHTML = weatherData.windSpeed;\n  windDirection.innerHTML = weatherData.windDir;\n\n  weatherContainer.appendChild(name);\n  weatherContainer.appendChild(country);\n  weatherContainer.appendChild(desc);\n  weatherContainer.appendChild(temp);\n  weatherContainer.appendChild(feelsLike);\n  weatherContainer.appendChild(tempMax);\n  weatherContainer.appendChild(tempMin);\n  weatherContainer.appendChild(windSpeed);\n  weatherContainer.appendChild(windDirection);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);\n\n//# sourceURL=webpack://weather-app/./src/display-weather.js?");

/***/ }),

/***/ "./src/get-weather.js":
/*!****************************!*\
  !*** ./src/get-weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getWeather(city) {\n  const url = \"http://127.0.0.1:3000/api/v1/weather\";\n  const queryParam = \"?q=\" + city + \"&units=imperial\";\n\n  return fetch(url + queryParam, { mode: 'cors' })\n    .then( (response) => { \n      return response.json();\n    })\n    .then( (json) => {\n      const data = {\n        name: json['name'],\n        country: json['sys']['country'],\n        temp: json['main']['temp'],\n        tempMin: json['main']['temp_min'],\n        tempMax: json['main']['temp_max'],\n        feelsLike: json['main']['feels_like'],\n        desc: json['weather']['0']['description'],\n        icon: json['weather']['0']['icon'],\n        windSpeed: json['wind']['speed'],\n        windDir: json['wind']['deg']\n      }\n\n      return data;\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://weather-app/./src/get-weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-weather.js */ \"./src/get-weather.js\");\n/* harmony import */ var _display_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-weather.js */ \"./src/display-weather.js\");\n\n\n\nconst form = document.querySelector('form');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n\n  const formData = new FormData(event.target);\n  const cityName = formData.get('city');\n\n  (0,_get_weather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cityName)\n    .then( (weatherData) => {\n      console.log(weatherData);\n      (0,_display_weather_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData);\n    })\n    .catch( (error) => {\n      console.log(error);\n    })\n});\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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