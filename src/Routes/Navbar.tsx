import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Root() {
  return (
    <nav role="navigation">
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

export default Root;
