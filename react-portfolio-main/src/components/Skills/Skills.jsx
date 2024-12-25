import React from "react";
import styles from "./Skills.module.css";  // Importing CSS module for styling
import skills from "../../data/skills.json"; // Assuming you have a skills.json file
import { getImageUrl } from "../../utils";  // Assuming you have a utility function for image URLs

export const Skills = () => {
  // Group skills by category
  const groupedSkills = {
    backend: skills.filter(skill => skill.category === "Backend"),
    frontend: skills.filter(skill => skill.category === "Frontend"),
    others: skills.filter(skill => skill.category === "Others"),
  };

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {/* Frontend Skills Card */}
        <div className={styles.skillCard}>
          <h3>Frontend</h3>
          <div className={styles.skills}>
            {groupedSkills.frontend.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillCard}>
          <h3>Backend</h3>
          <div className={styles.skills}>
            {groupedSkills.backend.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Database Skills Card */}
        <div className={styles.skillCard}>
          <h3>Others</h3>
          <div className={styles.skills}>
            {groupedSkills.others.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
