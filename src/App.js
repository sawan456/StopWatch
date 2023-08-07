import React, { useRef, useState } from 'react'

const App = () => {

  const [runTime,setRunTime] = useState(null);
  const [nowTime,setNowTime] = useState(null);

  const ManageTime = useRef(null);
  
  const handleStart=()=>{
    setNowTime(Date.now());
    setRunTime(Date.now());
    ManageTime.current = setInterval(()=>{
      setRunTime(Date.now());
    },10)
  }

  const handleStop=()=>{
    clearInterval(ManageTime.current);
  }

  const handleReset=()=>{
    setNowTime(null);
    setRunTime(null);
  }

  const DisplayTime = (runTime-nowTime)/1000;

  return (
    <div style={{textAlign:"center"}}>
      <h1>StopWatch</h1>
      <h2>{DisplayTime.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App