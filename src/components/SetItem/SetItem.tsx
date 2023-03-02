import React, { useState } from "react";
import { WorkoutEnum } from "../../App";
import styles from "../WorkoutItem/WorkoutItem.module.css";

export type SetInterface = {
  WorkoutType: WorkoutEnum;
  workoutId: number;
  setId: number;
  kg: number;
  reps: number;
};

type SetItemProps = {
  selectedWorkoutType: WorkoutEnum;
  workoutId: number;
  setId: number;
  previous?: string;
};

function SetItem(props: SetItemProps) {
  const [data, setData] = useState<SetInterface>({
    WorkoutType: props.selectedWorkoutType,
    workoutId: props.workoutId,
    setId: props.setId,
    kg: 0,
    reps: 0,
  });

  const saveHandler = (set: SetInterface) => {
    if (set.reps == 0) {
      console.log("no valid set has been provided, try again");
      return;
    }
    console.log(set);
  };

  return (
    <>
      <td className={styles.title}>
        <p>{props.setId}</p>
      </td>

      <td>
        <p>{props.previous}</p>
      </td>
      <td>
        <input
          className={styles.input}
          type="number"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, kg: +e.target.value };
            });
          }}
        />
      </td>
      <td>
        <input
          className={styles.input}
          type="number"
          onChange={(e) => {
            setData((prevState) => {
              return { ...prevState, reps: +e.target.value };
            });
          }}
        />
      </td>
      <td>
        <button
          className={styles.styleButton}
          onClick={() => saveHandler(data)}
        >
          Save
        </button>
      </td>
    </>
  );
}

export default SetItem;
