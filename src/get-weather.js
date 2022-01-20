function getWeather(city) {
  const url = "http://127.0.0.1:3000/api/v1/weather";
  const queryParam = "?q=" + city + "&units=imperial";

  return fetch(url + queryParam, { mode: 'cors' })
    .then( (response) => { 
      return response.json();
    })
    .then( (json) => {
      const data = {
        name: json['name'],
        country: json['sys']['country'],
        temp: json['main']['temp'],
        tempMin: json['main']['temp_min'],
        tempMax: json['main']['temp_max'],
        feelsLike: json['main']['feels_like'],
        desc: json['weather']['0']['description'],
        icon: json['weather']['0']['icon'],
        windSpeed: json['wind']['speed'],
        windDir: json['wind']['deg']
      }

      return data;
    });
}

export default getWeather;