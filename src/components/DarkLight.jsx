import React, { useState } from "react";
import classes from "./DarkLight.module.css";

function DarkLight(props) {
  return (
    <div>
      <input
        id="toggle"
        className={classes.toggle}
        type="checkbox"
        {...props}
      ></input>
    </div>
  );
}

export default DarkLight;
