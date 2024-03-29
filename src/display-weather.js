import degreesToCardinal from './degrees-to-cardinal.js';

function displayWeather(weatherData) {
  const weatherContainer = document.querySelector('#weather');
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-card');

  // clear existing content from weatherContainer
  while (weatherContainer.childNodes.length > 0) {
    weatherContainer.childNodes[0].remove();
  }

  // add city name to weather card
  const nameValue = document.createElement('p');
  nameValue.classList.add('center');
  nameValue.innerHTML = weatherData.name;
  weatherCard.appendChild(nameValue);

  // add country to weather card
  const countryValue = document.createElement('p');
  countryValue.classList.add('center');
  countryValue.innerHTML = weatherData.country;
  weatherCard.appendChild(countryValue);

  // add conditions (icon/description) to weather card
  const conditionsContainer = document.createElement('div');
  conditionsContainer.classList.add('conditions-container');
  const icon = document.createElement('img');
  icon.src = `http://openweathermap.org/img/w/${weatherData.icon}.png`;
  icon.alt = 'weather icon';
  const descValue = document.createElement('p');
  descValue.innerHTML = weatherData.desc;
  conditionsContainer.appendChild(icon);
  conditionsContainer.appendChild(descValue);
  weatherCard.appendChild(conditionsContainer);

  // add current temperature to weather card
  const currentContainer = document.createElement('div');
  currentContainer.classList.add('current-container');
  const tempValue = document.createElement('p');
  const tempUnits = document.createElement('p');
  tempValue.classList.add('center');
  tempValue.classList.add('temp-value');
  tempUnits.classList.add('temp-unit');
  tempValue.innerHTML = weatherData.temp;
  tempUnits.innerHTML = weatherData.tempUnits;
  currentContainer.appendChild(tempValue);
  currentContainer.appendChild(tempUnits);
  weatherCard.appendChild(currentContainer);

  // add feels like / high / low / wind labels to weather card
  const labelsValuesContainer = document.createElement('div');
  labelsValuesContainer.classList.add('labels-values-container');
  const labelsContainer = document.createElement('div');
  labelsContainer.classList.add('labels-container');
  const feelsLikeLabel = document.createElement('p');
  feelsLikeLabel.innerHTML = 'Feels Like:';
  const tempMaxLabel = document.createElement('p');
  tempMaxLabel.innerHTML = 'High:';
  const tempMinLabel = document.createElement('p');
  tempMinLabel.innerHTML = 'Low:';
  const windLabel = document.createElement('p');
  windLabel.innerHTML = 'Wind:';
  labelsContainer.appendChild(feelsLikeLabel);
  labelsContainer.appendChild(tempMaxLabel);
  labelsContainer.appendChild(tempMinLabel);
  labelsContainer.appendChild(windLabel);
  labelsValuesContainer.appendChild(labelsContainer);

  // add feels like / high / low / values & units to weather card
  const valuesContainer = document.createElement('div');
  valuesContainer.classList.add('values-container');

  const feelsLikeContainer = document.createElement('div');
  feelsLikeContainer.classList.add('values-units-container');
  const feelsLikeValue = document.createElement('p');
  feelsLikeValue.innerHTML = weatherData.feelsLike;
  feelsLikeValue.classList.add('temp-value');
  feelsLikeContainer.appendChild(feelsLikeValue);
  feelsLikeContainer.appendChild(tempUnits.cloneNode(true));
  valuesContainer.appendChild(feelsLikeContainer);

  const highContainer = document.createElement('div');
  highContainer.classList.add('values-units-container');
  const tempMaxValue = document.createElement('p');
  tempMaxValue.innerHTML = weatherData.tempMax;
  tempMaxValue.classList.add('temp-value');
  highContainer.appendChild(tempMaxValue);
  highContainer.appendChild(tempUnits.cloneNode(true));
  valuesContainer.appendChild(highContainer);

  const lowContainer = document.createElement('div');
  lowContainer.classList.add('values-units-container');
  const tempMinValue = document.createElement('p');
  tempMinValue.innerHTML = weatherData.tempMin;
  tempMinValue.classList.add('temp-value');
  lowContainer.appendChild(tempMinValue);
  lowContainer.appendChild(tempUnits.cloneNode(true));
  valuesContainer.appendChild(lowContainer);

  const windContainer = document.createElement('div');
  windContainer.classList.add('values-units-container');
  const windSpeedValue = document.createElement('p');
  const windDirectionValue = document.createElement('p');
  const windSpeedUnits = document.createElement('p');
  windSpeedValue.innerHTML = weatherData.windSpeed;
  windDirectionValue.innerHTML = degreesToCardinal(weatherData.windDir);
  windSpeedUnits.innerHTML = 'mph';
  windContainer.appendChild(windSpeedValue);
  windContainer.appendChild(windDirectionValue);
  windContainer.appendChild(windSpeedUnits);
  valuesContainer.appendChild(windContainer);

  labelsValuesContainer.appendChild(valuesContainer);
  weatherCard.appendChild(labelsValuesContainer);

  // add weather card to weather container
  weatherContainer.appendChild(weatherCard);
}

export default displayWeather;
