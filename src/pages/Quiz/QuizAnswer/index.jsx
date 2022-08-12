import { memo, useCallback, useMemo } from "react";

export default function QuizAnswer(props){
  let buttonClassName = 'answer-btn' ;

  if(props.isHeld){
    buttonClassName = 'answer-btn held'
  }

  if(props.showAnswer && props.answer === props.correctAnswer){
    buttonClassName = 'answer-btn held right'
  }

  if(props.showAnswer && props.isHeld && props.answer === props.correctAnswer){
    buttonClassName = 'answer-btn held right'
    props.arrScore.push('right answer');
    // console.log(props.arrScore)
  }

  if(props.showAnswer && props.isHeld && props.answer !== props.correctAnswer){
    buttonClassName = 'answer-btn held wrong'
  }

  return(
    <li className="answer-item">
      <button className={buttonClassName} 
      onClick={()=>props.handleHold(props.id)}
      >
        {props.answer}
      </button>
    </li>
  )
}
