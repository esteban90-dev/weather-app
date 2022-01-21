const weatherContainer = document.querySelector('#weather');

function displayWeather(weatherData) {
  let nameValue = document.createElement('p');

  let countryValue = document.createElement('p');

  let descValue = document.createElement('p');

  let tempValue = document.createElement('p');

  let feelsLikeLabel = document.createElement('p');
  let feelsLikeValue = document.createElement('p');

  let tempMaxLabel = document.createElement('p');
  let tempMaxValue = document.createElement('p');

  let tempMinLabel = document.createElement('p');
  let tempMinValue = document.createElement('p');

  let windLabel = document.createElement('p');
  let windSpeedValue = document.createElement('p');
  let windDirectionValue = document.createElement('p');
  let tempUnits = document.createElement('p');
  let windSpeedUnits = document.createElement('p');

  nameValue.innerHTML = weatherData.name;
  countryValue.innerHTML = weatherData.country;
  descValue.innerHTML = weatherData.desc;
  tempValue.innerHTML = weatherData.temp;
  tempValue.classList.add('temp-value');
  
  feelsLikeLabel.innerHTML = 'Feels Like: ';
  feelsLikeValue.innerHTML = weatherData.feelsLike;
  feelsLikeValue.classList.add('temp-value');

  tempMaxLabel.innerHTML = 'High: ';
  tempMaxValue.innerHTML = weatherData.tempMax;
  tempMaxValue.classList.add('temp-value');

  tempMinLabel.innerHTML = 'Low: ';
  tempMinValue.innerHTML = weatherData.tempMin;
  tempMinValue.classList.add('temp-value');

  windLabel.innerHTML = 'Wind: ';
  windSpeedValue.innerHTML = weatherData.windSpeed ;
  windDirectionValue.innerHTML = weatherData.windDir;

  tempUnits.innerHTML = 'F';
  tempUnits.classList.add('temp-unit');
  windSpeedUnits.innerHTML = 'mph';

  weatherContainer.appendChild(nameValue);
  weatherContainer.appendChild(countryValue);
  weatherContainer.appendChild(descValue);
  weatherContainer.appendChild(tempValue);
  weatherContainer.appendChild(tempUnits);
  weatherContainer.appendChild(feelsLikeLabel);
  weatherContainer.appendChild(feelsLikeValue);
  weatherContainer.appendChild(tempUnits.cloneNode(true));
  weatherContainer.appendChild(tempMaxLabel);
  weatherContainer.appendChild(tempMaxValue);
  weatherContainer.appendChild(tempUnits.cloneNode(true));
  weatherContainer.appendChild(tempMinLabel);
  weatherContainer.appendChild(tempMinValue);
  weatherContainer.appendChild(tempUnits.cloneNode(true));
  weatherContainer.appendChild(windLabel);
  weatherContainer.appendChild(windSpeedValue);
  weatherContainer.appendChild(windSpeedUnits);
  weatherContainer.appendChild(windDirectionValue);
}

export default displayWeather;
