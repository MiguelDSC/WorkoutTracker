import React from "react";
import { WorkoutEnum } from "../../App";

type WorkoutTypeProps = {
  type: WorkoutEnum;
};

function WorkoutType(props: WorkoutTypeProps) {
  return <div>{props.type}</div>;
}

export default WorkoutType;
