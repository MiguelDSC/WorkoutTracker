import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Root() {
  return (
    <>
      <nav role="navigation">
        <div id={styles.menuToggle}>
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id={styles.menu}>
            <li>
              <Link to={`home`}>Workout Select</Link>
            </li>

            <li>
              <Link to={`logout`}>Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
