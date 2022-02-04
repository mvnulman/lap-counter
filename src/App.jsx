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
  return (
    <p>
      {props.time} <br />
      Average time per lap
    </p>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

function App() {
  const [lapNum, setLapNum] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("Called!");
    }, 1000);
  }, []);

  const increment = () => {
    setLapNum(lapNum + 1);
  };

  const decrement = () => {
    setLapNum(lapNum - 1);
  };

  return (
    <div className="App">
      <ShowLaps laps={lapNum} />
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} />
      <ShowTime time={time} />
      <Button text="Start" />
      <Button text="Stop" />
    </div>
  );
}

export default App;
