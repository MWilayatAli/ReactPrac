import React from "react";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("slategray");

  const colorArray = [
    "red",
    "blue",
    "green",
    "yellow",
    "indigo",
    "purple",
    "pink",
    "gray",
    "black",
  ];

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <h1 className="text-center">Background Changer</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {colorArray.map((color, index) => {
          return <Button key={index} color={color} setColor={setColor} />;
        })}
      </div>
    </div>
  );
}
export default App;
