import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils/utils.js";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
            Carolina Guevara Chacón
        </h1>
        <p className={styles.description}>
          Artista cuauhtemense con gran pasión por el arte.
        </p>
        <a href="mailto:Goliatycaro113@hotmail.com" className={styles.contactBtn}>
          Contacto
        </a>
      </div>
      <img
        src={getImageUrl("Logo.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};