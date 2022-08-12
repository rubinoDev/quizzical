import { memo, useEffect, useState } from "react";
import { QuizAnswerContainer } from "./styles";

function QuizAnswer(props){

  let buttonClassNameTest = 'answer-btn' ;

  if(props.isHeld){
    buttonClassNameTest = 'answer-btn held'
  }

  if(props.showAnswer && props.answer === props.correctAnswer){
    buttonClassNameTest = 'answer-btn held right'
  }

  if(props.showAnswer && props.isHeld && props.answer === props.correctAnswer){
    buttonClassNameTest = 'answer-btn held right'
  }

  if(props.showAnswer && props.isHeld && props.answer !== props.correctAnswer){
    buttonClassNameTest = 'answer-btn held wrong'
  }

  return(
    <li className="answer-item">
      <button className={buttonClassNameTest} 
      onClick={()=>props.handleHold(props.id)}
      >
        {props.answer}
      </button>
    </li>
  )
}

export default memo(QuizAnswer);