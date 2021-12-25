import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ScoreContext } from "../ContextFile/ScoreContext";
import { Link } from "react-router-dom";
import Questions from "../api/questions";
import "./Style.css";
import Star from "./Star";
import { OptionContext } from "../ContextFile/OptionContext";
import { QuestionContext } from "../ContextFile/QuestionContext";
import { SelectedOptionContext } from "../ContextFile/SelectedOptionContext";
import { VisitedQuestionContext } from "../ContextFile/VisitedQuestionContext";

function ScorePage() {

    const [score,setScore]=useContext(ScoreContext);
    const [Options,setOptions] = useContext(OptionContext);
    const [question,setQuestion]=useContext(QuestionContext);
    const [selectedOption,setSelectedOption]=useContext(SelectedOptionContext);
    const [VisitedQuestion,setVisitedQuestion]=useContext(VisitedQuestionContext);
    const [winHeight, setHeight] = useState(window.innerHeight);
    const [winWidth, setWidth] = useState(window.innerWidth);
    
    function BacktoIntial()
    {
        setScore(0);
        setOptions(Questions[0].options);
        setQuestion(0);
        let myarray=selectedOption;
        for(var i=0;i<Questions.length;i++)
        myarray[i]=-1;
        setSelectedOption(myarray);
        myarray=VisitedQuestion;
        myarray[0]=1;
        for(var i=1;i<Questions.length;i++)
        myarray[i]=-1;
        setVisitedQuestion(myarray);
    }

    useEffect(() => {
      function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
    });
  
  return (
    <div style={{ height: winHeight }}>
      <div className="outercircle3">
        <div className="circle3"></div>
      </div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div className={"StartingTitle "+(winWidth<=750?"startingtitleBox":"")}>
        <FontAwesomeIcon className="star" icon={faStar} />
        Result
        <FontAwesomeIcon className="star" icon={faStar} />
      </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="StartingBox">
          <div className="instructions">Scorecard</div>
          <Star/>
          <div className="ScoreInfo">
            Your Score is {score} out of {Questions.length} questions.
            <div className="anotherQuiz" onClick={()=>BacktoIntial()}><Link to="/Quiz">Give quiz again</Link></div>
          </div>
        </div>
      </div>
      {winWidth>750&&<div className="outercircle2">
        <div className="circle2"></div>
      </div>}
    </div>
  );
}
export default ScorePage;
