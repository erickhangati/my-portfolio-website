import React from "react";
import { motion } from "framer-motion";

const Logo = ({ lastScrollPosition }) => {
  return (
    <motion.svg
      width="100"
      height="116"
      viewBox="0 0 100 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        y: lastScrollPosition === 0 ? -100 : 0,
        opacity: lastScrollPosition === 0 ? 1 : 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: lastScrollPosition === 0 ? 0.5 : 0 }}
    >
      <circle cx="14" cy="14" r="14" fill="#41AA91" />
      <circle cx="50" cy="14" r="14" fill="#64FFDA" />
      <circle cx="86" cy="14" r="14" fill="#41AA91" />
      <circle cx="14" cy="58" r="14" fill="#41AA91" />
      <circle cx="50" cy="58" r="14" fill="#41AA91" />
      <circle cx="14" cy="102" r="14" fill="#41AA91" />
      <circle cx="50" cy="102" r="14" fill="#64FFDA" />
      <circle cx="86" cy="102" r="14" fill="#41AA91" />
    </motion.svg>
  );
};

export default Logo;
