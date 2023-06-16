import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import Button from "../../../UI/Button/Button";
import { VscChromeClose } from "react-icons/vsc";

import styles from "./MenuOverlay.module.scss";

const MobileMenu = ({ handleIconClick }) => {
  return (
    <nav className={`${styles.overlay} overlay`}>
      <motion.div
        className={styles.menu}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 200, transition: { duration: 0.3 } }}
      >
        {/* CLOSE ICON */}
        <VscChromeClose
          onClick={handleIconClick}
          className={styles["close-icon"]}
        />

        <ul>
          <li onClick={handleIconClick}>
            <HashLink to="#about">
              01. <span>About</span>
            </HashLink>
          </li>

          <li onClick={handleIconClick}>
            <HashLink to="#experience">
              02. <span>Experience</span>
            </HashLink>
          </li>

          <li onClick={handleIconClick}>
            <HashLink to="#projects">
              03. <span>Projects</span>
            </HashLink>
          </li>

          <li onClick={handleIconClick}>
            <HashLink to="#contact">
              04. <span>Contact</span>
            </HashLink>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <Button>Resume</Button>
      </motion.div>
    </nav>
  );
};

const MenuOverlay = ({ handleIconClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <MobileMenu handleIconClick={handleIconClick} />,
        document.getElementById("menu-root")
      )}
    </>
  );
};

export default MenuOverlay;
