import React from "react";
import { urlFor } from "../../../../client";
import { motion } from "framer-motion";

import IconLinks from "../../../../components/UI/IconLinks/IconLinks";
import styles from "./ProjectItem.module.scss";

const ProjectItem = ({ project, invert }) => {
  return (
    <article className={styles.item}>
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${styles["item__image"]}${
          invert ? ` ${styles.invert}` : ""
        }`}
      >
        <a href={project.liveLink} target="_blank" rel="noreferrer noopener">
          <img src={urlFor(project.screenShot)} alt={project.name} />
        </a>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`${styles["item__description"]}${
          invert ? ` ${styles.invert}` : ""
        }`}
      >
        <span>{project.type} Project</span>

        <h2>{project.name}</h2>

        <div className={styles["item__description-text"]}>
          <p>{project.description}</p>
        </div>

        <ul className={styles["item__description-technologies"]}>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <IconLinks
          project={project}
          className={styles["item__description-icons"]}
        />
      </motion.div>
    </article>
  );
};

export default ProjectItem;
