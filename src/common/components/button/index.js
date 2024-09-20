import React from "react";
import "./button.css";
import { buttonName } from "../../utils/static";

// JSX
function Button(props) {
  // console.log("props**", props);

  // local variable
  const local = "test";
  return (
    <button
      style={{ backgroundColor: props["color"] }}
      className={props.className || "button-bgcolor"}
      onClick={props.onClick}
    >
      {props.buttonName || buttonName()}
    </button>
  );
}

export default Button;
