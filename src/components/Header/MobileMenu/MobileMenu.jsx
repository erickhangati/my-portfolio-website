import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

import MenuOverlay from "./MenuOverlay/MenuOverlay";
import styles from "./MobileMenu.module.scss";

const MobileMenu = ({ lastScrollPosition }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleIconClick = () => {
    setShowMobileMenu((previous) => !previous);
  };

  return (
    <div className={styles["mobile-menu"]}>
      {/* HAMBURGER ICON */}
      <motion.div
        initial={{
          y: lastScrollPosition === 0 ? -50 : 0,
          opacity: lastScrollPosition === 0 ? 0 : 1,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: lastScrollPosition === 0 ? 0.5 : 0,
          delay: lastScrollPosition === 0 ? 0.3 : 0,
        }}
        onClick={handleIconClick}
      >
        <RxHamburgerMenu className={styles["mobile-menu__icon"]} />
      </motion.div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {showMobileMenu && <MenuOverlay handleIconClick={handleIconClick} />}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
