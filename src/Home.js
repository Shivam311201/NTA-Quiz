import React, { useContext, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import dataQuestions from "./api/questions";
// import { questionContext } from "./ContextFile/QuestionsContext";
import "./Style.css";

// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

function Home()
{
    const [questions, setQuestions]=useState(dataQuestions);
    const [questionNumber,setQuestionNumber]=useState(0);
    const [currentOptions,setcurrentOptions]=useState(dataQuestions[0].options);   
    const [remainingTime, setRemainingTime] = useState(3600);
    const [selected,setSelected]=useState(0);
    // console.log(questions);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(remainingTime-1);
        }, 1000);
        return () => clearInterval(intervalId);
    });
    
    function currentQuestion(key)
    {
        if(key!==questionNumber){
            setQuestionNumber(key);
            setcurrentOptions(questions[key].options);
        }
    } 

    return (<div>
    <div className="quiztitle">Accounts</div>
    <Row className="m-0 p-0">
          <Col className="m-0 p-0" lg={7} md={7} sm={7}>
            <div className="QuestionBox">
                <div style={{marginBottom:"5px"}}><b>Question {questionNumber+1}</b></div>
                <div>{questions[questionNumber].question}</div>
            </div>  
            
            <div className="options" style={(selected===1)?{backgroundColor:"black"}:{}} onClick={()=>setSelected(1)}>{currentOptions[0]}</div>
            <div className="options" style={(selected===1)?{backgroundColor:"black"}:{}} onClick={()=>setSelected(2)}>{currentOptions[1]}</div>
            <div className="options" style={(selected===1)?{backgroundColor:"black"}:{}} onClick={()=>setSelected(3)}>{currentOptions[2]}</div>
            <div className="options" style={(selected===1)?{backgroundColor:"black"}:{}} onClick={()=>setSelected(4)}>{currentOptions[3]}</div>
            
            <div className="buttonGroup">
            {(questionNumber>0)&&<button className="navigateButton" onClick={()=>currentQuestion(questionNumber-1)}>Prev</button>} 
            {(questionNumber<questions.length-1)&&<button className="navigateButton" onClick={()=>currentQuestion(questionNumber+1)}>Next</button>} 
            {(questionNumber===questions.length-1)&&<button className="navigateButton">Submit</button>}
            </div>
          </Col>
          <Col className="m-0 p-0" lg={5} md={5} sm={5}>
              <div className="timer">Time left: {Math.floor(remainingTime/60)}:{remainingTime%60}</div>  
              <div className="numberBox">
                  <div className="allquestionTitle">
                  <div>Question {questionNumber+1}/{questions.length}</div>      
                  <div>Need Help?</div>
                  </div>
                  <Row className="m-0 p-0">
                  {questions?.map((item,key)=>(
                    <Col className="m-0 p-0" lg={2} key={key} onClick={()=>currentQuestion(key)} className="optionCircle">{key+1}</Col>))}
                  </Row>
              </div>
          </Col>
    </Row>
    </div>);
}
export default Home;