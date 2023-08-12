import { useState } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'

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