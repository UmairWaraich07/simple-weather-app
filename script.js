/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

getWeatherData =async city => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5093c3eeb4msh818871fd09e1cf8p13a2a1jsn6dcff1e43696',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
    },
  };

  const response = await fetch (
    `https://open-weather13.p.rapidapi.com/city/${city}`,
    options
  );
  const data = await response.json ();
  return data;
};

/**
 * Retrieve city input and get the weather data
 */
const searchCity = async () => {
  const city = document.getElementById ('city-input').value;
  const weatherData = await getWeatherData (city);
  showWeatherData (weatherData);
};

/**
 * Show the weather data in HTML
 */
const showWeatherData = weatherData => {
  const city = document.getElementById ('city-name');
  const weatherType = document.getElementById ('weather-type');
  const temp = document.getElementById ('temp');
  const minTemp = document.getElementById ('min-temp');
  const maxTemp = document.getElementById ('max-temp');

  city.innerText = weatherData.name;
  weatherType.innerText = weatherData.weather[0].main;
  temp.innerText = weatherData.main.temp;
  minTemp.innerText = weatherData.main.temp_min;
  maxTemp.innerText = weatherData.main.temp_max;
};
