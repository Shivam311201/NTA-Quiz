import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Questions from "../api/questions";
import { QuestionContext } from "../ContextFile/QuestionContext";
import Navigation from "./Navigation";
import Option from "./option";
import QuestionPanel from "./QuestionPanel";
import Timer from "./Timer";
import "./Style.css";

function Home() {
  const [question, setQuestion] = useContext(QuestionContext);

  return (
    <div>
      <div className="quiztitle">Accounts</div>
      <Row className="m-0 p-0">
        <Col className="m-0 p-0" lg={7} md={7} sm={7}>
          <div className="QuestionBox">
            <div style={{ marginBottom: "5px" }}>
              <b>Question {question + 1}</b>
            </div>
            <div>{Questions[question].question}</div>
          </div>
          {Questions[question].options.map((item, key) => (
            <Option num={key} key={key} val={item} />
          ))}
          <Navigation />
        </Col>
        <Col className="m-0 p-0" lg={5} md={5} sm={5}>
          <Timer />
          <QuestionPanel />
        </Col>
      </Row>
    </div>
  );
}
export default Home;
