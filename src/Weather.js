import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(response) {
    setWeatherInfo({
      ready: true,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "eae061c95483dd066657bfc7525418ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }

  function updateCity(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form onSubmit={updateCity}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                onChange={handleCityChange}
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherData information={weatherInfo} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
