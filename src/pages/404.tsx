import React from "react";
import styles from "./pages.module.scss";

function FourZeroFour() {
  return (
    <>
      <h1 className={styles.heading1}>
        404
      </h1>
      <p className="text-white md:ml-16 text-lg mt-4 md:text-left text-center">
        Page not found.
      </p>
    </>
  );
}

export default FourZeroFour;
