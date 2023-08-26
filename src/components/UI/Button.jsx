import React from "react";
import classes from "./Button.module.css";

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${props.classes}`}
    >
      {props.children}
    </button>
  );
};
