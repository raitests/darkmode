import React from "react";
import classes from "./Paragraph.module.css";

const Paragraph = () => {
  return (
    <p className={classes.paragraph}>
      I stored theme in localStorage and used useState to manage the theme
      state, used that state to toggle the css from light to dark or vice-versa
      in the App.css. Using the same state, i handled another checked state for
      the checkbox icon you see at the top, it uses the same theme state to
      track the checked or unchecked state and toggles back and forth between
      sun and moon.
    </p>
  );
};

export default Paragraph;
