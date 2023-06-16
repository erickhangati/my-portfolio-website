import React from "react";

import Heading from "../../../components/UI/Heading/Heading";
import ProjectItem from "./ProjectItem/ProjectItem";

import styles from "./Projects.module.scss";

const Projects = ({ projects }) => {
  const featuredProjects = projects.filter(
    (project) => project.type === "Featured"
  );

  return (
    <section id="projects" className={styles.projects}>
      {/* HEADING */}
      <Heading
        number="03"
        heading="Projects"
        className={styles["projects__heading"]}
      />

      {/* PROJECTS */}
      {featuredProjects.map((project, index) => {
        const even = (index + 1) % 2 === 0;

        return (
          <ProjectItem
            key={project._id}
            project={project}
            invert={even ? true : false}
          />
        );
      })}
    </section>
  );
};

export default Projects;
