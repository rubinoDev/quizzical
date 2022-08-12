import { Enter } from "easy-react-animation";
import { useEffect, useState } from "react";
import { StartContainer } from "./styles";

export function Start(props){
  const [isTimeToShowButton, setIsTimeToShowButton] = useState(false)

  function toggleIsTimeToShowButton(){
    setIsTimeToShowButton(prevState => !prevState)
  }

  useEffect(() => {
    setTimeout(toggleIsTimeToShowButton, 100);
  },[] )

  return(
    <StartContainer
    isTimeToShowButton={isTimeToShowButton}
    >
      <Enter text={'Quizzical'} className={'start__title'}/>
      <button 
      className="start__button"
      onClick={props.handleStart}
      >Start quiz</button>
    </StartContainer>
  )
}