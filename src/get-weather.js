async function getWeather(city) {
  const url = 'https://agile-dusk-14659.herokuapp.com/';
  const queryParam = `?q=${city}&units=imperial`;

  const response = await fetch(url + queryParam, { mode: 'cors' });
  const json = await response.json();

  try {
    const data = {
      name: json.name,
      country: json.sys.country,
      temp: json.main.temp,
      tempMin: json.main.temp_min,
      tempMax: json.main.temp_max,
      feelsLike: json.main.feels_like,
      tempUnits: 'F',
      desc: json.weather[0].description,
      icon: json.weather[0].icon,
      windSpeed: json.wind.speed,
      windDir: json.wind.deg,
    };
    return data;
  } catch {
    throw new Error('no weather data found');
  }
}

export default getWeather;
