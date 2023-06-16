import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { RxExternalLink } from "react-icons/rx";
import { SlSocialYoutube } from "react-icons/sl";

import styles from "./IconLinks.module.scss";

const IconLinks = ({ project, className }) => {
  const classes = `${styles["icon-links"]}${className ? ` ${className}` : ""}`;

  return (
    <div className={classes}>
      {project.gitHub && project.gitHub.length > 0 && (
        <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
          <VscGithubAlt className={styles["icon-links__icon"]} />
        </a>
      )}

      {project.liveLink && project.liveLink.length > 0 && (
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <RxExternalLink className={styles["icon-links__icon"]} />
        </a>
      )}

      {project.youtube && project.youtube.length > 0 && (
        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
          <SlSocialYoutube className={styles["icon-links__icon"]} />
        </a>
      )}
    </div>
  );
};

export default IconLinks;
