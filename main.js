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

/***/ "./src/degrees-to-cardinal.js":
/*!************************************!*\
  !*** ./src/degrees-to-cardinal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction degreesToCardinal(degrees) {\n  if ((degrees < 0) || (degrees > 360)) {\n    throw new Error('degrees must be a numerical value between 0 and 360');\n  }\n\n  if ((degrees > 337.5) || (degrees <= 22.5)) {\n    return 'N';\n  }\n\n  if ((degrees > 22.5) && (degrees <= 67.5)) {\n    return 'NE';\n  }\n\n  if ((degrees > 67.5) && (degrees <= 112.5)) {\n    return 'E';\n  }\n\n  if ((degrees > 112.5) && (degrees <= 157.5)) {\n    return 'SE';\n  }\n\n  if ((degrees > 157.5) && (degrees <= 202.5)) {\n    return 'S';\n  }\n\n  if ((degrees > 202.5) && (degrees <= 247.5)) {\n    return 'SW';\n  }\n\n  if ((degrees > 247.5) && (degrees <= 292.5)) {\n    return 'W';\n  }\n\n  if ((degrees > 292.5) && (degrees <= 337.5)) {\n    return 'NW';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (degreesToCardinal);\n\n//# sourceURL=webpack://weather-app/./src/degrees-to-cardinal.js?");

/***/ }),

/***/ "./src/display-error.js":
/*!******************************!*\
  !*** ./src/display-error.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayError(errorMsg) {\n  const weatherContainer = document.querySelector('#weather');\n  const errorP = document.createElement('p');\n\n  // clear existing content from weatherContainer\n  while (weatherContainer.childNodes.length > 0) {\n    weatherContainer.childNodes[0].remove();\n  }\n\n  errorP.innerHTML = errorMsg;\n  weatherContainer.appendChild(errorP);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayError);\n\n//# sourceURL=webpack://weather-app/./src/display-error.js?");

/***/ }),

/***/ "./src/display-weather.js":
/*!********************************!*\
  !*** ./src/display-weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _degrees_to_cardinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./degrees-to-cardinal.js */ \"./src/degrees-to-cardinal.js\");\n\n\nfunction displayWeather(weatherData) {\n  const weatherContainer = document.querySelector('#weather');\n  let nameValue = document.createElement('p');\n  let countryValue = document.createElement('p');\n  let descValue = document.createElement('p');\n  let tempValue = document.createElement('p');\n  let icon = document.createElement('img');\n  let feelsLikeLabel = document.createElement('p');\n  let feelsLikeValue = document.createElement('p');\n  let tempMaxLabel = document.createElement('p');\n  let tempMaxValue = document.createElement('p');\n  let tempMinLabel = document.createElement('p');\n  let tempMinValue = document.createElement('p');\n  let windLabel = document.createElement('p');\n  let windSpeedValue = document.createElement('p');\n  let windDirectionValue = document.createElement('p');\n  let tempUnits = document.createElement('p');\n  let windSpeedUnits = document.createElement('p');\n\n  // clear existing content from weatherContainer\n  while (weatherContainer.childNodes.length > 0) {\n    weatherContainer.childNodes[0].remove();\n  }\n\n  nameValue.innerHTML = weatherData.name;\n  countryValue.innerHTML = weatherData.country;\n  descValue.innerHTML = weatherData.desc;\n  tempValue.innerHTML = weatherData.temp;\n  tempValue.classList.add('temp-value');\n\n  icon.src = 'http://openweathermap.org/img/w/' + weatherData['icon'] + '.png';\n  icon.alt = 'weather icon';\n  \n  feelsLikeLabel.innerHTML = 'Feels Like: ';\n  feelsLikeValue.innerHTML = weatherData.feelsLike;\n  feelsLikeValue.classList.add('temp-value');\n\n  tempMaxLabel.innerHTML = 'High: ';\n  tempMaxValue.innerHTML = weatherData.tempMax;\n  tempMaxValue.classList.add('temp-value');\n\n  tempMinLabel.innerHTML = 'Low: ';\n  tempMinValue.innerHTML = weatherData.tempMin;\n  tempMinValue.classList.add('temp-value');\n\n  windLabel.innerHTML = 'Wind: ';\n  windSpeedValue.innerHTML = weatherData.windSpeed;\n  windDirectionValue.innerHTML = (0,_degrees_to_cardinal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData.windDir);\n\n  tempUnits.innerHTML = 'F';\n  tempUnits.classList.add('temp-unit');\n  windSpeedUnits.innerHTML = 'mph';\n\n  weatherContainer.appendChild(nameValue);\n  weatherContainer.appendChild(countryValue);\n  weatherContainer.appendChild(descValue);\n  weatherContainer.appendChild(tempValue);\n  weatherContainer.appendChild(tempUnits);\n  weatherContainer.appendChild(icon);\n  weatherContainer.appendChild(feelsLikeLabel);\n  weatherContainer.appendChild(feelsLikeValue);\n  weatherContainer.appendChild(tempUnits.cloneNode(true));\n  weatherContainer.appendChild(tempMaxLabel);\n  weatherContainer.appendChild(tempMaxValue);\n  weatherContainer.appendChild(tempUnits.cloneNode(true));\n  weatherContainer.appendChild(tempMinLabel);\n  weatherContainer.appendChild(tempMinValue);\n  weatherContainer.appendChild(tempUnits.cloneNode(true));\n  weatherContainer.appendChild(windLabel);\n  weatherContainer.appendChild(windSpeedValue);\n  weatherContainer.appendChild(windSpeedUnits);\n  weatherContainer.appendChild(windDirectionValue);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/display-weather.js?");

/***/ }),

/***/ "./src/get-weather.js":
/*!****************************!*\
  !*** ./src/get-weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getWeather(city) {\n  const url = \"http://127.0.0.1:3000/api/v1/weather\";\n  const queryParam = \"?q=\" + city + \"&units=imperial\";\n\n  return fetch(url + queryParam, { mode: 'cors' })\n    .then( (response) => { \n      return response.json();\n    })\n    .then( (json) => {\n      try {\n        const data = {\n          name: json['name'],\n          country: json['sys']['country'],\n          temp: json['main']['temp'],\n          tempMin: json['main']['temp_min'],\n          tempMax: json['main']['temp_max'],\n          feelsLike: json['main']['feels_like'],\n          desc: json['weather']['0']['description'],\n          icon: json['weather']['0']['icon'],\n          windSpeed: json['wind']['speed'],\n          windDir: json['wind']['deg']\n        }\n        return data;\n      }\n      catch {\n        throw new Error('no weather data found');\n      }\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://weather-app/./src/get-weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-weather.js */ \"./src/get-weather.js\");\n/* harmony import */ var _display_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-weather.js */ \"./src/display-weather.js\");\n/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-error.js */ \"./src/display-error.js\");\n\n\n\n\nconst form = document.querySelector('form');\nconst celsiusButton = document.querySelector('#celsius');\nconst fahrenheitButton = document.querySelector('#fahrenheit');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n\n  const formData = new FormData(event.target);\n  const cityName = formData.get('city');\n\n  (0,_get_weather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cityName)\n    .then( (weatherData) => {\n      (0,_display_weather_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData);\n    })\n    .catch( (error) => {\n      (0,_display_error_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(error.message);\n    })\n});\n\ncelsiusButton.addEventListener('click', () => {\n  const tempValueNodes = document.querySelectorAll('.temp-value');\n  const tempUnitNodes = document.querySelectorAll('.temp-unit');\n  \n  if (fahrenheitButton.classList.contains('active')) {\n    // convert values to celsius\n    tempValueNodes.forEach( (node) => {\n      node.innerHTML = ((parseFloat(node.innerHTML) - 32 ) / 1.8).toFixed(2);\n    });\n\n    // change units to C\n    tempUnitNodes.forEach( (node) => {\n      node.innerHTML = 'C';\n    });\n\n    // transfer '.active' from the fahrenheit button to the celsius button\n    fahrenheitButton.classList.toggle('active');\n    celsiusButton.classList.toggle('active');\n  }\n});\n\nfahrenheitButton.addEventListener('click', () => {\n  const tempValueNodes = document.querySelectorAll('.temp-value');\n  const tempUnitNodes = document.querySelectorAll('.temp-unit');\n  \n  if (celsiusButton.classList.contains('active')) {\n    // convert values to fahrenheit\n    tempValueNodes.forEach( (node) => {\n      node.innerHTML = ((parseFloat(node.innerHTML) * (9/5)) + 32).toFixed(2);\n    });\n\n    // change units to F\n    tempUnitNodes.forEach( (node) => {\n      node.innerHTML = 'F';\n    });\n\n    // transfer '.active' from the celsius button to the fahrenheit button\n    fahrenheitButton.classList.toggle('active');\n    celsiusButton.classList.toggle('active');\n  }\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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