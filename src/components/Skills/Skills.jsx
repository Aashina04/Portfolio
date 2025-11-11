import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      {/* Technical Skills */}
      <div className={styles.section}>
        <h3 className={styles.subTitle}>Technical Skills</h3>
        <div className={styles.skillsGrid}>
          {skills.technicalSkills.map((skill, id) => (
            <div key={id} className={styles.skillCard}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className={styles.section}>
        <h3 className={styles.subTitle}>Soft Skills</h3>
        <div className={styles.skillsGrid}>
          {skills.softSkills.map((skill, id) => (
            <div key={id} className={styles.skillCard}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
