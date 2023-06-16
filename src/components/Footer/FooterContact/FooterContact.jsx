import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import styles from "./FooterContact.module.scss";

const FooterContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.5 }}
      className={styles["footer-contact"]}
    >
      {/* CONTACT */}
      <a href="mailto:ekhangati@gmail.com">
        <motion.p
          initial={{ y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          ekhangati@gmail.com
        </motion.p>
      </a>

      {/* VERTICAL LINE */}
      <div className={styles["footer-contact__hr"]} />
    </motion.div>
  );
};

export default FooterContact;
