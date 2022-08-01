import { useEffect, useState } from "react";
import { QuizAnswer } from "../QuizAnswer";
import { QuizBoxContainer } from "./styles";
import nanoId from "nano-id";
import { QuizAnswerContainer } from "../QuizAnswer/styles";

export function QuizBox(props){
  const allAnswers = []

  for(let i = 0; i < props.allWrongAnswers.length; i++){
    allAnswers.push(props.allWrongAnswers[i])
  }

  const randomIndex = Math.round(Math.random()*props.quizProps.incorrectAnswers.length )
  allAnswers.splice(randomIndex, 0, props.quizProps.correctAnswer)
  
  return(
    <QuizBoxContainer>
     <strong className="quizBox__question">{props.quizProps.question}</strong>
     <QuizAnswerContainer>
      {allAnswers.map(answer=>(
        <QuizAnswer
          key={nanoId()}
          answer={answer}
        />
        ) 
      )} 
     </QuizAnswerContainer>
    </QuizBoxContainer>
  )
}