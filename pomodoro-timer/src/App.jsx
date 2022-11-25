import Timer from "./components/Timer"
import Buttons from "./components/Buttons"
import "./App.css";

import React, { useState, useEffect } from 'react';

function App() {

  const [timer, setTimer] = useState(25 * 60); // we set the timer to 25 times 60 seconds = 1500 seconds
  const [start, setStart] = useState(false);

  // Changes the Format from 0:0 to 00:00 
  const timeFormat = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    console.log(min + ":" + sec);
    return (
      (min < 10 ? "0" + min : min) // displays the minutes like 00 or 01 or 10 
      + ":" +
      (sec < 10 ? "0" + sec : sec) // displays the second like 00 or 01 or 10 
    )
  }

  const toggle = () => {
    setStart(!start);
  }

  const reset = () => {
    setTimer(25 * 60);
  }
  const add = () => {
    setTimer(timer + 60);
  }
  const substract = () => {
    setTimer(timer - 60);
  }
  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (!start && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, timer]);


  return <div className="App">
    <h1>PMDR TIMER</h1>
    <Timer timer={timer} timeFormat={timeFormat} substract={substract} add={add} />
    <Buttons start={start} toggle={toggle} reset={reset} />
  </div >;
}

export default App;
