import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let’s Connect</h2>
        <p>
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:aashinasaxena14@gmail.com">
            aashinasaxena14@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/aashina-saxena"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/aashina-saxena
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
          <a
            href="https://github.com/Aashina04"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Aashina04
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetcodeIcon.png")} alt="Leetcode icon" />
          <a
            href="https://leetcode.com/u/aashinasaxena14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode.com/u/aashinasaxena14/
          </a>
        </li>
      </ul>
    </footer>
  );
};
