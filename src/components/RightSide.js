import React from "react";

import classes from "./RightSide.module.scss";
import SearchBar from "./SearchBar";
import WeatherInfo from "./WeatherInfo";

const RightSide = function ({ onSetCity, weather, error }) {
  return (
    <React.Fragment>
      <div className={classes.right}>
        <SearchBar onSetCity={onSetCity} error={error} />
        <WeatherInfo weather={weather} error={error} />
      </div>
    </React.Fragment>
  );
};

export default RightSide;
