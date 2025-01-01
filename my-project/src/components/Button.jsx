import React from "react";

function Button({ color, setColor }) {
  return (
    <button
      style={{ backgroundColor: color}}
      className="text-white font-bold py-2 px-4 rounded-full border-2 border-white"
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
}

export default Button;
