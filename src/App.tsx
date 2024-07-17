import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  const toggleCounter = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <>
      <div className="card">
        <p>Count: {count}</p>
        <button onClick={toggleCounter}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </>
  );
}

export default App;
