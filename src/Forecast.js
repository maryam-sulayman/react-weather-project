import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [load, setLoad] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    setLoad(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setLoad(true);
  }
  function start() {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    const apiKey = "eae061c95483dd066657bfc7525418ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  if (load) {
    return (
      <div className="Forecast">
        <div className="row">
          {dailyForecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay forecast={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return start();
  }
}
