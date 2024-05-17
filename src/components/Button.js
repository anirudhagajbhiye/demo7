import styles from "./Button.module.css";

function Button(props) {

    console.log(JSON.stringify(styles));
  return (
    <button type="submit" className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
