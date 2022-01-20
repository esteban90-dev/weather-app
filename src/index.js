import getWeather from './get-weather.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const cityName = formData.get('city');

  getWeather(cityName);
});
