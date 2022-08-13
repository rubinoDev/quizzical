import { memo, useCallback, useEffect, useMemo } from "react";

export default function QuizAnswer(props){
  let buttonClassName = 'answer-btn';
  const buttonIsHeld = props.isHeld;
  const buttonNotHeldAnswerRight = props.showAnswer && props.answer === props.correctAnswer;
  const buttonIsHeldAnswerRight = props.showAnswer && buttonIsHeld && props.answer === props.correctAnswer;
  const buttonIsHeldAnswerWrong = props.showAnswer && buttonIsHeld && props.answer !== props.correctAnswer;

  if(buttonIsHeld){
    buttonClassName = 'answer-btn held'
  }

  if(buttonNotHeldAnswerRight){
    buttonClassName = 'answer-btn held right'
  }

  if(buttonIsHeldAnswerRight){
    buttonClassName = 'answer-btn held right'
    // props.arrScore += 1;
    console.log(props.arrScore)
  }

  if(buttonIsHeldAnswerWrong){
    buttonClassName = 'answer-btn held wrong'
  }

  return(
    <li className="answer-item">
      <button className={buttonClassName} 
      onClick={()=>props.handleHold(props.id)}
      disabled = {props.showAnswer}
      >
        {props.answer}
      </button>
    </li>
  )
}
