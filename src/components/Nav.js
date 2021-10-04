import React from "react";

const Nav = ({ weatherInput, searchWeather }) => {
  return (
    <div className="nav">
      <h1>weathercurrent</h1>
      <form className="search">
        <input
          type="text"
          placeholder="Search City or ZIP"
          onChange={weatherInput}
        />
        <button type="submit" onClick={searchWeather}>
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Nav;
