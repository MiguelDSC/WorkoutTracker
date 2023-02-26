import { Link } from "react-router-dom";
import { WorkoutEnum } from "../App";
import WorkoutItem from "../components/WorkoutItem/WorkoutItem";

type WorkoutPageProps = {
  type: WorkoutEnum;
};

const upper_chest = [
  "Incline press",
  "Lat Pulls",
  "OHP",
  "Rows",
  "Side Raises",
  "Curls",
  "Tricep Extentions",
];

const upper_back = [
  "Lat Pulls",
  "Incline Press",
  "Rows",
  "Machine Chest Press",
  "Side Raises",
  "Hammer Curls",
  "Tricep Extentions",
];

const legs = [
  "Squat",
  "Leg Press",
  "Leg Extentions",
  "Leg Curls",
  "Calf Raises",
];

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
    content = selectedWorkout?.map((item, index) => {
      return (
        <div key={index}>
          <WorkoutItem name={item} />
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
