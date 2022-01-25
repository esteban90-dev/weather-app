import getWeather from './get-weather.js';
import displayWeather from './display-weather.js';
import displayError from './display-error.js';
import toCelsius from './to-celsius.js';
import toFahrenheit from './to-fahrenheit.js';

const form = document.querySelector('form');
const celsiusButton = document.querySelector('#celsius');
const fahrenheitButton = document.querySelector('#fahrenheit');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const cityName = formData.get('city');

  getWeather(cityName)
    .then((data) => {
      const weather = data;
      // if celsius button is active, then convert temps to degC
      if (celsiusButton.classList.contains('active')) {
        weather.temp = toCelsius(weather.temp);
        weather.tempMin = toCelsius(weather.tempMin);
        weather.tempMax = toCelsius(weather.tempMax);
        weather.feelsLike = toCelsius(weather.feelsLike);
        weather.tempUnits = 'C';
      }
      // display the weather data
      displayWeather(weather);
    })
    .catch((error) => {
      if (error.message === 'no weather data found') {
        displayError(error.message);
      }
      console.log(error);
    });
});

celsiusButton.addEventListener('click', () => {
  const tempValueNodes = document.querySelectorAll('.temp-value');
  const tempUnitNodes = document.querySelectorAll('.temp-unit');

  if (fahrenheitButton.classList.contains('active')) {
    // convert values to celsius
    tempValueNodes.forEach((node) => {
      const tempValue = node;
      tempValue.innerHTML = toCelsius(tempValue.innerHTML);
    });

    // change units to C
    tempUnitNodes.forEach((node) => {
      const tempUnit = node;
      tempUnit.innerHTML = 'C';
    });

    // transfer '.active' from the fahrenheit button to the celsius button
    fahrenheitButton.classList.toggle('active');
    celsiusButton.classList.toggle('active');
  }
});

fahrenheitButton.addEventListener('click', () => {
  const tempValueNodes = document.querySelectorAll('.temp-value');
  const tempUnitNodes = document.querySelectorAll('.temp-unit');

  if (celsiusButton.classList.contains('active')) {
    // convert values to fahrenheit
    tempValueNodes.forEach((node) => {
      const tempValue = node;
      tempValue.innerHTML = toFahrenheit(tempValue.innerHTML);
    });

    // change units to F
    tempUnitNodes.forEach((node) => {
      const tempUnit = node;
      tempUnit.innerHTML = 'F';
    });

    // transfer '.active' from the celsius button to the fahrenheit button
    fahrenheitButton.classList.toggle('active');
    celsiusButton.classList.toggle('active');
  }
});
