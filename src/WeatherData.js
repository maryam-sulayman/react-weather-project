import React from "react";
import WeatherDate from "./WeatherDate";
import Temperature from "./Temperature";
import Icon from "./Icon";
import "./Weather.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.information.city}</h1>
      <ul>
        <li className=" date text-center mb-5">
          <WeatherDate date={props.information.date} />
        </li>
      </ul>
      <hr />
      <div className="row mt-5">
        <div className="col-6 ">
          <div className="description">
            <ul>
              <li className="text-capitalize">
                {props.information.description}
              </li>
              <li>Humidity: {props.information.humidity}%</li>
              <li>Windspeed: {props.information.windspeed}km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="display">
            <div className="d-flex">
              <div>
                <Icon icon={props.information.icon} size={80} />
              </div>
              <div>
                <Temperature celsius={props.information.temperature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
