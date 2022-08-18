import { useMemo } from "react";

export default function QuizAnswer(props){
  let buttonClassName = 'answer-btn';

  const buttonIsHeld = props.isHeld;

  const buttonNotHeldAnswerRight = useMemo(() => (
    props.showAnswer && props.answer === props.correctAnswer
  ), [props.showAnswer, props.answer, props.correctAnswer])

  const buttonIsHeldAnswerRight = useMemo(() => (
    props.showAnswer && buttonIsHeld && props.answer === props.correctAnswer
  ), [props.showAnswer, buttonIsHeld, props.answer, props.correctAnswer])

  const buttonIsHeldAnswerWrong = useMemo(() => (
    props.showAnswer && buttonIsHeld && props.answer !== props.correctAnswer
  ),[props.showAnswer, buttonIsHeld, props.answer, props.correctAnswer]) 

  if(buttonIsHeld){
    buttonClassName = 'answer-btn held'
  }

  if(buttonNotHeldAnswerRight){
    buttonClassName = 'answer-btn held right'
  }

  if(buttonIsHeldAnswerRight){
    buttonClassName = 'answer-btn held right'
    props.handleAddScore()
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
