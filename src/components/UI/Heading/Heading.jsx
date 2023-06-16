import React from "react";
import { motion } from "framer-motion";

import styles from "./Heading.module.scss";

const Heading = ({ number, heading, className }) => {
  const classes = `${styles.heading}${className ? ` ${className}` : ""}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={classes}
    >
      <div className={styles["heading__text"]}>
        <span>{number}.</span>
        <h2>{heading}</h2>
      </div>

      <div className={styles["heading__line"]} />
    </motion.div>
  );
};

export default Heading;
