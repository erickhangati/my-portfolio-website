import React from "react";
import { VscFolder } from "react-icons/vsc";
import { motion } from "framer-motion";

import IconLinks from "../../../../components/UI/IconLinks/IconLinks";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.15 }}
      className={styles["project-card"]}
    >
      {/* ICONS */}
      <div className={styles["project-card__icons"]}>
        <VscFolder className={styles["project-card__icon-folder"]} />
        <IconLinks project={project} />
      </div>

      {/* DESCRIPTION */}
      <div className={styles["project-card__description"]}>
        <a href={project.liveLink} target="_blank" rel="noreferrer noopener">
          <h2>{project.name}</h2>
        </a>
        <p>{project.description}</p>
      </div>

      {/* TECHNOLOGIES */}
      <div className={styles["project-card__technologies"]}>
        {project.technologies.map((tech, index) => (
          <p key={tech + index}>{tech}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
