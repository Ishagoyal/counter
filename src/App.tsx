import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleStart = () => {};

  const handleReset = () => {};

  return (
    <>
      <div className="card">
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleReset()}>Reset</button>
        <div>{count}</div>
      </div>
    </>
  );
}

export default App;
