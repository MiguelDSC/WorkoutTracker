import styles from "./navbar.module.css";

function Root() {
  return (
    <>
      <nav>
        <div id={styles.menuToggle}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id={styles.menu}>
            <div id={styles.innerMenu}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Root;
