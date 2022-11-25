import Timer from "./components/Timer"
import Buttons from "./components/Buttons"
import "./App.css";

import React, { useState, useRef, useEffect } from 'react';

function App() {

  const [timer, setTimer] = useState(25 * 60); // we set the timer to 25 times 60 seconds = 1500 seconds

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

  useEffect(() => {
    const interval =
      timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);


  return <div className="App">
    <h1>PMDR TIMER</h1>
    <Timer timer={timer} breakTime={breakTime} timeFormat={timeFormat} />
    <Buttons />
  </div >;
}

export default App;
