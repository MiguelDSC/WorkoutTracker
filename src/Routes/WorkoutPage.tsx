import { Link } from "react-router-dom";
import { WorkoutEnum } from "../App";
import WorkoutItem from "../components/WorkoutItem/WorkoutItem";

// const upperChest = {
//   excersize_1: {
//     id: 1,
//     name: "incline press",
//     setList: {
//       id: 1,
//       sets: [
//         {
//           id: 1,
//           previous: "7kg x 10",
//           kg: "",
//           reps: "",
//           save: "",
//         },
//       ],
//     },
//   },
// };

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

  if (props.type == WorkoutEnum.UPPER_CHEST) {
    console.log("hier");

    <>
      {
        (content = upper_chest.map((item, index) => {
          return (
            <div key={index}>
              <WorkoutItem name={item} />
            </div>
          );
        }))
      }
    </>;
  }
  if (props.type == WorkoutEnum.UPPER_BACK) {
    <>
      {
        (content = upper_back.map((item, index) => {
          return (
            <div key={index}>
              <WorkoutItem name={item} />;
            </div>
          );
        }))
      }
    </>;
  }
  if (props.type == WorkoutEnum.LEGS) {
    <>
      {
        (content = legs.map((item, index) => {
          return (
            <div key={index}>
              <WorkoutItem name={item} />
            </div>
          );
        }))
      }
    </>;
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
