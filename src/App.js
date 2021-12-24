import React, { useContext, useState } from "react";
import { questionContext } from "./ContextFile/QuestionsContext";
import { CircularProgress } from "@mui/material";
import Home from "./Home";
const url="https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple";

const fetch_data=fetch(url)
  .then((resposne)=>resposne.json())
  .then((data)=>{
    return data.results;
});

function App() {

  // const [questions, setQuestions]=useContext(questionContext);
  const [loading, setloading]=useState(true);
  
  // const myResult=async()=>{
  //   const a=await fetch_data;
  //   setQuestions(a);
  //   setloading(false);
  //   return a;
  // }
  // myResult();
  return (
    <div>
    {/* {loading&&<div className="load"><CircularProgress size="6rem"/></div>} */}
    {/* {!loading&&<Home/>} */}
    <Home/>
    </div>
  );
}

export default App;
