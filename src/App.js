import React, { useEffect, useState } from "react";

import classes from "./App.module.scss";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import LoadingSpinner from "./components/LoadingSpinner";

import sunny from "./local-img/sunny.mp4";
import thunderstorm from "./local-img/thunderstorm.mp4";
import clouds from "./local-img/clouds.mp4";
import mist from "./local-img/mist.mp4";
import rain from "./local-img/rain.mp4";
import snow from "./local-img/snow.mp4";

function App() {
  const [weather, setWeatcher] = useState({});
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Toronto");
  const [backgroundVideo, setBackgroundVideo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = process.env.REACT_APP_WEATHER_TOKEN;

  const fetchWeather = async function (searchCity = city) {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${token}`
      );

      if (response.status === 404 && !response.ok) {
        throw new Error("Invalid city");
      }

      if (response.status === 429 && !response.ok) {
        throw new Error("Too many request");
      }

      const data = await response.json();

      setWeatcher({
        id: data.id,
        name: data.name,
        temp: Math.round(data.main.temp - 273),
        feelsLike: Math.round(data.main.feels_like - 273),
        tempMin: Math.round(data.main.temp_min - 273),
        tempMax: Math.round(data.main.temp_max - 273),
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        mainWeather: data.weather[0].main,
        icon: data.weather[0].icon,
        sunrise: data.sys.sunrise,
        timezone: data.timezone,
      });

      setError(null);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }

    setIsLoading(false);
  };

  const weatherCondition = weather.mainWeather;

  const mistConditions = [
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ];

  const rainConditions = ["Rain", "Drizzle"];

  useEffect(() => {
    fetchWeather();

    if (weatherCondition && weatherCondition.includes("Clear")) {
      setBackgroundVideo(sunny);
    }

    if (weatherCondition && weatherCondition.includes("Thunderstorm")) {
      setBackgroundVideo(thunderstorm);
    }

    if (weatherCondition && weatherCondition.includes("Clouds")) {
      setBackgroundVideo(clouds);
    }

    if (weatherCondition && weatherCondition.includes("Snow")) {
      setBackgroundVideo(snow);
    }

    if (
      weatherCondition &&
      mistConditions.some((item) => weatherCondition.includes(item))
    ) {
      setBackgroundVideo(mist);
    }

    if (
      weatherCondition &&
      rainConditions.some((item) => weatherCondition.includes(item))
    ) {
      setBackgroundVideo(rain);
    }
  }, [city, weatherCondition]);

  const content = (
    <React.Fragment>
      <LeftSide weather={weather} error={error} />
      <RightSide
        onSetCity={setCity}
        onSetError={setError}
        weather={weather}
        error={error}
      />
    </React.Fragment>
  );

  const tooManyRequest = <p>{error}</p>;

  return (
    <React.Fragment>
      <div className={classes.container}>
        {isLoading && error !== "Too many request" ? (
          <LoadingSpinner />
        ) : (
          content
        )}
        {error === "Too many request" && tooManyRequest}
        <video
          src={backgroundVideo}
          muted
          loop
          autoPlay
          className={classes["container-video"]}
        ></video>
      </div>
    </React.Fragment>
  );
}

export default App;
