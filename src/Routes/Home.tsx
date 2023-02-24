import { WorkoutEnum } from "../App";
import GreetHeader from "../components/GreetHeader/GreetHeader";
import WorkoutType from "../components/WorkoutType/WorkoutType";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GreetHeader />
      </div>
      {/* 3 workout types */}

      <div className={styles.workoutTypeSelector}>
        <WorkoutType type={WorkoutEnum.UPPER_CHEST} />
        <WorkoutType type={WorkoutEnum.UPPER_BACK} />
        <WorkoutType type={WorkoutEnum.LEGS} />
      </div>
    </div>
  );
}

export default Home;
