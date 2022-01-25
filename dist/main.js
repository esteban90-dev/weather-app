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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction degreesToCardinal(degrees) {\n  if ((degrees < 0) || (degrees > 360)) {\n    throw new Error('degrees must be a numerical value between 0 and 360');\n  }\n\n  if ((degrees > 337.5) || (degrees <= 22.5)) {\n    return 'N';\n  }\n\n  if ((degrees > 22.5) && (degrees <= 67.5)) {\n    return 'NE';\n  }\n\n  if ((degrees > 67.5) && (degrees <= 112.5)) {\n    return 'E';\n  }\n\n  if ((degrees > 112.5) && (degrees <= 157.5)) {\n    return 'SE';\n  }\n\n  if ((degrees > 157.5) && (degrees <= 202.5)) {\n    return 'S';\n  }\n\n  if ((degrees > 202.5) && (degrees <= 247.5)) {\n    return 'SW';\n  }\n\n  if ((degrees > 247.5) && (degrees <= 292.5)) {\n    return 'W';\n  }\n\n  if ((degrees > 292.5) && (degrees <= 337.5)) {\n    return 'NW';\n  }\n\n  return false;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (degreesToCardinal);\n\n\n//# sourceURL=webpack://weather-app/./src/degrees-to-cardinal.js?");

/***/ }),

/***/ "./src/display-error.js":
/*!******************************!*\
  !*** ./src/display-error.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayError(errorMsg) {\n  const weatherContainer = document.querySelector('#weather');\n  const errorP = document.createElement('p');\n\n  // clear existing content from weatherContainer\n  while (weatherContainer.childNodes.length > 0) {\n    weatherContainer.childNodes[0].remove();\n  }\n\n  errorP.innerHTML = errorMsg;\n  weatherContainer.appendChild(errorP);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayError);\n\n\n//# sourceURL=webpack://weather-app/./src/display-error.js?");

/***/ }),

/***/ "./src/display-weather.js":
/*!********************************!*\
  !*** ./src/display-weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _degrees_to_cardinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./degrees-to-cardinal.js */ \"./src/degrees-to-cardinal.js\");\n\n\nfunction displayWeather(weatherData) {\n  const weatherContainer = document.querySelector('#weather');\n  const weatherCard = document.createElement('div');\n  weatherCard.classList.add('weather-card');\n\n  // clear existing content from weatherContainer\n  while (weatherContainer.childNodes.length > 0) {\n    weatherContainer.childNodes[0].remove();\n  }\n\n  // add city name to weather card\n  const nameValue = document.createElement('p');\n  nameValue.classList.add('center');\n  nameValue.innerHTML = weatherData.name;\n  weatherCard.appendChild(nameValue);\n\n  // add country to weather card\n  const countryValue = document.createElement('p');\n  countryValue.classList.add('center');\n  countryValue.innerHTML = weatherData.country;\n  weatherCard.appendChild(countryValue);\n\n  // add conditions (icon/description) to weather card\n  const conditionsContainer = document.createElement('div');\n  conditionsContainer.classList.add('conditions-container');\n  const icon = document.createElement('img');\n  icon.src = `http://openweathermap.org/img/w/${weatherData.icon}.png`;\n  icon.alt = 'weather icon';\n  const descValue = document.createElement('p');\n  descValue.innerHTML = weatherData.desc;\n  conditionsContainer.appendChild(icon);\n  conditionsContainer.appendChild(descValue);\n  weatherCard.appendChild(conditionsContainer);\n\n  // add current temperature to weather card\n  const currentContainer = document.createElement('div');\n  currentContainer.classList.add('current-container');\n  const tempValue = document.createElement('p');\n  const tempUnits = document.createElement('p');\n  tempValue.classList.add('center');\n  tempValue.classList.add('temp-value');\n  tempUnits.classList.add('temp-unit');\n  tempValue.innerHTML = weatherData.temp;\n  tempUnits.innerHTML = weatherData.tempUnits;\n  currentContainer.appendChild(tempValue);\n  currentContainer.appendChild(tempUnits);\n  weatherCard.appendChild(currentContainer);\n\n  // add feels like / high / low / wind labels to weather card\n  const labelsValuesContainer = document.createElement('div');\n  labelsValuesContainer.classList.add('labels-values-container');\n  const labelsContainer = document.createElement('div');\n  labelsContainer.classList.add('labels-container');\n  const feelsLikeLabel = document.createElement('p');\n  feelsLikeLabel.innerHTML = 'Feels Like:';\n  const tempMaxLabel = document.createElement('p');\n  tempMaxLabel.innerHTML = 'High:';\n  const tempMinLabel = document.createElement('p');\n  tempMinLabel.innerHTML = 'Low:';\n  const windLabel = document.createElement('p');\n  windLabel.innerHTML = 'Wind:';\n  labelsContainer.appendChild(feelsLikeLabel);\n  labelsContainer.appendChild(tempMaxLabel);\n  labelsContainer.appendChild(tempMinLabel);\n  labelsContainer.appendChild(windLabel);\n  labelsValuesContainer.appendChild(labelsContainer);\n\n  // add feels like / high / low / values & units to weather card\n  const valuesContainer = document.createElement('div');\n  valuesContainer.classList.add('values-container');\n\n  const feelsLikeContainer = document.createElement('div');\n  feelsLikeContainer.classList.add('values-units-container');\n  const feelsLikeValue = document.createElement('p');\n  feelsLikeValue.innerHTML = weatherData.feelsLike;\n  feelsLikeValue.classList.add('temp-value');\n  feelsLikeContainer.appendChild(feelsLikeValue);\n  feelsLikeContainer.appendChild(tempUnits.cloneNode(true));\n  valuesContainer.appendChild(feelsLikeContainer);\n\n  const highContainer = document.createElement('div');\n  highContainer.classList.add('values-units-container');\n  const tempMaxValue = document.createElement('p');\n  tempMaxValue.innerHTML = weatherData.tempMax;\n  tempMaxValue.classList.add('temp-value');\n  highContainer.appendChild(tempMaxValue);\n  highContainer.appendChild(tempUnits.cloneNode(true));\n  valuesContainer.appendChild(highContainer);\n\n  const lowContainer = document.createElement('div');\n  lowContainer.classList.add('values-units-container');\n  const tempMinValue = document.createElement('p');\n  tempMinValue.innerHTML = weatherData.tempMin;\n  tempMinValue.classList.add('temp-value');\n  lowContainer.appendChild(tempMinValue);\n  lowContainer.appendChild(tempUnits.cloneNode(true));\n  valuesContainer.appendChild(lowContainer);\n\n  const windContainer = document.createElement('div');\n  windContainer.classList.add('values-units-container');\n  const windSpeedValue = document.createElement('p');\n  const windDirectionValue = document.createElement('p');\n  const windSpeedUnits = document.createElement('p');\n  windSpeedValue.innerHTML = weatherData.windSpeed;\n  windDirectionValue.innerHTML = (0,_degrees_to_cardinal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weatherData.windDir);\n  windSpeedUnits.innerHTML = 'mph';\n  windContainer.appendChild(windSpeedValue);\n  windContainer.appendChild(windDirectionValue);\n  windContainer.appendChild(windSpeedUnits);\n  valuesContainer.appendChild(windContainer);\n\n  labelsValuesContainer.appendChild(valuesContainer);\n  weatherCard.appendChild(labelsValuesContainer);\n\n  // add weather card to weather container\n  weatherContainer.appendChild(weatherCard);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/display-weather.js?");

/***/ }),

/***/ "./src/get-weather.js":
/*!****************************!*\
  !*** ./src/get-weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getWeather(city) {\n  const url = 'https://agile-dusk-14659.herokuapp.com/';\n  const queryParam = `?q=${city}&units=imperial`;\n\n  const response = await fetch(url + queryParam, { mode: 'cors' });\n  const json = await response.json();\n\n  try {\n    const data = {\n      name: json.name,\n      country: json.sys.country,\n      temp: json.main.temp,\n      tempMin: json.main.temp_min,\n      tempMax: json.main.temp_max,\n      feelsLike: json.main.feels_like,\n      tempUnits: 'F',\n      desc: json.weather[0].description,\n      icon: json.weather[0].icon,\n      windSpeed: json.wind.speed,\n      windDir: json.wind.deg,\n    };\n    return data;\n  } catch {\n    throw new Error('no weather data found');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/get-weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-weather.js */ \"./src/get-weather.js\");\n/* harmony import */ var _display_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-weather.js */ \"./src/display-weather.js\");\n/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-error.js */ \"./src/display-error.js\");\n/* harmony import */ var _to_celsius_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-celsius.js */ \"./src/to-celsius.js\");\n/* harmony import */ var _to_fahrenheit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./to-fahrenheit.js */ \"./src/to-fahrenheit.js\");\n\n\n\n\n\n\nconst form = document.querySelector('form');\nconst celsiusButton = document.querySelector('#celsius');\nconst fahrenheitButton = document.querySelector('#fahrenheit');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n\n  const formData = new FormData(event.target);\n  const cityName = formData.get('city');\n\n  (0,_get_weather_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cityName)\n    .then((data) => {\n      const weather = data;\n      // if celsius button is active, then convert temps to degC\n      if (celsiusButton.classList.contains('active')) {\n        weather.temp = (0,_to_celsius_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weather.temp);\n        weather.tempMin = (0,_to_celsius_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weather.tempMin);\n        weather.tempMax = (0,_to_celsius_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weather.tempMax);\n        weather.feelsLike = (0,_to_celsius_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(weather.feelsLike);\n        weather.tempUnits = 'C';\n      }\n      // display the weather data\n      (0,_display_weather_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weather);\n    })\n    .catch((error) => {\n      if (error.message === 'no weather data found') {\n        (0,_display_error_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(error.message);\n      }\n      console.log(error);\n    });\n});\n\ncelsiusButton.addEventListener('click', () => {\n  const tempValueNodes = document.querySelectorAll('.temp-value');\n  const tempUnitNodes = document.querySelectorAll('.temp-unit');\n\n  if (fahrenheitButton.classList.contains('active')) {\n    // convert values to celsius\n    tempValueNodes.forEach((node) => {\n      const tempValue = node;\n      tempValue.innerHTML = (0,_to_celsius_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(tempValue.innerHTML);\n    });\n\n    // change units to C\n    tempUnitNodes.forEach((node) => {\n      const tempUnit = node;\n      tempUnit.innerHTML = 'C';\n    });\n\n    // transfer '.active' from the fahrenheit button to the celsius button\n    fahrenheitButton.classList.toggle('active');\n    celsiusButton.classList.toggle('active');\n  }\n});\n\nfahrenheitButton.addEventListener('click', () => {\n  const tempValueNodes = document.querySelectorAll('.temp-value');\n  const tempUnitNodes = document.querySelectorAll('.temp-unit');\n\n  if (celsiusButton.classList.contains('active')) {\n    // convert values to fahrenheit\n    tempValueNodes.forEach((node) => {\n      const tempValue = node;\n      tempValue.innerHTML = (0,_to_fahrenheit_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(tempValue.innerHTML);\n    });\n\n    // change units to F\n    tempUnitNodes.forEach((node) => {\n      const tempUnit = node;\n      tempUnit.innerHTML = 'F';\n    });\n\n    // transfer '.active' from the celsius button to the fahrenheit button\n    fahrenheitButton.classList.toggle('active');\n    celsiusButton.classList.toggle('active');\n  }\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/to-celsius.js":
/*!***************************!*\
  !*** ./src/to-celsius.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toCelsius(degrees) {\n  return Number((((degrees) - 32) / 1.8).toFixed(2));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toCelsius);\n\n\n//# sourceURL=webpack://weather-app/./src/to-celsius.js?");

/***/ }),

/***/ "./src/to-fahrenheit.js":
/*!******************************!*\
  !*** ./src/to-fahrenheit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toFahrenheit(degrees) {\n  return Number((((degrees) * (9 / 5)) + 32).toFixed(2));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFahrenheit);\n\n\n//# sourceURL=webpack://weather-app/./src/to-fahrenheit.js?");

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