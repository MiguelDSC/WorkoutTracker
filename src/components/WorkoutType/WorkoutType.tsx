import React from "react";
import { WorkoutEnum } from "../../App";
import styles from "./workoutType.module.css";

type WorkoutTypeProps = {
  type: WorkoutEnum;
  icon: string;
};

function WorkoutType(props: WorkoutTypeProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBox}>
        <img className={styles.icons} src={props.icon} alt="" />
        <p className={styles.title}>{props.type}</p>
      </div>
    </div>
  );
}

export default WorkoutType;
