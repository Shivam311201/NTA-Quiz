import React, { useContext } from "react";
import Questions from "../api/questions";
import { Row, Col } from "react-bootstrap";
import { OptionContext } from "../ContextFile/OptionContext";
import { QuestionContext } from "../ContextFile/QuestionContext";
import { SelectedOptionContext } from "../ContextFile/SelectedOptionContext";
import "./Style.css";

function QuestionPanel() {
  const [question, setQuestion] = useContext(QuestionContext);
  const [Options, setOptions] = useContext(OptionContext);
  const [selectedOption, setSelectedOption] = useContext(SelectedOptionContext);

  function currentQuestion(key) {
    if (key !== question) {
      setQuestion(key);
      setOptions(Questions[key].options);
    }
  }
  console.log(question);
  return (
    <div className="numberBox">
      <div className="allquestionTitle">
        <div>
          Question {question + 1}/{Questions.length}
        </div>
        <div>Need Help?</div>
      </div>
      <Row className="m-0 p-0">
        {Questions?.map((item, key) => (
          <Col
            className={"optionCircle " + (selectedOption[key] !== -1? "QuestionSolved " : "QuestionUnSolved")+(key===question?" curQuestion":"")}
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
