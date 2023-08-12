import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [mode, setMode] = useState("simple")
  const changeMode = (mode) => {
         setMode(mode)
  }

  return (
    <> 
     <Header changeMode = {changeMode}/>
     <Main mode={mode}/>
    </>
  )
}

export default App
