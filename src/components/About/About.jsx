import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <p className={styles.aboutItemText}>
        Hello there! I'm <strong>Aashina Saxena</strong>, a passionate{" "}
        <strong>Full Stack Developer</strong> and{" "}
        <strong>Computer Science Engineering student</strong> at{" "}
        <strong>VIT Bhopal University</strong> with a CGPA of 9.28. I thrive on
        building digital solutions that merge functionality, creativity, and
        performance. From designing responsive interfaces to implementing secure
        and efficient backend systems, I enjoy bringing ideas to life through
        clean and purposeful code.
      </p>

      <p className={styles.aboutItemText}>
        I specialize in the{" "}
        <strong>
          MERN Stack (MongoDB, Express.js, React.js, Node.js)
        </strong>{" "}
        and have hands-on experience with technologies like{" "}
        <strong>Java , JavaScript , Tailwind CSS , Bootstrap, and SQL</strong>.
        I love working on projects that challenge me to learn something new —
        whether it’s optimizing database performance, integrating APIs, or
        crafting engaging user experiences.
      </p>

      <div className={styles.aboutItemText}>
        <p>Some of my key projects include:</p>
        <ul>
          <li>
            <strong>GreenCart:</strong> A full-stack grocery delivery platform
            with real-time order tracking, secure payments via Razorpay, and a
            robust admin dashboard.
          </li>
          <li>
            <strong>Shopoholic:</strong> An inventory management system
            supporting seamless CRUD operations, intuitive product management,
            and responsive UI design.
          </li>
          <li>
            <strong>Music Player:</strong> A lightweight, browser-based
            interactive music player built with HTML, CSS, and JavaScript.
          </li>
        </ul>
      </div>

      <p className={styles.aboutItemText}>
        I have completed <strong>AWS Solutions Architect Associate</strong>{" "}
        certification program along with a{" "}
        <strong>MERN Full Stack Development Certification</strong> from Ethnus,
        where I honed my cloud and web development skills. I’ve solved{" "}
        <strong>300+ coding problems</strong> on platforms like{" "}
        <strong>LeetCode</strong> and <strong>GeeksforGeeks</strong>,
        continuously strengthening my problem-solving and algorithmic thinking
        abilities.
      </p>

      <p className={styles.aboutItemText}>
        I believe in <strong>continuous learning</strong> and{" "}
        <strong>collaborative innovation</strong>. My long-term goal is to work
        on impactful tech projects that combine user-centric design with
        scalable architecture — creating solutions that simplify lives and
        inspire change.
      </p>

      <p className={styles.aboutItemText}>
        When I’m not coding, you’ll probably find me sketching, painting, or
        exploring new design ideas. I enjoy blending my artistic side with my
        technical skills to create visually appealing and meaningful
        applications.
      </p>

      <p className={styles.aboutItemText}>
        <em>
          “For me, technology is not just about code — it’s about crafting
          experiences that connect people, purpose, and progress.”
        </em>
      </p>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I build reliable, scalable, and efficient software solutions that
      integrate logic, performance, and clean architecture to solve real-world
      problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I create responsive and visually appealing interfaces that
                enhance user experience and accessibility.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I design secure and optimized APIs with efficient data flow and
                strong authentication systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
