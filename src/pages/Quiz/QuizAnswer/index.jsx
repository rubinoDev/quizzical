import { useState } from "react";
import { QuizAnswerContainer } from "./styles";

export function QuizAnswer(props){
  
  return(
    <li className="answer-item">
      <button className={props.isHeld ? `answer-btn held ${props.buttonClassName}` : "answer-btn"}
      onClick={()=>props.handleHold(props.id)}
      >
        {props.answer}
      </button>
    </li>
  )
}