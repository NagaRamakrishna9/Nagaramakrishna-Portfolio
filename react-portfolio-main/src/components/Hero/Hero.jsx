import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nagaramakrishna</h1>
        <p className={styles.description}>
        I am a Full-Stack Java Developer with 1 year of experience in building web applications using 
        Java Spring Boot and React.js, focusing on creating efficient and responsive solutions.
        </p>
        <div className={styles.buttonContainer}>
        <a href="mailto:nagaramakrishnam@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a 
            href="/Nagaramakrishnaj.pdf" 
            download="Nagaramakrishna_Resume.pdf" 
            className={styles.resumeBtn}
          >
            Download Resume
          </a>
          </div>
      </div>
      <img
        src={getImageUrl("about/round.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
