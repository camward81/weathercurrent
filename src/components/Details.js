import React from "react";

const Details = ({ weather }) => {
  return (
    <div className="details">
      <div className="line"></div>
      <h3>
        Chance of Rain:{" "}
        {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
      </h3>
      <div className="line"></div>
      <h3>Humidity: {weather.current.humidity}%</h3>
      <div className="line"></div>
      <h3>
        Wind: {weather.current.wind_dir} {weather.current.wind_mph} mph
      </h3>
      <div className="line"></div>
      <h3>Visibility: {weather.current.vis_miles} mi</h3>
      <div className="line"></div>
      <h3>UV Index: {weather.current.uv}</h3>
      <div className="line"></div>
    </div>
  );
};

export default Details;
