import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by{" "}
          <a
            href="https://brilliant-cactus-5a7fb9.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charlotte Jones
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/charlottej2017/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
