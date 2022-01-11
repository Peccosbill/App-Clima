import React from "react";
import styles from "./css/Error404.module.css";
import img404 from "../img/error404.gif";

function Error404() {
  return (
    <div className={styles.error}>
      <img src={img404} className={styles.img404} alt="Error 404" />
      <h3 className={styles.errorText}>Creo que no era por aquí ☻</h3>
    </div>
  );
}

export default Error404;
