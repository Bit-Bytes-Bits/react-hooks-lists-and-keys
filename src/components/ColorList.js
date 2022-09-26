import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map( (color) =>{
    return <li key={color} style={{color: color }}>{color}</li>
  })

  const colorElements2 = colors.map((color) => {
    return <ColorItem key={color} color={color}/>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
      {colorElements}
      </ol>
      <h3>Using ColorItem component to display colors</h3>
      <ol>
      {colorElements2}
      </ol>
    </div>
  );
}

export default ColorList;
