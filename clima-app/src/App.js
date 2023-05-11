import React, { useState, useEffect } from "react";
import { getSpecificWeather, getWeatherData } from "./data/weatherData";

import Nav from "./components/Nav";
import Content from "./components/Content";

function App() {
  const [weatherData, setWeatherData] = useState({
    weather: [{ icon: "03d", main: "" }],
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    wind: { deg: 0, speed: 0 },
    cityName: "",
  });

  async function getSpecificTemp(value) {
    const response = await getSpecificWeather(value);
    if (response) {
      setWeatherData(response);
    }
  }

  useEffect(() => {
    async function initData() {
      const response = await getWeatherData();
      if (response) {
        setWeatherData(response);
      }
    }

    initData();
  }, []);

  return (
    <>
      <Nav getSpecificTemp={getSpecificTemp} />
      <Content weatherData={weatherData} />
    </>
  );
}

export default App;
