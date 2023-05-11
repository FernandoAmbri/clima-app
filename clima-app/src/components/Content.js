import React, { useEffect } from "react";

const weatherCondition = {
  clearD: "clear-day",
  clearN: "clear-night",
  cloudsD: "clouds-day",
  cloudsN: "clouds-night",
  rain: "rain",
  drizzle: "rain",
  thunderstorm: "thunderstorm",
  snow: "snow",
};

function Content({ weatherData }) {
  const { cityName } = weatherData;
  const { icon, main } = weatherData.weather[0];
  const { temp, feels_like, humidity } = weatherData.main;
  const { speed } = weatherData.wind;

  useEffect(() => {
    const imgBackground = document.querySelector(".weather-background");
    const mainLower = main.toLowerCase();
    const background = `${mainLower}${icon[2].toUpperCase()}`;
    let weatherImg = weatherCondition[background];

    imgBackground.classList.remove(imgBackground.classList[1]);

    if (weatherCondition[mainLower]) {
      weatherImg = weatherCondition[mainLower];
    }
    imgBackground.classList.add(weatherImg);
  }, [icon, main]);

  return (
    <>
      <section>
        <div className="weather-background">
          <div className="display-weather-info">
            <h2>{cityName}</h2>
            <div className="weather-info">
              <h3>{main}</h3>
              <div className="temperature">
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={`${main}`}
                />
                <div>
                  <h3>{Math.round(temp)}</h3>
                  <div className="toggle-units">
                    <button className="metric-unit">°C</button>
                  </div>
                </div>
              </div>
              <div>
                <span>Sensación térmica: {Math.round(feels_like)}</span>
              </div>
              <div>
                <span>Humedad: {`${humidity}%`}</span>
              </div>
              <div>
                <span>Viento: {`${Math.round(speed)} km/h`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
