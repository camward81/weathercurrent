import React from "react";

const Current = ({ weather }) => {
  return (
    <div className="current">
      <div className="location">
        <h2>
          {weather.location.name}
          {weather.location.region ? "," : ""}
        </h2>
        <h2>{weather.location.region}</h2>
      </div>
      <div className="conditions">
        <img src={weather.current.condition.icon} alt="current conditions" />
        <h1>{Math.round(weather.current.temp_f)}</h1>
      </div>
      <div className="low-high">
        <p>H: {Math.round(weather.forecast.forecastday[0].day.maxtemp_f)}</p>
        <p>L: {Math.round(weather.forecast.forecastday[0].day.mintemp_f)}</p>
      </div>
    </div>
  );
};

export default Current;
