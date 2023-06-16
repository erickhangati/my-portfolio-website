import React, { useState, useEffect } from "react";
import { client, urlFor } from "../../../client";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import Heading from "../../../components/UI/Heading/Heading";
import styles from "./About.module.scss";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'about']";
    client.fetch(query).then((data) => setData(data));
  }, []);

  const [about] = data;

  if (!about) return <LoadingSpinner />;

  return (
    <section className={styles.about} id="about">
      {/* HEADING */}
      <Heading number="01" heading={about.heading} />

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={styles["about__description"]}
      >
        {about.description.map((text, index) => (
          <p key={text + index}>{text}</p>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {about.techIntro}
        </motion.p>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles["about__recent-technologies"]}
        >
          {about.tech.map((tech, index) => (
            <li key={tech + index}>
              <BsArrowRightShort /> {tech}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles["about__image"]}
      >
        <img src={urlFor(about.profileImg)} alt="" />
      </motion.div>
    </section>
  );
};

export default About;
