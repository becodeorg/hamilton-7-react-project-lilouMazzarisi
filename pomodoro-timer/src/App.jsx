import Timer from "./components/Timer"
import Buttons from "./components/Buttons"
import Modal from "./components/Modal"
import "./index.css";

import React, { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(3);// we set the timer to 25 times 60 seconds = 1500 seconds
  const [breakTimer, setBreakTimer] = useState(5 * 60);
  // start countdown with button
  const [start, setStart] = useState(false);
  const [startBreak, setStartBreak] = useState(false);
  // Show modal 
  const [show, setShow] = useState(false);

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

  // Activates play button
  const toggle = () => {
    setStart(!start); // start -> true x
  }
  const modalToggle = () => {
    setStartBreak(!startBreak); // start -> true x

  }
  // countdown worktime
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
      console.log(show)
    }
    return () => clearInterval(interval);
  }, [start, timer]);

  useEffect(() => {
    let interval = null;
    if (startBreak && breakTimer > 0) {
      interval = setInterval(() => {
        setBreakTimer(breakTimer => breakTimer - 1);
      }, 1000);
    } else if (!startBreak && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startBreak, breakTimer]);

  const reset = () => {
    setTimer(25 * 60);
    setStart(false);
  }
  const resetModal = () => {
    setBreakTimer(5 * 60);
    setStartBreak(false);
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
    <div className="App p-2">
      <h1 className="pb-4 text-lg font-extrabold drop-shadow-xl">PMDR TIMER</h1>
      <div className="h-full flex flex-col items-center justify-between rounded-lg p-4">
        <Timer
          timer={timer}
          substract={substract}
          add={add}
          timeFormat={timeFormat} />
        <Buttons
          start={start}
          toggle={toggle}
          reset={reset} />
        {show && <Modal
          setShow={setShow}
          show={show}
          timeFormat={timeFormat}
          breakTimer={breakTimer}
          modalToggle={modalToggle}
          startBreak={startBreak}
          resetModal={resetModal}
          reset={reset}
        />}
      </div>
    </div >
  )
}

export default App;