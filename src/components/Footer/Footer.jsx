import React from "react";

import FooterIcons from "./FooterIcons/FooterIcons";
import FooterContact from "./FooterContact/FooterContact";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* FOOTER ICONS */}
      <FooterIcons />

      {/* FOOTER CONTACT */}
      <FooterContact />
    </footer>
  );
};

export default Footer;
