import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json"; // Assuming you have an education.json file
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <img
                  src={getImageUrl(educationItem.imageSrc)}
                  alt={`${educationItem.institution} Logo`}
                />
                <div className={styles.educationItemDetails}>
                  <h3>{`${educationItem.degree}, ${educationItem.institution}`}</h3>
                  <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                  <ul>
                    {educationItem.courses.map((course, id) => {
                      return <li key={id}>{course}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
