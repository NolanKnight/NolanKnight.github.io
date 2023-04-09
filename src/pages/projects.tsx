import React from "react";
import styles from "./pages.module.scss";

function Projects() {
  return (
    <>
      <h1 className={styles.heading1}>
        My Projects
      </h1>
      <p className="text-white md:ml-16 text-lg mt-4 md:text-left text-center">
        I love making websites, programs, and video games. Checkout some of my
        projects here.
      </p>
    </>
  );
}

export default Projects;
