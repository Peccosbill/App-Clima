import React from "react";
import styles from "./css/City.module.css";

export default function City({ city }) {
  if (!city) {
    alert("La ciudad no existe");
    return <div>La ciudad no existe</div>;
  }
  return (
    <div className={styles.city}>
      <div className={styles.name}>
        <h2>{`${city.name}, ${city.country}`}</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.uno}>Temperature: {city.temp} ºC</div>
        <div className={styles.dos}>Max: {city.max}</div>
        <div className={styles.tres}>Min: {city.min}</div>
        <div className={styles.cuatro}>Weather: {city.weather}</div>
        <div className={styles.cinco}>Humidity: {city.humidity}%</div>
        <div className={styles.seis}>Wind: {city.wind} km/h</div>
        <div className={styles.siete}>Clouds: {city.clouds}</div>
        <div className={styles.ocho}>Latitude: {city.latitud}º</div>
        <div className={styles.nueve}>Longitude: {city.longitud}º</div>
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
