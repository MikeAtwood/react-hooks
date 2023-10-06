import React, { useState, useEffect } from "react";
import Count from "./components/Effect";
import Button from "./components/Buttons"
import Clock from "./components/Clock";
import "./index.css"

const App = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const square = document.getElementById("myDiv")
    const changeColorOnClick = (event) => {
      if (event.target === square) {
        if (color === "black") {
          setColor("red");
        } else {
          setColor("black");
        }
      }
    };
    
    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div className="main-container">
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
      <Count />
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
      <Clock />
    </div>
  );
};

export default App;