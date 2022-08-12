import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import QuizBox  from "./QuizBox";
import { QuizContainer } from "./styles";

 export function Quiz(){

  const [allQuizzes, setAllQuizzes] = useState([]);
  const [isApiDataLoaded, setIsApiDataLoaded] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false)
  const [isAllAnswersHolded, setIsAllAnswersHolded] = useState(false);
  const [isTimeToShowQuizBox, setIsTimeToShowQuizBox] = useState(false);
  const [score,setScore] = useState();
  const arrIsAllAnswersHolded = new Array(allQuizzes.length);


  const arrScore = [];
  console.log('render')
  console.log(arrScore)
  function toggleIsTimeToShowQuizBox(){
    setIsTimeToShowQuizBox(prevState => !prevState)
  }

  useEffect(() => {
    setTimeout(toggleIsTimeToShowQuizBox, 500);
  },[] )

  useEffect(() => {
    (async () => {
      const data = await fetch('https://the-trivia-api.com/api/questions?limit=5');
      const response = await data.json();
      setAllQuizzes(response)
      setIsApiDataLoaded(response);
    })();
  }, []);

  if (isApiDataLoaded === null) {
    return
  }

  function handleCheckAnswer(){
    setShowAnswer(prevState => !prevState)
  }
    
  return(
    <QuizContainer
    isTimeToShowQuizBox = {isTimeToShowQuizBox}
    >
      {allQuizzes.map(quiz=>(
        <QuizBox
          key={quiz.id}
          quizProps = {quiz}
          allWrongAnswers={quiz.incorrectAnswers}
          showAnswer = {showAnswer}
          setIsAllAnswersHolded = {setIsAllAnswersHolded}
          isAllAnswersHolded = {isAllAnswersHolded}
          arrIsAllAnswersHolded = {arrIsAllAnswersHolded}
          quizBoxIndex = {allQuizzes.indexOf(quiz, 0)}
          arrScore= {arrScore}
        />
      )
      )}
    <div className="container-check-score">
        <div className="container-button-score">
          <strong className={showAnswer ? 'score active' : 'score'}>You scored  {arrScore.length}/5 correct answers</strong>
          {showAnswer ? 
            <button 
            className={`play-again-btn`}
            >
            Play again
            </button>
          :
            <button 
            className={`check-btn ${!isAllAnswersHolded && 'disabled'}`}
            onClick={handleCheckAnswer}
            disabled={!isAllAnswersHolded}
            >
            Check answers
            </button>
          }   
        </div>
    </div>
    </QuizContainer>
  )
}