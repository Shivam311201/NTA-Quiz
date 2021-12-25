import React, { useContext } from "react";
import Questions from "../api/questions";
import { Row, Col } from "react-bootstrap";
import { OptionContext } from "../ContextFile/OptionContext";
import { QuestionContext } from "../ContextFile/QuestionContext";
import { SelectedOptionContext } from "../ContextFile/SelectedOptionContext";
import { VisitedQuestionContext } from "../ContextFile/VisitedQuestionContext";
import "./Style.css";

function QuestionPanel() {
  const [question, setQuestion] = useContext(QuestionContext);
  const [Options, setOptions] = useContext(OptionContext);
  const [selectedOption, setSelectedOption] = useContext(SelectedOptionContext);
  const [VisitedQuestion,setVisitedQuestion]=useContext(VisitedQuestionContext);

  function currentQuestion(key) {
    if (key !== question) {
      setQuestion(key);
      setOptions(Questions[key].options);
    }
    let myvisited=[...VisitedQuestion];
    myvisited[key]=1;
    setVisitedQuestion([...myvisited]);
  }

  return (
    <div className="numberBox">
      <div className="allquestionTitle">
        <div>
          Question {question + 1}/{Questions.length}
        </div>
        <div><a href="https://nta.ac.in/ContactUs">Need Help?</a></div>
      </div>
      <Row className="m-0 p-0">
        {Questions?.map((item, key) => (
          <Col
            className={"optionCircle " + (VisitedQuestion[key]===1?"QuestionVisited ":" ")+(selectedOption[key] !== -1? "QuestionSolved " : "")}
            lg={2}
            key={key}
            onClick={() => currentQuestion(key)}
          >
            {key + 1}
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default QuestionPanel;
