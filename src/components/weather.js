import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

const Weather = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);

  const findWeather = () => {
    // e.preventDefault();
    const apiKey = "ffca0049d9ec3d8968b1ee4e281e0593";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
    setInput("");
    axios 
      .get(url)
      .then((res) => setWeather(res))
      .catch((err) => console.log(err));
  };
  // console.log(weather.data.code);
  const handleClick = (e) => {
    e.preventDefault();
    findWeather();

    // console.log(weather.cod);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input);
  console.log("weather", weather)
  // const image1 =
  //   "https://th.bing.com/th/id/OIP.JHeqa84gO1bAR1lexUQuAAHaEK?w=290&h=180&c=7&r=0&o=5&pid=1.7";
  // const style = {
  //   backgroundImage: `url(${image1})`,
  //   backgroundSize: `cover`,
  //   backgroundposition: `center`,
  // };
  return (
    <div className="inputBox">
      <div className="inputField">
        <h2>WEATHER APPLICATION</h2>
        <h3>Weather Today</h3>
        <img
          src=" https://pic.onlinewebfonts.com/svg/img_539978.png"
          alt="logo"
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter your Location"
          value={input}
          onChange={handleChange}
        ></input>
        <br></br>
        <button type="submit" onClick={handleClick}>
          Search
        </button>

        <div className="result">
          {/* {weather.data.cod === 200 ? (
            <p>{weather.data.main.temp - 273.15}°C</p>
          ) : (
            <p>Not Found</p>
          )} */}

        </div>
      </div>
    </div>
  );
};

export default Weather;
