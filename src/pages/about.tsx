import React from "react";
import styles from "./pages.module.scss";

function About() {
  return (
    <>
      <h1 className={styles.heading1}>About Me</h1>
      <p className="mt-4 text-center text-lg text-white md:ml-16 md:text-left">
        I am a amateur developer and FRC (FIRST Robotics Competition) team
        member.
      </p>
    </>
  );
}

export default About;
