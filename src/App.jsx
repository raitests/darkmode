import React, { useState, useEffect } from "react";
import "./App.css";
import DemoOutput from "./components/DemoOutput";
import { Button } from "./components/UI/Button";
import DarkLight from "./components/DarkLight";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [checked, setChecked] = useState((theme == "light" && "checked") || "");

  const toggleHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      setChecked("");
    } else {
      setTheme("light");
      setChecked("checked");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme} App`}>
      <DarkLight checked={checked} />
      <DemoOutput />
      <Button onClick={toggleHandler}>Click me</Button>
    </div>
  );
}

export default App;
