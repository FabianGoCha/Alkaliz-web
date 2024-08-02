import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils/utils.js";

export const Hero = () => {
  const handleSendMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=6251017566`;
    window.open(url, '_blank');
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
            Carolina Guevara Chacón
        </h1>
        <p className={styles.description}>
          Artista cuauhtemense con gran pasión por el arte.
        </p>
        <div className={styles.redes}>
            <h3>Sígueme en mis redes</h3>
            <ul>
              <li><a href="https://www.instagram.com/alkalizmusicboxdragon/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2xl" color="#e1306c"  /></a></li>
              <li><a href="https://www.facebook.com/carollinaygoliat" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2xl" color="#007bff"/></a></li>
              <li><a href='#'><FontAwesomeIcon icon={faWhatsapp} size="2xl" color="#25D366" onClick={handleSendMessage}/></a></li>
            </ul>
          </div>
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