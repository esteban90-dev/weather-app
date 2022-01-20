const weatherContainer = document.querySelector('#weather');

function displayWeather(weatherData) {
  let name = document.createElement('p');
  let country = document.createElement('p')
  let desc = document.createElement('p');
  let temp = document.createElement('p');
  let feelsLike = document.createElement('p');
  let tempMax = document.createElement('p');
  let tempMin = document.createElement('p');
  let windSpeed = document.createElement('p');
  let windDirection = document.createElement('p');

  name.innerHTML = weatherData.name;
  country.innerHTML = weatherData.country;
  desc.innerHTML = weatherData.desc;
  temp.innerHTML = weatherData.temp;
  feelsLike.innerHTML = weatherData.feelsLike;
  tempMax.innerHTML = weatherData.tempMax;
  tempMin.innerHTML = weatherData.tempMin;
  windSpeed.innerHTML = weatherData.windSpeed;
  windDirection.innerHTML = weatherData.windDir;

  weatherContainer.appendChild(name);
  weatherContainer.appendChild(country);
  weatherContainer.appendChild(desc);
  weatherContainer.appendChild(temp);
  weatherContainer.appendChild(feelsLike);
  weatherContainer.appendChild(tempMax);
  weatherContainer.appendChild(tempMin);
  weatherContainer.appendChild(windSpeed);
  weatherContainer.appendChild(windDirection);
}

export default displayWeather