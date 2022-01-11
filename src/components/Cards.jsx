import React from "react";
import styles from "./css/Cards.module.css";
import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className={styles.cards}>
        {cities.map((c) => (
          <Card
            key={c.id}
            id={c.id}
            temp={c.temp}
            clouds={c.clouds}
            wind={c.wind}
            name={c.name}
            country={c.country}
            img={c.img}
            onClose={() => onClose(c.id)}
          />
        ))}
      </div>
    );
  } else {
    return (<div>Sin ciudades</div>);
  }
}
