import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";

const WeatherApp = () => {
  const [temperature, setTemperature] = useState("");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("Accra");
  const [country, setCountry] = useState("GH");

  const getWeatherData = (city) => {
    axios({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=180941f68139fba12f166dc35d9b688b`,
    })
      .then((response) => {
        console.log(response.data.main.temp);

        setTemperature(response.data.main.temp - 273.15);

        setDesc(response.data.weather[0].main);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{
      background: "#ffff",
    }}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "70px",
          width: "100%",
          backgroundColor: "#226ba3",
          fontSize: "30px",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        Simple Weather App
      </div>

      <div style={{ marginLeft: "33%" }}>
        <br />
        <div
          style={{
            height: "150px",
            width: "50%",
            backgroundColor: "#94e5ff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
          {new Date().toLocaleString()}
          <br />
          {city} Weather
          <br />
          {Math.round(temperature * 100) / 100} ℃ - {desc}
        </div>
        <br />
       
        <div
           style={{
            height: "20px",
            width: "100%",
        }}>
        <input
             style={{
              height: "20px",
              width: "39%",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
          }}
        type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
      style={{
          height: "29px",
          width: "10%",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
        }}
          onClick={() => {
            getWeatherData(city);
          }}
        >
          GET
        </button>
        </div>

      </div>
    </div>
  );
};

render(<WeatherApp />, document.querySelector("#root"));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')


  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

  reportWebVitals();
);*/
