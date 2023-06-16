import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import Button from "../../UI/Button/Button";
import styles from "./DesktopMenu.module.scss";

const DesktopMenu = ({ lastScrollPosition }) => {
  return (
    <div className={styles["desktop-menu"]}>
      <nav>
        <ul className={styles["desktop-menu__menu"]}>
          <motion.li
            initial={{
              y: lastScrollPosition === 0 ? -100 : 0,
              opacity: lastScrollPosition === 0 ? 1 : 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: lastScrollPosition === 0 ? 0.5 : 0,
              delay: lastScrollPosition === 0 ? 0.1 : 0,
            }}
          >
            <HashLink to="#about">
              01. <span>About</span>
            </HashLink>
          </motion.li>

          <motion.li
            initial={{
              y: lastScrollPosition === 0 ? -100 : 0,
              opacity: lastScrollPosition === 0 ? 1 : 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: lastScrollPosition === 0 ? 0.5 : 0,
              delay: lastScrollPosition === 0 ? 0.2 : 0,
            }}
          >
            <HashLink to="#experience">
              02. <span>Experience</span>
            </HashLink>
          </motion.li>

          <motion.li
            initial={{
              y: lastScrollPosition === 0 ? -100 : 0,
              opacity: lastScrollPosition === 0 ? 1 : 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: lastScrollPosition === 0 ? 0.5 : 0,
              delay: lastScrollPosition === 0 ? 0.3 : 0,
            }}
          >
            <HashLink to="#projects">
              03. <span>Projects</span>
            </HashLink>
          </motion.li>

          <motion.li
            initial={{
              y: lastScrollPosition === 0 ? -100 : 0,
              opacity: lastScrollPosition === 0 ? 1 : 0,
            }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: lastScrollPosition === 0 ? 0.5 : 0,
              delay: lastScrollPosition === 0 ? 0.4 : 0,
            }}
          >
            <HashLink to="#contact">
              04. <span>Contact</span>
            </HashLink>
          </motion.li>
        </ul>
      </nav>

      <motion.div
        initial={{
          y: lastScrollPosition === 0 ? -100 : 0,
          opacity: lastScrollPosition === 0 ? 1 : 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: lastScrollPosition === 0 ? 0.5 : 0,
          delay: lastScrollPosition === 0 ? 0.5 : 0,
        }}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Resume</Button>
        </a>
      </motion.div>
    </div>
  );
};

export default DesktopMenu;
