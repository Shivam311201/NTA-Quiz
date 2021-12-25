import React from "react";
import "./Style.css";

function QuestionStatusInfo() {
  return (
    <div className="InfoOuter">
      <div className="QuestionInfo">
        <div className="colourBox"></div>
        <div className="InfoType">Question not visited yet</div>
      </div>
      <div className="QuestionInfo">
        <div className="colourBox" style={{backgroundColor:"#FF3048"}}></div>
        <div className="InfoType">Question not answered</div>
      </div>
      <div className="QuestionInfo">
        <div className="colourBox" style={{backgroundColor:"yellowgreen"}}></div>
        <div className="InfoType">Question answered</div>
      </div>
    </div>
  );
}

export default QuestionStatusInfo;
