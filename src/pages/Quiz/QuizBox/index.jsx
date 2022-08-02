import { useEffect, useState } from "react";
import { QuizAnswer } from "../QuizAnswer";
import { QuizBoxContainer } from "./styles";
import nanoId from "nano-id";
import { QuizAnswerContainer } from "../QuizAnswer/styles";

export function QuizBox(props){

  const [quizAnswer,setQuizAnswer] = useState([])
  const allAnswers = []

  for(let i = 0; i < props.allWrongAnswers.length; i++){
    allAnswers.push(props.allWrongAnswers[i])
  }

  const randomIndex = Math.round(Math.random()*props.quizProps.incorrectAnswers.length )
  allAnswers.splice(randomIndex, 0, props.quizProps.correctAnswer)
  
  useEffect(()=>{
    const quizObjList = []
    allAnswers.map(answer=>{
      quizObjList.push({
        id : nanoId(),
        answer : answer,
        isHeld : false
      })
    })

    setQuizAnswer(quizObjList)
  },[])

  function handleHold(id){
    setQuizAnswer(prevState=>
      prevState.map(answer=>{
        return answer.id === id ? 
        {...answer, isHeld: !answer.isHeld}
        : {...answer, isHeld: false}
      })
    )
  }

  return(

    <QuizBoxContainer>
     <strong className="quizBox__question">{props.quizProps.question}</strong>
     <QuizAnswerContainer>
      <ul >
        {quizAnswer.map(qAnswer=>{
          return(
            <QuizAnswer
              key={nanoId()}
              id = {qAnswer.id}
              answer = {qAnswer.answer}
              isHeld = {qAnswer.isHeld}
              handleHold = {handleHold}
            
            />
          )
        })}
      </ul>

     </QuizAnswerContainer>
    </QuizBoxContainer>

  )
}