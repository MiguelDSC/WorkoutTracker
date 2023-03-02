import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Routes/HomePage";
import Navbar from "./components/Navbar/Navbar";
import WorkoutPage from "./Routes/WorkoutPage";
import { WorkoutEnum } from "./SetService/Setservice";

function App() {
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
