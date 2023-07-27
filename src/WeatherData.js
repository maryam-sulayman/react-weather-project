import React from "react";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.information.city}</h1>
      <ul>
        <li>Last updated: Sunday 04:20</li>
        <li className="text-capitalize">{props.information.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png" />
          30 °C | °F
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.information.humidity}%</li>
            <li>Windspeed: {props.information.windspeed}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}