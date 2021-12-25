import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ScoreContext } from "../ContextFile/ScoreContext";
import { Link } from "react-router-dom";
import Questions from "../api/questions";
import "./Style.css";
import Star from "./Star";

function ScorePage() {

  const [winHeight, setHeight] = useState(window.innerHeight);
  const [score,setScore]=useContext(ScoreContext);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });
  
  return (
    <div style={{ height: winHeight }}>
      <div className="outercircle1">
        <div className="circle1"></div>
      </div>
      <div className="StartingTitle">
        <FontAwesomeIcon className="star" icon={faStar} />
        Results
        <FontAwesomeIcon className="star" icon={faStar} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="StartingBox">
          <div className="instructions">Scorecard</div>
          <Star/>
          <div className="ScoreInfo">
            Your Score is {score} out of {Questions.length} questions.
            <div className="anotherQuiz"><a href="/Quiz">Give quiz again</a></div>
          </div>
        </div>
      </div>
      <div className="outercircle2">
        <div className="circle2"></div>
      </div>
    </div>
  );
}
export default ScorePage;
