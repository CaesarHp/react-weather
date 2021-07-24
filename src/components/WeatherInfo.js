import React from "react";

import classes from "./WeatherInfo.module.scss";

const WeatherInfo = function (props) {
  return (
    <React.Fragment>
      <div className={classes["weather-info"]}>
        <div className={classes["weather-info-title"]}>
          <p>Weather Details</p>
        </div>

        <div className={classes["weather-info-detail"]}>
          <p className={classes["weather-info-detail-parameter"]}>Min</p>
          <p>{`${props.weather.tempMin}°C`}</p>
        </div>

        <div className={classes["weather-info-detail"]}>
          <p className={classes["weather-info-detail-parameter"]}>Max</p>
          <p>{`${props.weather.tempMax}°C`}</p>
        </div>

        <div className={classes["weather-info-detail"]}>
          <p className={classes["weather-info-detail-parameter"]}>Feels like</p>
          <p>{`${props.weather.feelsLike}°C`}</p>
        </div>

        <div className={classes["weather-info-detail"]}>
          <p className={classes["weather-info-detail-parameter"]}>Humidity</p>
          <p>{`${props.weather.humidity}%`}</p>
        </div>

        <div className={classes["weather-info-detail"]}>
          <p className={classes["weather-info-detail-parameter"]}>Pressure</p>
          <p>{`${props.weather.pressure}`}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeatherInfo;
