// a container component
import css from "./Card.module.css";
function Card(props) {
  return <div className={css.main}>{props.children}</div>;
}

export default Card;
