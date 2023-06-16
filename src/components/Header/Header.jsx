import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

import styles from "./Header.module.scss";

const Header = () => {
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPostion = window.scrollY;
      const isScrolling = currentScrollPostion > lastScrollPosition;

      setIsHeaderVisible(!isScrolling);
      setLastScrollPosition(currentScrollPostion);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  // SROLL TO THE TOP ICON CLICK HANDLER
  const scrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      {isHeaderVisible && (
        <motion.header
          className={`${styles.header}${
            lastScrollPosition > 1 ? ` ${styles.scrolled}` : ""
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* LOGO */}
          <Link to="/" onClick={scrollToTopHandler}>
            <Logo lastScrollPosition={lastScrollPosition} />
          </Link>

          {/* DESKTOP MENU */}
          <DesktopMenu lastScrollPosition={lastScrollPosition} />

          {/* MOBILE MENU */}
          <MobileMenu lastScrollPosition={lastScrollPosition} />
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
