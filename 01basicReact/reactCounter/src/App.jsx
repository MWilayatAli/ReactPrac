import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    if (count < 20) {
      setCount(count + 1);
    }
  }

  function decreaseCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>
        My first counter with React <div>{count}</div>
      </h1>
      <div className="card">
        <button onClick={increaseCount}>Add</button>
        {/* just for a little gap */}{" "}
        <button onClick={decreaseCount}>Subtract</button>
      </div>
    </>
  );
}

export default App;
