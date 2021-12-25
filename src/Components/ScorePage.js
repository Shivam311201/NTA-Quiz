import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ScoreContext } from "../ContextFile/ScoreContext";
import { Link } from "react-router-dom";
import Questions from "../api/questions";
import "./Style.css";
import Star from "./Star";

function ScorePage() {

    const [score,setScore]=useContext(ScoreContext);
    const [winHeight, setHeight] = useState(window.innerHeight);
    const [winWidth, setWidth] = useState(window.innerWidth);
    
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
            <div className="anotherQuiz" onClick={()=>window.location.reload()}><Link to="/Quiz">Give quiz again</Link></div>
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
