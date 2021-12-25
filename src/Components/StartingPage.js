import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Questions from "../api/questions";
import "./Style.css";

function StartingPage() {
  const [winHeight, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <div style={{height: winHeight }}>
      <div className="outercircle1">
        <div className="circle1"></div>
      </div>
      <div className="StartingTitle">Welcome to NTA Testing App</div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="StartingBox">
          <div className="instructions">Instructions</div>
          <ul className="instructionsInfo">
            <li>The Quiz contains {Questions.length} questions.</li>
            <li>You will be provided with a time duration of 60 mins.</li>
          </ul>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/Quiz">
              <button className="StartButton">Start Quiz</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="outercircle2">
        <div className="circle2"></div>
      </div>
    </div>
  );
}
export default StartingPage;
