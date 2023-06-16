import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, type, className }) => {
  const classes = `${styles.button}${className ? ` ${className}` : ""}`;
  return (
    <button type={type ? "submit" : "button"} className={classes}>
      {children}
    </button>
  );
};

export default Button;
