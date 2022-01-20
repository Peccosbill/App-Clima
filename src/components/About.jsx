/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "animate.css";

import styles from "./css/About.module.css";
import gitHub from "../img/github.png";
import linkedin from "../img/linkedin.png";
import mail from "../img/mail.png";

export default function About() {
  const [click, useClick] = useState(false);

  function onChecked() {
    if (!click) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useClick(true);
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useClick(false);
    }
  }

  return (
    <div className={`${styles.about} ${"animate__animated animate__flipInX"}`}>
      <h4 className={styles.name}>Mi nombre es Jonathan</h4>
      <p className={styles.parr}>
        Estoy estudiando desarrollo Web hace un tiempo. La verdad que empece por
        necesidad de encontrar trabajo y un sustento para vivir, pero me terminó
        gustando mucho. Es un trabajo increible y te ayuda a valorar todo el
        trabajo que hay detras de aplicaciones que quizás utilizamos todos los
        días y terminamos viendolas como algo comun, pero al entrar en el mundo
        de la Programación empezas a ver todo el tiempo y esfuerzo que se puso
        en esa aplicación, página o artefacto electronico.
      </p>
      <div className={styles.containerContact}>
        <a
          href="https://www.linkedin.com/in/jonathan-montini"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.imgContact}
            src={linkedin}
            alt="Linkedin"
            width={60}
          />
        </a>
        <a
          href="https://github.com/Peccosbill"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.imgContact}
            src={gitHub}
            alt="Github"
            width={60}
          />
        </a>

        <img
          onClick={onChecked}
          className={styles.imgContact}
          src={mail}
          alt="Mail"
          width={60}
        />
      </div>
      {click ? (
        <p className="animate__animated animate__bounceIn">
          jonathanmontini95@gmail.com
        </p>
      ) : (
        <p className="animate__animated animate__bounceOut">
          jonathanmontini95@gmail.com
        </p>
      )}
    </div>
  );
}
