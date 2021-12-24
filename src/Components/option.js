import React, { useContext } from "react";
import { SelectedOptionContext } from "../ContextFile/SelectedOptionContext";
import { QuestionContext } from "../ContextFile/QuestionContext";
import "./Style.css";

function Option(props) {
  const [selectedOption, setSelectedOption] = useContext(SelectedOptionContext);
  const [question, setQuestion] = useContext(QuestionContext);

  return (
    <div
      className="options"
      style={selectedOption[question] === props.num? { backgroundColor: "#1E90FF",color:"white" }: {}}
      onClick={() => {
        let myOption=[...selectedOption];
        myOption[question]=props.num;
        setSelectedOption([...myOption]);
      }}
    >
      {props.val}
    </div>
  );
}
export default Option;
