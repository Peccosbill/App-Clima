import React from "react";
import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ temp, clouds, wind, name, img, onClose, id }) {
  return (
    <div className={styles.card}>
      <div className={styles.cityName}>
        <button onClick={onClose} className={styles.button}>
          X
        </button>
        <NavLink
          to={`/city/${id}`}
          className={styles.city}
          style={{ textDecoration: "none" }}
        >
          <h5 className={styles.name}>{name}</h5>
        </NavLink>
      </div>
      <div className={styles.temperature}>
        <p className={styles.temp}>{temp}°</p>
        <div className={styles.extraData}>
          <p>Clouds: {clouds}%</p>
          <p>Wind: {wind}km</p>
        </div>
      </div>
      <div className={styles.imgWeather}>
        <img
          className={styles.weather}
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          width="80"
          height="80"
          alt=""
        />
      </div>
    </div>
  );
}
