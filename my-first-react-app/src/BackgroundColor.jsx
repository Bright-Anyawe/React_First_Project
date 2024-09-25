import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function BackgroundApp() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, increaseCount] = useState(0);


  const onButtonClick = (color) => () => {
      setBackgroundColor(color);
      handleCount()
    };
    
    function handleCount() {
     const countFigure =  increaseCount(count + 1)
        return <h1> {`${countFigure} has been clicked`} </h1>;
    }

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default BackgroundApp;
