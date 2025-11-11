import React from "react";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>

      <div className={styles.grid}>
        {certificates.map((cert, id) => (
          <div key={id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={getImageUrl(cert.imageSrc)}
                alt={cert.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <p className={styles.date}>{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
