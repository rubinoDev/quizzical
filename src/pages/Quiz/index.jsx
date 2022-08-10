import { useEffect, useRef, useState } from "react";
import { QuizBox } from "./QuizBox";
import { QuizContainer } from "./styles";

 export function Quiz(){

  const [allQuizzes, setAllQuizzes] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false)

    useEffect(() => {
      (async () => {
        const data = await fetch('https://the-trivia-api.com/api/questions?limit=5');
        const response = await data.json();
        setAllQuizzes(response)
        setIsDataLoaded(response);
      })();
    }, []);

    console.log(allQuizzes)

    if (isDataLoaded === null) {
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
        />
      )
      )}
    <button 
    className="check-btn" 
    onClick={handleCheckAnswer}

    >
    Check answers
    </button>

    </QuizContainer>
  )
}