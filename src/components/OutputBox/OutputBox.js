// the output html/ui element to be rendered according to the input json

import css from "./OutputBox.module.css";

function OutputBox(props) {
  return (
    <div className={css.main}>
      <h1>{props.label}</h1>
    </div>
  );
}

export default OutputBox;
