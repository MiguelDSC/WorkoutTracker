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
            <a href="#">
              <li>Workout Select</li>
            </a>
            <a href="#">
              <li>Logout</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Root;
