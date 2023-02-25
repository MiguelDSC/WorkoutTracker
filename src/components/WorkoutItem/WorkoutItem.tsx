import React from "react";
import styles from "./WorkoutItem.module.css";

type WorkoutItemProps = {
  name: string;
};

function WorkoutItem(props: WorkoutItemProps) {
  return (
    <>
      <h3>{props.name}</h3>
      <table className={styles.table}>
        <tr>
          <th>SET</th>
          <th>PREVIOUS</th>
          <th>KG</th>
          <th>REPS</th>
          <th>SAVE</th>
        </tr>
        <tr>
          <td>
            <p>1</p>
          </td>

          <td>
            <p>55kg x 7</p>
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
        <tr>
          <td>
            <p>2</p>
          </td>

          <td>
            <p>55kg x 7</p>
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
        <tr>
          <td>
            <p>3</p>
          </td>

          <td>
            <p>55kg x 7</p>
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
        <tr>
          <td>
            <p>4</p>
          </td>

          <td>
            <p>55kg x 7</p>
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      </table>
    </>
  );
}

export default WorkoutItem;
