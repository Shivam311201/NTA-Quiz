import React,{useContext} from "react";
import { ScoreContext } from "../ContextFile/ScoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import Questions from "../api/questions";
import "./Style.css";

function getStarCount(score)
{
    const percent=score/Questions.length;

    if(percent<0.2)
    return 0;
    else if(percent<0.4)
    return 1;
    else if(percent<0.6)
    return 2;
    else if(percent<0.8)
    return 3;
    else if(percent<1)
    return 4;

  return 5;
}
function Star()
{
    const [score,setScore]=useContext(ScoreContext);
    const solidCount=getStarCount(score);
    const NonsolidCount=5-solidCount;

    return (<div className="starGroup">
        {[...Array(solidCount)].map((x,i)=><FontAwesomeIcon key={i} className="singleStar" icon={faStarSolid}/>)}
        {[...Array(NonsolidCount)].map((x,i)=><FontAwesomeIcon key={i} className="singleStar" icon={faStarRegular}/>)}
    </div>)
}
export default Star;