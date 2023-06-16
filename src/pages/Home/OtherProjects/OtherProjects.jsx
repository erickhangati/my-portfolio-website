import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./OtherProjects.module.scss";

const OtherProjects = ({ projects }) => {
  const filteredProjects = projects.filter(
    (project) => project.type === "Noteworthy"
  );

  return (
    <section className={styles["other-projects"]}>
      <div className={styles["other-projects__heading"]}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Other Noteworthy Projects
        </motion.h2>

        <Link to="archive">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            view archived projects
          </motion.h3>
        </Link>
      </div>

      {/* PROJECTS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles["other-projects__cards"]}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default OtherProjects;
