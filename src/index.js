import getWeather from './get-weather.js';
import displayWeather from './display-weather.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const cityName = formData.get('city');

  getWeather(cityName)
    .then( (weatherData) => {
      console.log(weatherData);
      displayWeather(weatherData);
    })
    .catch( (error) => {
      console.log(error);
    })
});

