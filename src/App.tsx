import "./App.css";
import GreetHeader from "./components/GreetHeader/GreetHeader";
import WorkoutType from "./components/WorkoutType/WorkoutType";

export enum WorkoutEnum {
  UPPER_CHEST = "UPPER_CHEST",
  UPPER_BACK = "UPPER_BACK",
  LEGS = "LEGS",
}

function App() {
  return (
    <div className="App">
      {/* greet user */}
      <GreetHeader />

      {/* 3 workout types */}
      <WorkoutType type={WorkoutEnum.UPPER_CHEST} />
      <WorkoutType type={WorkoutEnum.UPPER_BACK} />
      <WorkoutType type={WorkoutEnum.LEGS} />
    </div>
  );
}

export default App;
