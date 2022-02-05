import "./App.css";
import ShowLaps from "./components/ShowLaps";
import ShowTime from "./components/ShowTime";
import Button from "./components/Button";
import { useState, useEffect } from "react";



function App() {
  const [lapNum, setLapNum] = useState(0);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const handleIncrementButton = () => {
    setLapNum(lapNum + 1);
  };

  const handleDecrementButton = () => {
    setLapNum(lapNum - 1);
  };

  const handleResetButton = () => {
    setLapNum(0);
    setTime(0);
  };

  const handleToggleRunning = () => {
    setRunning(!running);
  };

  return (
    <div className="App">
      <ShowLaps laps={lapNum} />
      <Button text="+" onClick={handleIncrementButton} />
      <Button text="-" onClick={handleDecrementButton} />
      {
        lapNum > 0 &&
        <ShowTime time={Math.round(time/lapNum)}/>
      }
      <Button text="Start" onClick={handleToggleRunning} />
      <Button text="Stop" onClick={handleResetButton}/>
    </div>
  );
}

export default App;
