import React,{useState,useEffect} from "react";
import "./Style.css";

function Timer()
{
    const [remainingTime, setRemainingTime] = useState(3600);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(remainingTime-1);
        }, 1000);
        return () => clearInterval(intervalId);
    });

    return (<div className="timer">Time left: {Math.floor(remainingTime/60)}:{remainingTime%60}</div>);
    
}
export default Timer;