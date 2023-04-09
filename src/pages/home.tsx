import React from "react";
import styles from "./pages.module.scss";

function Home() {
  return (
    <>
      <h1 className={styles.heading1}>
        Hi, I'm Nolan.
      </h1>
      <p className="text-white md:ml-16 text-lg mt-4 md:text-left text-center">
        I am a amateur developer and FRC (FIRST Robotics Competition) team
        member.
      </p>
    </>
  );
}

export default Home;
