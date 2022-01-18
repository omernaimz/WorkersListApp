import styles from "./Card.module.css";

const Card = (props) => {
  return <li className={styles.student}>{props.children}</li>;
};

export default Card;
