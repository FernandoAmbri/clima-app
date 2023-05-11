import axios from "axios";

const APP_ID = "492f84b14e4578c295a9db7ea82d3299";

let latitudeCoords = 0;
let longitudeCoords = 0;

function buildURL(urlString) {
  const url = `https://api.openweathermap.org/data/2.5/weather?${urlString}&units=metric&appid=${APP_ID}`;
  return url;
}

async function getDataFromAPI(url) {
  try {
    const response = await axios.get(url);
    const weatherData = await response.data;

    if (response.status === 404) {
      console.log("La ubicación no existe");
      return;
    }

    return {
      weather: weatherData.weather,
      main: weatherData.main,
      wind: weatherData.wind,
      cityName: weatherData.name,
    };
  } catch (err) {
    console.error(err);
  }
}

async function getWeatherData() {
  const query = `lat=${latitudeCoords}&lon=${longitudeCoords}`;

  const url = buildURL(query);
  const weatherData = await getDataFromAPI(url);
  return weatherData;
}

async function getSpecificWeather(value) {
  const query = `q=${value.trim()}`;
  const url = buildURL(query);
  const weatherData = await getDataFromAPI(url);
  return weatherData;
}

function success(position) {
  if (position) {
    const { latitude, longitude } = position.coords;
    latitudeCoords = latitude;
    longitudeCoords = longitude;
  }
}

function error(err) {
  console.error(err);
}

navigator.geolocation.getCurrentPosition(success, error);

export { getWeatherData, getSpecificWeather };
