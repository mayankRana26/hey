import { useState, useEffect } from "react";

const CountDown = () => {

    const [minute, setCount] = useState(1);
    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const decrementSecond = () => {
        setSecond((prevSecond) => prevSecond - 1);
    };
    const decrementMinute = () => {
        setCount((prevCount) => prevCount - 1);
        setSecond(59);
    }
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                if (second > 0) {
                    decrementSecond()
                } else if (minute > 0) {
                    decrementMinute()
                } else {
                    clearInterval(interval);
                    // let result="time over";
                }

            }, 1000);
        };
        return () => clearInterval(interval);
    }, [second, minute, isRunning]);

if (minute === 0 && second === 0) {
        return <h1>time over</h1>
    }
    const stop = () => {
        setIsRunning(false);
    }
    const start = () => {
        setIsRunning(true);
    }
    const reset = () => {
        setCount(1);
        setSecond(0);
        setIsRunning(false);
    }

    return (
        <>
             <h1>
        Time: {String(minute).padStart(2, "0")} : {String(second).padStart(2, "0")}
      </h1>
            {/* <h1>{result}</h1> */}
            <button onClick={stop}>stop</button>
            <button onClick={start}>start</button>
            <button onClick={reset}>reset</button>

        </>
    )
}



export default CountDown;