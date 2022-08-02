import { useEffect, useRef, useState } from "react";
import { QuizBox } from "./QuizBox";
import { QuizContainer } from "./styles";

 export function Quiz(){

  const [allQuizzes, setAllQuizzes] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(null);

    useEffect(() => {
      (async () => {
        const data = await fetch('https://the-trivia-api.com/api/questions?limit=5');
        const response = await data.json();
        setAllQuizzes(response)
        setIsDataLoaded(response);
      })();
    }, []);

    if (isDataLoaded === null) {
      return
    }

    function handleCheckAnswer(){
      console.log('ta pegando')
    }

  return(
    <QuizContainer>
      {allQuizzes.map(quiz=>(
        <QuizBox
          key={quiz.id}
          quizProps = {quiz}
          allWrongAnswers={quiz.incorrectAnswers}
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