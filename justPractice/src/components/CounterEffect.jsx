import React, { useState, useEffect } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
    const[isrunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if(isrunning){
    // Start the timer
    timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
}
    
    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
    },[isrunning]); // Empty dependency array means this effect runs only once, like componentDidMount

    const stop =() =>{
    setIsRunning(false);
    }
    const start=()=>{
        setIsRunning(true);
    }
    const reset=()=>{
        setCount(0);
        setIsRunning(true);
        //whenever reset is called,count value is set to 0 and it will start immediately
    }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={stop} disabled={!isrunning}>stop</button>
      <button onClick={start} disabled={isrunning}>continue</button>
      <button onClick={reset}>reset</button>


    </div>
  );
}

export default CounterEffect
