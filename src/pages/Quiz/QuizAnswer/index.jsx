import { useState } from "react";
import { QuizAnswerContainer } from "./styles";

export function QuizAnswer(props){

  const [isHeld,setIsHeld] = useState(false)

  function handleClick(){
    setIsHeld(prevState => !prevState)
  }

  return(
      <button className={isHeld ? "answer-btn held" : "answer-btn"}
      onClick={handleClick}
      >
        {props.answer}
      </button>
  )
}