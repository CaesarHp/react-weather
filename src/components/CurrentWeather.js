import React from "react";

import classes from "./CurrentWeather.module.scss";

const CurrentWeather = function (props) {
  const date = new Date(
    (props.weather.sunrise + props.weather.timezone) * 1000
  );
  const month = date.toLocaleString("default", { month: "long" });
  const day = ("0" + date.getDate()).slice(-2);
  const week = date.toString().split(" ")[0];

  const weatherIcon = props.weather.icon
    ? `http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`
    : null;

  return (
    <React.Fragment>
      <div className={classes["current-weather"]}>
        <p
          className={classes["current-weather-temp"]}
        >{`${props.weather.temp}°C`}</p>
        <div className={classes["current-weather-local"]}>
          <p className={classes["current-weather-local-city"]}>
            {props.weather.name}
          </p>
          <p
            className={classes["current-weather-local-date"]}
          >{`${week} ${month} ${day}`}</p>
        </div>
        <div className={classes["current-weather-condition"]}>
          <img
            src={weatherIcon}
            alt="icon"
            className={classes["current-weather-condition-icon"]}
          />
          <p
            className={classes["current-weather-condition-main"]}
          >{`${props.weather.mainWeather}`}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrentWeather;
