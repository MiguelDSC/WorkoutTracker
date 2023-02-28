import React, { useState } from "react";
import styles from "./WorkoutItem.module.css";

type WorkoutItemProps = {
  name: string;
  id: number;
};

type SetInterface = {
  setId: number;
  kg: number;
  reps: number;
};

function WorkoutItem(props: WorkoutItemProps) {
  const [set1, setSet1] = useState({ setId: 1, kg: 0, reps: 0 });
  const [set2, setSet2] = useState({ setId: 2, kg: 0, reps: 0 });
  const [set3, setSet3] = useState({ setId: 3, kg: 0, reps: 0 });
  const [set4, setSet4] = useState({ setId: 4, kg: 0, reps: 0 });

  const saveHandler = (set: SetInterface) => {
    if (set.reps == 0) {
      console.log("no valid set has been provided, try again");
      return;
    }
    console.log(props.id, props.name, set);
  };

  return (
    <>
      <h3 className={styles.title}>{props.name}</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>SET</th>
            <th>PREVIOUS</th>
            <th>KG</th>
            <th>REPS</th>
            <th>SAVE</th>
          </tr>
          {/* set 1 */}
          <tr>
            <td className={styles.title}>
              <p>1</p>
            </td>

            <td>
              <p>55kg x 7</p>
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet1((prevState) => {
                    return { ...prevState, kg: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet1((prevState) => {
                    return { ...prevState, reps: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.savebutton}
                type="checkbox"
                onChange={() => {
                  saveHandler(set1);
                }}
              />
            </td>
          </tr>
          {/* set 2 */}
          <tr>
            <td>
              <p className={styles.title}>2</p>
            </td>

            <td>
              <p>55kg x 7</p>
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet2((prevState) => {
                    return { ...prevState, kg: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet2((prevState) => {
                    return { ...prevState, reps: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="checkbox"
                onChange={() => {
                  saveHandler(set2);
                }}
              />
            </td>
          </tr>
          {/* set 3 */}
          <tr>
            <td className={styles.title}>
              <p>3</p>
            </td>

            <td>
              <p>55kg x 7</p>
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet3((prevState) => {
                    return { ...prevState, kg: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet3((prevState) => {
                    return { ...prevState, reps: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="checkbox"
                onChange={() => {
                  saveHandler(set3);
                }}
              />
            </td>
          </tr>
          {/* set 4 */}
          <tr>
            <td className={styles.title}>
              <p>4</p>
            </td>

            <td>
              <p>55kg x 7</p>
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet4((prevState) => {
                    return { ...prevState, kg: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="number"
                onChange={(e) => {
                  setSet4((prevState) => {
                    return { ...prevState, reps: +e.target.value };
                  });
                }}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="checkbox"
                onChange={() => {
                  saveHandler(set4);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default WorkoutItem;
