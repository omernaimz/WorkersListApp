import React from "react";
import Card from "../UI/Card";

import styles from "./Students.module.css";

const Students = (props) => {
  return (
    <Card>
      <h1>
        {<span className={styles.desc}> Name: </span>} {props.name}
      </h1>
      <h2>
        {<span className={styles.desc}> Age: </span>} {props.age}
      </h2>
      <h3>
        {<span className={styles.desc}> Profession: </span>} {props.profession}
      </h3>
    </Card>
  );
};

export default Students;
