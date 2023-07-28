import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <a
            href="https://github.com/maryam-sulayman/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source
          </a>{" "}
          code by Maryam Sulayman, Hosted on{" "}
          <a
            href="https://animated-bavarois-f86590.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
