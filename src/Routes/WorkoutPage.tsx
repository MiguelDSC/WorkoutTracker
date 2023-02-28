import { Link } from "react-router-dom";
import { WorkoutEnum } from "../App";
import WorkoutItem from "../components/WorkoutItem/WorkoutItem";
import {
  upper_chest,
  upper_back,
  legs,
} from "../components/WorkoutItem/Workouts";

type WorkoutPageProps = {
  type: WorkoutEnum;
};

function WorkoutPage(props: WorkoutPageProps) {
  let content;
  let selectedWorkout;

  switch (props.type) {
    case WorkoutEnum.UPPER_CHEST:
      selectedWorkout = upper_chest;
      break;

    case WorkoutEnum.UPPER_BACK:
      selectedWorkout = upper_back;
      break;

    case WorkoutEnum.LEGS:
      selectedWorkout = legs;
      break;

    default:
      break;
  }

  {
    content = selectedWorkout?.map((item) => {
      return (
        <div key={item.id}>
          <WorkoutItem
            selectedWorkoutType={props.type}
            workoutId={item.id}
            name={item.name}
          />
        </div>
      );
    });
  }

  return (
    <>
      <Link to="/">
        <h1>return</h1>
      </Link>

      <div>{content}</div>
    </>
  );
}

export default WorkoutPage;
