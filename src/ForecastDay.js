import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.forecast.dt * 1000);
  let day = days[date.getDay()];
  return (
    <div>
      <div>{day}</div>
      <Icon icon={props.forecast.weather[0].icon} size={50} />
      <div className="ForecastTemperatures">
        <span className="ForecastTemperature-max">
          {Math.round(props.forecast.temp.max)}°
        </span>
        <span className="ForecastTemperature-min">
          {Math.round(props.forecast.temp.min)}°
        </span>
      </div>
    </div>
  );
}
