import "./CourseGoalItem.css";

function CourseGoalItem(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}

export default CourseGoalItem;
