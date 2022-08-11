import { useEffect, useRef, useState } from "react";
import { QuizBox } from "./QuizBox";
import { QuizContainer } from "./styles";

 export function Quiz(){

  const [allQuizzes, setAllQuizzes] = useState([]);
  const [isApiDataLoaded, setIsApiDataLoaded] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false)
  const [isAllAnswersHolded, setIsAllAnswersHolded] = useState(false);

  console.log('render')

  const arrIsAllAnswersHolded = new Array(allQuizzes.length);

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
    <QuizContainer>
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
        />
      )
      )}
    <button 
    className={`check-btn ${!isAllAnswersHolded && 'disabled'}`}
    onClick={handleCheckAnswer}
    disabled={!isAllAnswersHolded}
    >
    Check answers
    </button>

    </QuizContainer>
  )
}