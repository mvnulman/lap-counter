import "./App.css";
import { useState, useEffect } from "react";

const ShowLaps = (props) => {
  return (
    <p>
      {props.laps} <br />
      Laps
    </p>
  );
};

const ShowTime = (props) => {
  const time = props.time;
  const minutes = Math.round(time / 60);
  const seconds = time % 60;
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  const secondsStr = seconds < 10 ? "0" + seconds : seconds;
  return (
    <p>
      {`${minutesStr}:${secondsStr}`} <br />
      Average time per lap
    </p>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

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
