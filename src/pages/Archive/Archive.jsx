import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { motion } from "framer-motion";

import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import IconLinks from "../../components/UI/IconLinks/IconLinks";
import Contact from "../../components/Contact/Contact";

import styles from "./archive.module.scss";
import { useActionData } from "react-router-dom";

const Archive = () => {
  const [projects, setProjects] = useState();

  const data = useActionData();
  if (data) console.log(data);

  useEffect(() => {
    const query = "*[_type == 'projects'] | order(date desc)";
    client.fetch(query).then((data) => setProjects(data));
  }, []);

  if (!projects) return <LoadingSpinner />;

  // TECHNOLOGIES CELL
  const Technology = ({ tech, hideSeparator }) => {
    return (
      <div className={styles.technology}>
        <span className={styles["technology__name"]}>{tech}</span>
        <span
          className={`${styles["technology__separator"]}${
            hideSeparator ? ` ${styles.hide}` : ""
          }`}
        >
          .
        </span>
      </div>
    );
  };

  // PROJECT ROW
  const ProjectData = ({ project }) => {
    const year = project.date.split("-").at(0);

    return (
      <tr className={styles["archive__project"]}>
        <td className={styles["archive__project-year"]}>{year}</td>
        <td className={styles["archive__project-title"]}>{project.name}</td>
        <td className={styles["archive__project-technologies"]}>
          {project.technologies.map((tech, index) => (
            <Technology
              key={tech + index}
              tech={tech}
              hideSeparator={index + 1 === project.technologies.length}
            />
          ))}
        </td>
        <td className={styles["archive__project-links"]}>
          <IconLinks project={project} />
        </td>
      </tr>
    );
  };

  return (
    <>
      <section className={styles.archive}>
        {/* HEADING */}
        <div className={styles["archive__heading"]}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Archive
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            A big list of things I've worked on
          </motion.h2>
        </div>

        {/* TABLE */}
        <motion.table
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className={styles["archive__table"]}
        >
          <thead>
            <tr>
              <th>Year</th>
              <th>Title</th>
              <th className={styles["archive__table-built-with"]}>
                Built with
              </th>
              <th>Links</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <ProjectData project={project} key={project._id} />
            ))}
          </tbody>
        </motion.table>
      </section>

      {/* CONTACT SECTION */}

      <Contact />
    </>
  );
};

export default Archive;
