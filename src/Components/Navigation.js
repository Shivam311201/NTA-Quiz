import React,{useContext} from "react";
import Questions from "../api/questions";
import { QuestionContext } from "../ContextFile/QuestionContext";
import { OptionContext } from "../ContextFile/OptionContext";
import "./Style.css";

function Navigation()
{
    const [question,setQuestion]=useContext(QuestionContext);
    const [Options,setOptions]=useContext(OptionContext);

    function currentQuestion(key)
    {
        if(key!==question){
            setQuestion(key);
            setOptions(Questions[key].options);
        }
    } 

    return (<div className="buttonGroup">
    {(question>0)&&<button className="navigateButton" onClick={()=>currentQuestion(question-1)}>Prev</button>} 
    {(question<Questions.length-1)&&<button className="navigateButton" onClick={()=>currentQuestion(question+1)}>Next</button>} 
    {(question===Questions.length-1)&&<button className="navigateButton">Submit</button>}
    </div>);
}
export default Navigation;