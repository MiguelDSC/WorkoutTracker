import { WorkoutEnum } from "../App";
import GreetHeader from "../components/GreetHeader/GreetHeader";
import WorkoutType from "../components/WorkoutType/WorkoutType";

function Home() {
  return (
    <>
      <GreetHeader />
      {/* 3 workout types */}
      <WorkoutType type={WorkoutEnum.UPPER_CHEST} />
      <WorkoutType type={WorkoutEnum.UPPER_BACK} />
      <WorkoutType type={WorkoutEnum.LEGS} />
    </>
  );
}

export default Home;
