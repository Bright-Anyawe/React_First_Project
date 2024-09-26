import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function BackgroundApp() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, increaseCount] = useState(1);


  const onButtonClick = (color) => () => {
      setBackgroundColor(color);
      handleCount()
    };
    
  function handleCount() {
      
    increaseCount(count + 1)
    
      console.log(` background color has changed ${count} times `);
    }
        // return <h1> {`${countFigure} has been clicked`} </h1>;
    

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h3>
        {count == 1
          ? `Initial background color`
          : `background color has change ${""} ${count}  ${""}times`}
      </h3>
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
