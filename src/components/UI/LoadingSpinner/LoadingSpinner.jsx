import React from "react";

import spinner from "../../../assets/svg/loadingSpinner.svg";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles["loading-spinner"]}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default LoadingSpinner;
