import React, { useContext,useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Questions from "../api/questions";
import QuestionStatusInfo from "./QuestionStatusInfo";
import { QuestionContext } from "../ContextFile/QuestionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import Option from "./option";
import QuestionPanel from "./QuestionPanel";
import Timer from "./Timer";
import "./Style.css";

function QuestionHome() {
  const [question, setQuestion] = useContext(QuestionContext);
  const [winHeight, setHeight] = useState(window.innerHeight);
  const [winWidth, setWidth] = useState(window.innerWidth);
  const [Nav,setNav]=useState(false);
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      {winWidth>=576&&<div className="quiztitle">Cryptocurrency</div>}
      {winWidth<576&&<FontAwesomeIcon icon={faBars} className="NavIcon" size="2x" onClick={()=>setNav(!Nav)}/>}
      <Row className={"m-0 p-0 "+(winWidth<576)?"basicStyle":""}>
          {winWidth<576&&<Timer/>}
      {winWidth<576&&Nav&&<Col className="m-0 p-0" lg={5} md={5} sm={5} xs={12}>
      <div className="panelPhone">
          <QuestionPanel/>
          </div>
          <div className="infoPhone">
          <QuestionStatusInfo/>
          </div>
        </Col>}
        <Col className="m-0 p-0" lg={7} md={7} sm={7} xs={12}>
        {winWidth<576&&<div className="quiztitle">Cryptocurrency</div>}
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
        {winWidth>=576&&<Col className="m-0 p-0" lg={5} md={5} sm={5} xs={12}>
          <Timer />
          <QuestionPanel />
          <QuestionStatusInfo/>
        </Col>}
      </Row>
    </div>
  );
}
export default QuestionHome;
