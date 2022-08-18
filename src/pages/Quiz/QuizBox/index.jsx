import { memo, useEffect, useState } from "react";
import  QuizAnswer  from "../QuizAnswer";
import { QuizBoxContainer } from "./styles";
import nanoId from "nano-id";
import { QuizAnswerContainer } from "../QuizAnswer/styles";

export default function QuizBoxComponent(props){

  const [quizAnswer,setQuizAnswer] = useState([])
  const allAnswers = []

  for(let i = 0; i < props.allWrongAnswers.length; i++){
    allAnswers.push(props.allWrongAnswers[i])
  }

  const randomIndex = Math.round(Math.random()*props.quizProps.incorrectAnswers.length )
  allAnswers.splice(randomIndex, 0, props.quizProps.correctAnswer)
  
  useEffect(()=>{
    const quizProps = []
    allAnswers.map(answer=>{
      quizProps.push({
        id : nanoId(),
        answer : answer,
        isHeld : false
      })
    })

    setQuizAnswer(quizProps)
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

  useEffect(() => {
    let isAnyAnswerHolded;
    quizAnswer.find(answer=>{
      return(
        answer.isHeld ? isAnyAnswerHolded = true : isAnyAnswerHolded = false
      )
    })

    props.arrIsAllAnswersHolded[props.quizBoxIndex] = isAnyAnswerHolded
    const isEveryAnswersHeld = props.arrIsAllAnswersHolded.every(answer => answer === true)
    props.setIsAllAnswersHolded(isEveryAnswersHeld)

  },[handleHold])

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
              answerIndex={quizAnswer.indexOf(qAnswer, 0)}
              showAnswer = {props.showAnswer}
              correctAnswer = {props.quizProps.correctAnswer}
              arrScore= {props.arrScore}
              setScore= {props.setScore}
              handleSetScore= {props.handleSetScore}
              handleAddScore= {props.handleAddScore}
            />
          )
        })}
      </ul>

     </QuizAnswerContainer>
    </QuizBoxContainer>

  )
}
