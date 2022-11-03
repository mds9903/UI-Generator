// a text area for json input

import css from "./InputBox.module.css";
function InputBox(props) {
  return (
    <div className={css.main}>
      <h1>{props.label}</h1>
      <textarea
        cols={50}
        rows={25}
        placeholder="Enter your json here"
      ></textarea>
    </div>
  );
}

export default InputBox;
