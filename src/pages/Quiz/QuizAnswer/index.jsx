import { memo, useCallback, useEffect, useMemo } from "react";

export default function QuizAnswer(props){
  // const handleSetScore = useCallback(() => { 
  //   props.setScore(props.arrScore)
  // }, [])

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

  }



  if(props.showAnswer && props.isHeld && props.answer !== props.correctAnswer){
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
