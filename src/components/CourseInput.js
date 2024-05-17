import styles from "./CourseInput.module.css";
import { useState } from "react";
import Button from "./Button";
function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);

    if (event.target.value.length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHabdler = (event) => {
    event.preventDefault();

    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHabdler}>
      {/* two ways to write this condition */}
      {/* <div className={"form-control " + (!isValid ? " invalid" : "")}> */}
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      <div className={styles["form-control"]}>
        {/* -------- */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* <button type="submit">Add Goal</button> */}
      <Button>Add Goal</Button>
    </form>
  );
}

export default CourseInput;
