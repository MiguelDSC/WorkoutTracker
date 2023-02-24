import React from "react";
import { WorkoutEnum } from "../../App";
import styles from "./workoutType.module.css";

type WorkoutTypeProps = {
  type: WorkoutEnum;
};

function WorkoutType(props: WorkoutTypeProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{props.type}</p>
    </div>
  );
}

export default WorkoutType;
