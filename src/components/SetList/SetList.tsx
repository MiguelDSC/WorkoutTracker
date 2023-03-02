import React, { useEffect, useState } from "react";
import { getPreviousSets, WorkoutEnum } from "../../SetService/Setservice";
import SetItem, { SetInterface } from "../SetItem/SetItem";

type SetListProps = {
  workoutItemId: number;
  selectedWorkoutType: WorkoutEnum;
};

export type PreviousSet = [
  SetInterface | null,
  SetInterface | null,
  SetInterface | null,
  SetInterface | null
];

function SetList(props: SetListProps) {
  const [previous, setPrevious] = useState<PreviousSet>([
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    (async () => {
      const previousSets = await getPreviousSets(
        props.selectedWorkoutType,
        props.workoutItemId
      );

      setPrevious(previousSets);
    })();
  }, []);

  return (
    <>
      {/* set 1 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          previous={
            previous[0] ? `${previous[0].kg}kg x ${previous[0].reps}` : ""
          }
          setId={1}
        />
      </tr>
      {/* set 2 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          previous={
            previous[1] ? `${previous[1].kg}kg x ${previous[1].reps}` : ""
          }
          setId={2}
        />
      </tr>
      {/* set 3 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          previous={
            previous[2] ? `${previous[2].kg}kg x ${previous[2].reps}` : ""
          }
          setId={3}
        />
      </tr>
      {/* set 4 */}
      <tr>
        <SetItem
          selectedWorkoutType={props.selectedWorkoutType}
          workoutId={props.workoutItemId}
          previous={
            previous[3] ? `${previous[3].kg}kg x ${previous[3].reps}` : ""
          }
          setId={4}
        />
      </tr>
    </>
  );
}

export default SetList;
