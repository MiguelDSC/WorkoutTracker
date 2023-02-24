import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Navbar from "./Routes/Navbar";

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
      </Routes>
    </>
  );
}

export default App;
