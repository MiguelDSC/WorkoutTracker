import React from "react";

import styles from "./greet.module.css";

function GreetHeader() {
  return (
    <div>
      <div>
        <h1>Hi Miguel,</h1>
        <div>
          <h3>Choose Workout</h3>
        </div>
        <span className={styles.lines}></span>
        <span className={styles.lines} id={styles.lowerLine}></span>
      </div>
    </div>
  );
}

export default GreetHeader;
