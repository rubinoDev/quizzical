import { useEffect, useState } from "react";
import { QuizAnswerContainer } from "./styles";

export function QuizAnswer(props){
  console.log(props)
  console.log(props.buttonClassName)

  // const [test, setTest] = useState('');

  // useEffect(() => {
  //   setTest(props.buttonClassName)
  // },[props.buttonClassName])

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

// {props.isHeld ? `answer-btn held ${props.buttonClassName[props.answerIndex]}` : "answer-btn"} 