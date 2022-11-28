import Timer from "./components/Timer"
import Buttons from "./components/Buttons"
import Modal from "./components/Modal"
import "./App.css";

import React, { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(25 * 60); // we set the timer to 25 times 60 seconds = 1500 seconds
  const [start, setStart] = useState(false);
  const [show, setShow] = useState(false);

  // Changes the Format from 0:0 to 00:00 

  const toggle = () => {
    setStart(!start); // start -> true x
  }

  useEffect(() => {
    let interval = null;

    if (start && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (!start && timer !== 0) {
      clearInterval(interval);
    } else if (timer === 0) {
      setShow(!show);
    }
    return () => clearInterval(interval);
  }, [start, timer]);

  const reset = () => {
    if (!start) {
      setTimer(25 * 60);
      setStart(start);
    }
  }

  const add = () => {
    if (!start) { setTimer(timer + 60); }

  }
  const substract = () => {
    if (timer > 60 && !start) {
      setTimer(timer - 60);
    }
  }

  return (
    <div className="App">
      <h1>PMDR TIMER</h1>
      <Timer timer={timer} substract={substract} add={add} />
      <Buttons start={start} toggle={toggle} reset={reset} />
      {show && <Modal setShow={setShow} reset={reset} timer={timer} />}
    </div >
  )
}

export default App;