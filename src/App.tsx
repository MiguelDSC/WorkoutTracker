import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/HomePage";
import Navbar from "./Routes/Navbar";
import WorkoutPage from "./Routes/WorkoutPage";

export enum WorkoutEnum {
  UPPER_CHEST = "UPPER_CHEST",
  UPPER_BACK = "UPPER_BACK",
  LEGS = "LEGS",
}

function App() {
  const [selectedType, setSelectedType] = useState<WorkoutEnum>();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/workout/upper-chest"
          element={<WorkoutPage type={WorkoutEnum.UPPER_CHEST} />}
        />
        <Route
          path="/workout/upper-back"
          element={<WorkoutPage type={WorkoutEnum.UPPER_BACK} />}
        />
        <Route
          path="/workout/legs"
          element={<WorkoutPage type={WorkoutEnum.LEGS} />}
        />
      </Routes>
    </>
  );
}

export default App;
