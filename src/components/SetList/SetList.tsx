import React from "react";
import { WorkoutEnum } from "../../App";
import SetItem from "../SetItem/SetItem";

type SetListProps = {
  workoutItemId: number;
  selectedWorkoutType: WorkoutEnum;
};

function SetList(props: SetListProps) {
  return (
    <>
      {/* set 1 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          setId={1}
        />
      </tr>
      {/* set 2 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          setId={2}
        />
      </tr>
      {/* set 3 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          setId={3}
        />
      </tr>
      {/* set 4 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          setId={4}
        />
      </tr>
    </>
  );
}

export default SetList;
