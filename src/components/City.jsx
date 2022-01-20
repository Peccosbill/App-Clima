import React from "react";
import "animate.css";
import styles from "./css/City.module.css";
import temperature from "../img/temperature.png";
import weather from "../img/weather.png";
import clouds from "../img/clouds.png";
import max_temp from "../img/maxtemp.png";
import min_temp from "../img/mintemp.png";
import humidity from "../img/humidity.png";
import wind from "../img/wind.png";
import lon_lat from "../img/points.png";


export default function City({ city }) {
  if (!city) {
    alert("La ciudad no existe");
    return <div>La ciudad no existe</div>;
  }
  return (
    <div className={`${styles.city} ${"animate__animated animate__flipInX"}`}>
      <div className={styles.name}>
        <h2>{`${city.name}, ${city.country}`}</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.uno}>
          <img src={temperature} alt="Temperature" width={35} /> Temperature:{" "}
          {city.temp} ºC
        </div>
        <div className={styles.dos}>
          <img src={max_temp} alt="max_temp" width={35} />
          Max: {city.max}
        </div>
        <div className={styles.tres}>
          <img src={min_temp} alt="min_temp" width={35} />
          Min: {city.min}
        </div>
        <div className={styles.cuatro}>
          <img src={weather} alt="Weather" width={35} />
          Weather: {city.weather}
        </div>
        <div className={styles.cinco}>
          <img src={humidity} alt="humidity" width={35} />
          Humidity: {city.humidity}%
        </div>
        <div className={styles.seis}>
          <img src={wind} alt="wind" width={35} />
          Wind: {city.wind} km/h
        </div>
        <div className={styles.siete}>
          <img src={clouds} alt="Clouds" width={35} />
          Clouds: {city.clouds}
        </div>
        <div className={styles.ocho}>
          <img src={lon_lat} alt="latitude" width={35} />
          Latitude: {city.latitud}º
        </div>
        <div className={styles.nueve}>
          <img src={lon_lat} alt="longitude" width={35} />
          Longitude: {city.longitud}º
        </div>
      </div>
      <div className={styles.imgCity}>
        <img
          src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
          alt="Img Weather"
          width={200}
        />
      </div>
    </div>
  );
}
