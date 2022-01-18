import AddStudentForm from "./AddStudentForm";

const AddStudent = (props) => {
  async function addStudentHandler(student) {
    const response = await fetch(
      "https://react-api-44705-default-rtdb.firebaseio.com/students.json",
      {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    props.renderList();
  }

  return (
    <div>
      <AddStudentForm
        // onAddUserFromForm={addUserFromForm}
        onAddStudent={addStudentHandler}
      />
    </div>
  );
};

export default AddStudent;
