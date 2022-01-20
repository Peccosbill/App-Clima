import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";
import styles from "./css/Card.module.css";

export default function Card({
  name,
  country,
  temp,
  description,
  wind,
  img,
  onClose,
  id,
}) {
  return (
    <div className={`${styles.card} ${"animate__animated animate__flipInX"}`}>
      <div className={styles.cityName}>
        <button onClick={onClose} className={styles.button}>
          X
        </button>
        <NavLink
          to={`/city/${id}`}
          className={styles.city}
          style={{ textDecoration: "none" }}
        >
          <h5 className={styles.name}>{`${name}, ${country}`}</h5>
        </NavLink>
      </div>
      <div className={styles.temperature}>
        <p className={styles.temp}>{temp}°</p>
        <div className={styles.extraData}>
          <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
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
