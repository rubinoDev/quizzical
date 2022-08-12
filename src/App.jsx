import { useState } from 'react'

import { Quiz } from './pages/Quiz'
import { Start } from './pages/Start'

import BlueBlob from "/src/assets/blue-blob.png"
import YellowBlob from "/src/assets/yellow-blob.png"
import { Container } from './styles/styles'
import './styles/globals.css'

function App() {

  const [isStarted, setIsStarted] = useState(false)

  function handleStart(){
    setIsStarted(prevState=> !prevState)
}

  return (
    <div className="App">
      <Container>
        <img className={isStarted ? "blue-blob quiz" : "blue-blob"} src={BlueBlob} alt=""/>
        <img className={isStarted ? "yellow-blob quiz" : "yellow-blob"} src={YellowBlob} alt=""/>
        <main>
        {isStarted ? <Quiz /> : <Start handleStart={handleStart}/>}
        </main>

      </Container>
    </div>
  )
}

export default App
