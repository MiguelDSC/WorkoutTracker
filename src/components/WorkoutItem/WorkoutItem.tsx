import React, { useState } from "react";
import { WorkoutEnum } from "../../App";
import SetList from "../SetList/SetList";
import styles from "./WorkoutItem.module.css";

type WorkoutItemProps = {
  name: string;
  workoutId: number;
  selectedWorkoutType: WorkoutEnum;
};

function WorkoutItem(props: WorkoutItemProps) {
  return (
    <>
      <h3 className={styles.title}>{props.name}</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>SET</th>
            <th>PREVIOUS</th>
            <th>KG</th>
            <th>REPS</th>
            <th>SAVE</th>
          </tr>
          <SetList
            selectedWorkoutType={props.selectedWorkoutType}
            workoutItemId={props.workoutId}
          />
        </tbody>
      </table>
    </>
  );
}

export default WorkoutItem;
