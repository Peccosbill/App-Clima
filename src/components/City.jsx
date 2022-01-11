import React from "react";
import styles from "./css/City.module.css";

export default function City({ city }) {
  if (!city) {
    alert("La ciudad no existe");
    return <div>La ciudad no existe</div>;
  }
  return (
    <div className={styles.city}>
      <h2 className={styles.name}>{`${city.name}, ${city.country}`}</h2>
      <div className={styles.info}>
        <div>Temperatura: {city.temp} ºC</div>
        <div>Clima: {city.weather}</div>
        <div>Viento: {city.wind} km/h</div>
        <div>Cantidad de nubes: {city.clouds}</div>
        <div>Latitud: {city.latitud}º</div>
        <div>Longitud: {city.longitud}º</div>
      </div>
    </div>
  );
}
