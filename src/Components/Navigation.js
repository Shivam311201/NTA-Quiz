import React, { useContext,useState } from "react";
import Questions from "../api/questions";
import { QuestionContext } from "../ContextFile/QuestionContext";
import { OptionContext } from "../ContextFile/OptionContext";
import { VisitedQuestionContext } from "../ContextFile/VisitedQuestionContext";
import { SelectedOptionContext } from "../ContextFile/SelectedOptionContext";
import { ScoreContext } from "../ContextFile/ScoreContext";
import { Link } from "react-router-dom";
import "./Style.css";

function Navigation() {
  const [question, setQuestion] = useContext(QuestionContext);
  const [Options, setOptions] = useContext(OptionContext);
  const [VisitedQuestion, setVisitedQuestion] = useContext(VisitedQuestionContext);
  const [selectedOption,setSelectedOption] = useContext(SelectedOptionContext);
  const [score,setScore]=useContext(ScoreContext);

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

  function currentQuestion(key) {
    if (key !== question) {
      setQuestion(key);
      setOptions(Questions[key].options);
    }
    let myvisited = [...VisitedQuestion];
    myvisited[key] = 1;
    setVisitedQuestion([...myvisited]);
  }

  return (
    <div className="buttonGroup">
      {question > 0 && (
        <button
          className="navigateButton"
          onClick={() => currentQuestion(question - 1)}
        >
          Prev
        </button>
      )}
      {question < Questions.length - 1 && (
        <button
          className="navigateButton"
          onClick={() => currentQuestion(question + 1)}
        >
          Next
        </button>
      )}
      {question === Questions.length - 1 && (
        <Link to="/scorecard">
          <button className="navigateButton" onClick={()=>checkResult()}>Submit</button>
        </Link>
      )}
    </div>
  );
}
export default Navigation;
