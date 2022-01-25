import degreesToCardinal from './degrees-to-cardinal.js';

function displayWeather(weatherData) {
  const celsiusButton = document.querySelector('#celsius');
  const weatherContainer = document.querySelector('#weather');
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-card');
  
  // clear existing content from weatherContainer
  while (weatherContainer.childNodes.length > 0) {
    weatherContainer.childNodes[0].remove();
  }

  // add city name to weather card
  let nameValue = document.createElement('p');
  nameValue.classList.add('center');
  nameValue.innerHTML = weatherData.name;
  weatherCard.appendChild(nameValue);

  // add country to weather card
  let countryValue = document.createElement('p');
  countryValue.classList.add('center');
  countryValue.innerHTML = weatherData.country;
  weatherCard.appendChild(countryValue);

  // add conditions (icon/description) to weather card
  const conditionsContainer = document.createElement('div');
  conditionsContainer.classList.add('conditions-container');
  let icon = document.createElement('img');
  icon.src = 'http://openweathermap.org/img/w/' + weatherData['icon'] + '.png';
  icon.alt = 'weather icon';
  let descValue = document.createElement('p');
  descValue.innerHTML = weatherData.desc;
  conditionsContainer.appendChild(icon);
  conditionsContainer.appendChild(descValue);
  weatherCard.appendChild(conditionsContainer);

  // add current temperature to weather card
  const currentContainer = document.createElement('div');
  currentContainer.classList.add('current-container');
  let tempValue = document.createElement('p');
  let tempUnits = document.createElement('p');
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
  let feelsLikeLabel = document.createElement('p');
  feelsLikeLabel.innerHTML = 'Feels Like:';
  let tempMaxLabel = document.createElement('p');
  tempMaxLabel.innerHTML = 'High:';
  let tempMinLabel = document.createElement('p');
  tempMinLabel.innerHTML = 'Low:';
  let windLabel = document.createElement('p');
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
  let feelsLikeValue = document.createElement('p');
  feelsLikeValue.innerHTML = weatherData.feelsLike;
  feelsLikeValue.classList.add('temp-value');
  feelsLikeContainer.appendChild(feelsLikeValue);
  feelsLikeContainer.appendChild(tempUnits.cloneNode(true));
  valuesContainer.appendChild(feelsLikeContainer);

  const highContainer = document.createElement('div');
  highContainer.classList.add('values-units-container');
  let tempMaxValue = document.createElement('p');
  tempMaxValue.innerHTML = weatherData.tempMax;
  tempMaxValue.classList.add('temp-value');
  highContainer.appendChild(tempMaxValue);
  highContainer.appendChild(tempUnits.cloneNode(true));
  valuesContainer.appendChild(highContainer);

  const lowContainer = document.createElement('div');
  lowContainer.classList.add('values-units-container');
  let tempMinValue = document.createElement('p');
  tempMinValue.innerHTML = weatherData.tempMin;
  tempMinValue.classList.add('temp-value');
  lowContainer.appendChild(tempMinValue);
  lowContainer.appendChild(tempUnits.cloneNode(true));
  valuesContainer.appendChild(lowContainer);

  const windContainer = document.createElement('div');
  windContainer.classList.add('values-units-container');
  let windSpeedValue = document.createElement('p');
  let windDirectionValue = document.createElement('p');
  let windSpeedUnits = document.createElement('p');
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
