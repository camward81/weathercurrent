import React, { useEffect, useState } from "react";
//Styles
import styles from "./styles/app.scss";
//API
import axios from "axios";
//Components
import Nav from "./components/Nav";
import Current from "./components/Current";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  const [weather, setWeather] = useState(null);

  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=Tucson&aqi=no`
      )
      .then((data) => {
        setWeather(data.data);
        console.log(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const searchWeather = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${input}`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.error(err));
    setInput("");
  };

  return (
    <div className="App" styles={styles}>
      {weather && (
        <div>
          <Nav
            input={input}
            weatherInput={weatherInput}
            searchWeather={searchWeather}
          />
          <Current weather={weather} />
          <Details weather={weather} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
