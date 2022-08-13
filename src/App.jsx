import { useState } from 'react'

import { Quiz } from './pages/Quiz'
import { Start } from './pages/Start'

import BlueBlob from "/src/assets/blue-blob.png"
import YellowBlob from "/src/assets/yellow-blob.png"
import { Container } from './styles/styles'
import './styles/globals.css'

function App() {

  const [isQuizStarted, setIsQuizStarted] = useState(false)

  function handleStart(){
    setIsQuizStarted(prevState=> !prevState)
  }

  return (
    <div className="App">
      <Container>
        <img className={isQuizStarted ? "blue-blob quiz" : "blue-blob"} src={BlueBlob} alt=""/>
        <img className={isQuizStarted ? "yellow-blob quiz" : "yellow-blob"} src={YellowBlob} alt=""/>
        <main>
        {isQuizStarted ? <Quiz /> : <Start handleStart={handleStart}/>}
        </main>

      </Container>
    </div>
  )
}

export default App
