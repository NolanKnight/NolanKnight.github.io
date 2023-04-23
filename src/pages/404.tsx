import React from "react";
import styles from "./pages.module.scss";

function FourZeroFour() {
  return (
    <>
      <h1 className={styles.heading1}>404</h1>
      <p className="mt-4 text-center text-lg text-white md:ml-16 md:text-left">
        Page not found.
      </p>
    </>
  );
}

export default FourZeroFour;
