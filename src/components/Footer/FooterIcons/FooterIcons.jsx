import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import styles from "./FooterIcons.module.scss";

const FooterIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.5 }}
      className={styles["footer-icons"]}
    >
      {/* ICONS: GITHUB */}
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          to="https://github.com/erickhangati"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubAlt className={styles["footer-icons__icon"]} />
        </Link>
      </motion.div>

      {/* ICONS: LINKEDIN */}
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          to="https://www.linkedin.com/in/erickhangati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialLinkedin className={styles["footer-icons__icon"]} />
        </Link>
      </motion.div>

      {/* VERTICAL LINE */}
      <div className={styles["footer-icons__hr"]} />
    </motion.div>
  );
};

export default FooterIcons;
