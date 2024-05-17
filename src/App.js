import logo from "./logo.svg";
import "./App.css";
import CourseGoalList from "./components/CourseGoalList";
import { useState } from "react";
import CourseInput from "./components/CourseInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do Exercise", id: "g1" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevState) => {
      return [
        ...prevState,
        { id: Math.random().toString(), text: enteredText },
      ];
    });
  };

  const deleteHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updateGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updateGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}> No goals found. Maybe add one? </p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
