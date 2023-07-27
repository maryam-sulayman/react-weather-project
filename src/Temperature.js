import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span> {Math.round(props.celsius)}</span>
        <span className="units">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <span> {Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
