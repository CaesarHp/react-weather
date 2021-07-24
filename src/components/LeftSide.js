import React from "react";

import classes from "./LeftSide.module.scss";
import AppLogo from "./AppLogo";
import CurrentWeather from "./CurrentWeather";

const LeftSide = function (props) {
  return (
    <React.Fragment>
      <div className={classes.left}>
        <AppLogo />
        <CurrentWeather weather={props.weather} error={props.error} />
      </div>
    </React.Fragment>
  );
};

export default LeftSide;
