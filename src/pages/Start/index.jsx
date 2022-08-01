import { StartContainer } from "./styles";

export function Start(props){
  return(
    <StartContainer>
      <h1 className="start__title">Quizzical</h1>
      <button 
      className="start__button"
      onClick={props.handleStart}
      >Start quiz</button>
    </StartContainer>
  )
}