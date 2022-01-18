import useInput from "../../hooks/use-input";
import styles from "./AddStudentForm.module.css";

const isEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const AddStudentForm = (props) => {
  /**Destructring for useInput hook elements */

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameValueChangeHandler,
    isBluredHandler: nameIsBluredHandler,
    resetValues: nameResetValues,
  } = useInput(isEmpty);

  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageValueChangeHandler,
    isBluredHandler: ageIsBluredHandler,
    resetValues: ageResetValues,
  } = useInput(isEmpty);

  const {
    value: professionValue,
    isValid: professionIsValid,
    hasError: professionHasError,
    valueChangeHandler: professionValueChangeHandler,
    isBluredHandler: professionIsBluredHandler,
    resetValues: professionResetValues,
  } = useInput(isEmpty);

  /** check if the form is valid for the submit button */
  let formIsValid = false;
  if (nameIsValid && professionIsValid && ageIsValid) {
    formIsValid = true;
  }

  /** onSubmit */
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    /**Creating object from input values and send them to the dad compponent fetch method (AddStudent) */
    const studentObj = {
      name: nameValue,
      age: ageValue,
      profession: professionValue,
    };

    props.onAddStudent(studentObj);

    /**Reset the values to clear the inputs */
    nameResetValues();
    professionResetValues();
    ageResetValues();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles["control-group"]}>
        <div className={styles["form-control"]}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={nameValue}
            onChange={nameValueChangeHandler}
            onBlur={nameIsBluredHandler}
          />
          {nameHasError && (
            <p className={styles["error-text"]}>Please enter valid Name</p>
          )}
        </div>
        <div className={styles["form-control"]}>
          <label>Age</label>
          <input
            type="number"
            placeholder="Age"
            value={ageValue}
            onChange={ageValueChangeHandler}
            onBlur={ageIsBluredHandler}
          />
          {ageHasError && (
            <p className={styles["error-text"]}>Please enter valid Age</p>
          )}
        </div>
        <div className={styles["form-control"]}>
          <label>Profession</label>
          <input
            type="text"
            placeholder="Profession"
            value={professionValue}
            onChange={professionValueChangeHandler}
            onBlur={professionIsBluredHandler}
          />
          {professionHasError && (
            <p className={styles["error-text"]}>
              Please enter valid Profession
            </p>
          )}
        </div>
        <div className={styles["form-actions"]}>
          <button
            disabled={!formIsValid}
            // onClick={() => props.onAddUserFromForm(nameValue, nameValue, nameValue)}
          >
            Add Student
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddStudentForm;
