import './App.css'
import React from 'react'

const ShowLaps = (props) => {
  return (
    <p>
      {props.laps} <br />
      Laps
    </p>
  );
}

const ShowTime = (props) => {
  return (
    <p>
      {props.time} <br />
      Average time per lap
    </p>
  );
}

const Button = (props) => {
  return (
    <button>{props.text}</button>
  );
}

function App() {
  return (
    <div className="App">
    <ShowLaps laps = "12" />
    <Button text = "+" />
    <Button text = "-" />
    <ShowTime time = "01:30:00" />
    <Button text = "Start" />
    <Button text = "Stop" />
    </div>
  )
}

export default App
