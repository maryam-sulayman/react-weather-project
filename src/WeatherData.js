import React from "react";
import WeatherDate from "./WeatherDate";
import Temperature from "./Temperature";
import Icon from "./Icon";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.information.city}</h1>
      <ul>
        <li>
          <WeatherDate date={props.information.date} />
        </li>
        <li className="text-capitalize">{props.information.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <Icon icon={props.information.icon} />
            </div>
            <div>
              <Temperature celsius={props.information.temperature} />
            </div>
          </div>
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
