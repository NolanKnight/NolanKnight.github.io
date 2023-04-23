import React from "react";
import styles from "./pages.module.scss";

function FRC() {
  return (
    <>
      <h1 className={styles.heading1}>FIRST Robotics Competition</h1>
      <p className="mt-4 text-center text-lg text-white md:ml-16 md:text-left">
        FRC is a competition in which high school robotics teams compete to
        build an industrial robot in a limited amount of time that competes in a
        game with strict rules. I am part of the programming sub team on FRC
        team 973, a three-time world champion team. The programming sub team
        programs the robot to perform different actions when either the drivers
        press buttons on their controllers, or when the robot is driving itself
        in autonomous, or the first fifteen seconds of the match.
      </p>
    </>
  );
}

export default FRC;
