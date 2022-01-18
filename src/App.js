import { useCallback, useEffect, useState } from "react";
import "./App.css";
import AddStudent from "./components/Students/AddStudent";
import StudentList from "./components/Students/StudentList";
import Header from "./components/UI/Header";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudentsHandler = useCallback(async () => {
    const response = await fetch(
      "https://react-api-44705-default-rtdb.firebaseio.com/students.json"
    );

    const data = await response.json();

    console.log("data:");
    console.log(data);

    const loadedStudents = [];

    for (const key in data) {
      console.log("key:");
      console.log(key);
      loadedStudents.push({
        id: key,
        name: data[key].name,
        age: data[key].age,
        profession: data[key].profession,
      });
    }
    setStudents(loadedStudents);
    console.log("students:");
    console.log(students);
  }, []);

  console.log(students);

  let content = <p>There's no data Avialable</p>;
  if (students.length > 0) {
    content = <StudentList students={students} />;
    console.log(content);
  }

  useEffect(() => {
    fetchStudentsHandler();
  }, [fetchStudentsHandler]);

  return (
    <>
      <Header />
      <div className="app">
        <AddStudent renderList={fetchStudentsHandler} />
        <section>{content}</section>
      </div>
    </>
  );
}

export default App;
