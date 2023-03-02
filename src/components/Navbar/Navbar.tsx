import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import chest from "../../assets/icons/chest.png";
import pull from "../../assets/icons/pull.png";
import squat from "../../assets/icons/squat.png";

chest;
function Navbar() {
  const [selectedWorkout, setSelectedWorkout] = useState("");

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedWorkout("");
        break;
      case "/workout/upper-chest":
        setSelectedWorkout(chest);
        break;

      case "/workout/upper-back":
        setSelectedWorkout(pull);
        break;

      case "/workout/legs":
        setSelectedWorkout(squat);
        break;

      default:
        "";
        break;
    }
  }, [location.pathname]);

  return (
    <nav role="navigation">
      {selectedWorkout != "" ? (
        <img className={styles.icon} src={selectedWorkout} />
      ) : (
        <></>
      )}

      <div id={styles.menuToggle}>
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id={styles.menu}>
          <li>
            <Link to={`/`}>Workout Select</Link>
          </li>

          <li>
            <Link to={`logout`}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
