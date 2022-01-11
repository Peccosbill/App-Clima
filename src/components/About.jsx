import React from 'react';
import styles from './css/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h4 className={styles.name}>Mi nombre es Jonathan</h4>
            <p className={styles.parr}>Estoy estudiando desarrollo Web hace un tiempo. La verdad que empece por necesidad de encontrar trabajo y un sustento para vivir, pero me terminó gustando mucho. Es un trabajo increible y te ayuda a valorar todo el trabajo que hay detras de aplicaciones que quizás utilizamos todos los días y terminamos viendolas como algo comun, pero al entrar en el mundo de la Programación empezas a ver todo el tiempo y esfuerzo que se puso en esa aplicación, página o artefacto electronico.</p>
        </div>
    )
}
