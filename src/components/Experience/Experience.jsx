import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {history.map((item, id) => (
          <div key={id} className={styles.timelineItem}>

            <div className={styles.timelineContent}>
              <h3>{`${item.role}, ${item.organisation}`}</h3>
              <p className={styles.date}>
                {item.startDate} - {item.endDate}
              </p>
              <ul>
                {item.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
              {(item.certificateImage1 || item.certificateImage2) && (
  <div className={styles.certificateContainer}>
    {item.certificateImage1 && (
      <img
        src={getImageUrl(item.certificateImage1)}
        alt="Internship Certificate"
        className={styles.certificateImage}
      />
    )}
    {item.certificateImage2 && (
      <img
        src={getImageUrl(item.certificateImage2)}
        alt="Course Completion Certificate"
        className={styles.certificateImage}
      />
    )}
  </div>
)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
