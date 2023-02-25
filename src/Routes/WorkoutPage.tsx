import React from "react";
import { WorkoutEnum } from "../App";
import WorkoutType from "../components/WorkoutType/WorkoutType";

type WorkoutPageProps = {
  type: WorkoutEnum;
};

function WorkoutPage(props: WorkoutPageProps) {
  return <div>you selected {props.type}</div>;
}

export default WorkoutPage;
