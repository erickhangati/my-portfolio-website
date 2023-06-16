import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../../client";
import { motion } from "framer-motion";

import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import Heading from "../../../components/UI/Heading/Heading";

import styles from "./Experience.module.scss";

const Experience = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'technologies'] | order(_createdAt asc)";
    client.fetch(query).then((data) => setTechnologies(data));
  }, []);

  if (!technologies) return <LoadingSpinner />;

  return (
    <section className={styles.experience} id="experience">
      {/* HEADING */}
      <Heading number="02" heading="Technologies" />

      {/* TECHNOLOGIES */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles["experience__skills"]}
      >
        {technologies.map((tech) => (
          <div
            key={tech._id}
            className={styles["experience__skill-icon"]}
            data-tooltip={tech.name}
          >
            <img src={urlFor(tech.icon)} alt={tech.name} />
          </div>
        ))}{" "}
      </motion.div>
    </section>
  );
};

export default Experience;
