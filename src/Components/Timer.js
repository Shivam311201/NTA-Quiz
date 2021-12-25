import React,{useState,useEffect,useContext} from "react";      
import Questions from "../api/questions";
import { ScoreContext } from "../ContextFile/ScoreContext";
import { SelectedOptionContext } from "../ContextFile/SelectedOptionContext";
import { useNavigate } from "react-router";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
import "./Style.css";

function Timer()
{
    const [remainingTime, setRemainingTime] = useState(3600);
    const [score,setScore]=useContext(ScoreContext);
    const [selectedOption,setSelectedOption]=useContext(SelectedOptionContext);
    const navigate=useNavigate();

    function checkResult()
    {
      var myscore=0;
      Questions.map((item,key)=>{
          const chosenOption=selectedOption[key];
          if(Questions[key].correct===Questions[key].options[chosenOption]){
              myscore++;
      }
      });
      setScore(myscore);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(remainingTime-1);
            if(remainingTime===1)
            {
                checkResult();
                navigate("/scorecard");
            }
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    });
    
    return (<div className="timer">Time left: {Math.floor(remainingTime/60)}:{remainingTime%60}</div>);
    
}
export default Timer;