import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aashina Saxena</h1>
        <p className={styles.description}>
          I'm an innovative Software Developer crafting seamless digital experiences through clean code and modern technologies.
        </p>
        <p>Reach out if you'd like to learn more!</p>
        <a href="mailto:aashinasaxena14@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
            href="/AashinaSaxena_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.contactBtn}
          >
            View Resume
          </a>
      </div>
      <img
        src={getImageUrl("hero/photo.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};