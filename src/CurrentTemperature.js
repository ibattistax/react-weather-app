import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  let WeatherData = {
    date: "Saturday",
    time: "19:34",
    description: "sunny",
    humidity: "75%",
    windspeed: "1.23 km/h",
    temperature: 25,
  };

  return (
    <div className="CurrentTemperature">
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city" id="city">
            London
          </h1>
          <p className="weather-app-details">
            <span id="time">
              {WeatherData.date} | {WeatherData.time}
            </span>{" "}
            | <span id="description">{WeatherData.description}</span>
            <br />
            <br />
            <strong>Humidity </strong>
            <span id="humidity">{WeatherData.humidity}</span>
            <br />
            <strong>Wind</strong>
            <span id="wind-speed"> {WeatherData.windspeed}</span>
          </p>
        </div>
        <div className="weather-app-temperature">
          <div id="icon">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              class="weather-app-icon"
              alt=""
            />
          </div>
          <div className="weather-app-temperature-value" id="temperature">
            {WeatherData.temperature}
          </div>
          <div className="weather-app-units">ºC | ºF</div>
        </div>
      </div>
    </div>
  );
}
