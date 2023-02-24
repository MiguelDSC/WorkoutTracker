import { WorkoutEnum } from "../App";
import GreetHeader from "../components/GreetHeader/GreetHeader";
import WorkoutType from "../components/WorkoutType/WorkoutType";
import styles from "./home.module.css";
import chest from "../assets/icons/chest.png";
import pull from "../assets/icons/pull.png";
import squat from "../assets/icons/squat.png";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <GreetHeader />
      </div>
      {/* 3 workout types */}

      <div className={styles.workoutTypeSelector}>
        <WorkoutType type={WorkoutEnum.UPPER_CHEST} icon={chest} />
        <WorkoutType type={WorkoutEnum.UPPER_BACK} icon={pull} />
        <WorkoutType type={WorkoutEnum.LEGS} icon={squat} />
      </div>
    </div>
  );
}

export default Home;
