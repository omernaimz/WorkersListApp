import Student from "./Student";
import styles from "./StudentList.module.css";

const StudentList = (props) => {
  return (
    <ul className={styles["movies-list"]}>
      {props.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
            profession={student.profession}
          />
        );
      })}
    </ul>
  );
};

export default StudentList;
