import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { client } from "../../../client";

import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import Button from "../../../components/UI/Button/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'hero']";
    client.fetch(query).then((data) => setData(data));
  }, []);

  const [hero] = data;

  if (!hero) return <LoadingSpinner />;

  return (
    <section className={styles.hero}>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {hero.heading}.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {hero.subHeading}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className={styles["hero__description"]}
      >
        <p>{hero.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <HashLink to="#projects">
          <Button>View My Projects</Button>
        </HashLink>
      </motion.div>
    </section>
  );
};

export default Hero;
