import { useState } from "react";
import "./App.css";

export enum WorkoutEnum {
  UPPER_CHEST = "UPPER_CHEST",
  UPPER_BACK = "UPPER_BACK",
  LEGS = "LEGS",
}

function App() {
  const [selectedType, setSelectedType] = useState<WorkoutEnum>();

  return <div className="App">{/* greet user */}</div>;
}

export default App;
