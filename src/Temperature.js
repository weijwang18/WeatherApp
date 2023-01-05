import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    city: "Seattle",
    date: "Tuesday 13:00",
    temperature: 25,
    humidity: 80,
    wind: 30
  };

  return (
    <div className="Temperature">
      <div className="row row-cols-2">
        <div className="col cityName">{weatherData.city}</div>
        <div className="col weathericon">
          <img src="https://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_sunny_dark_color_96dp.png" />
        </div>
        <div className="col">
          <ul>
            <li>
              <span className="today"></span>
              <span className="time">{weatherData.date}</span>
            </li>
            <li>
              Humidity:<span className="humidity">{weatherData.humditiy}</span>%
            </li>
            <li>
              Wind:<span className="wind">{weatherData.wind}</span>km/h
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="description"></div>
          <strong className="temp">{weatherData.temperature}</strong>
          <span className="units">
            <a href="/"> °C </a>|<a href="/">°F</a>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}
