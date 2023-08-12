import { useState } from 'react'
import colorArray from '/src/utils/data.js'
import './main.css'


const SimpleColors = () => {
  const  [colour, setColour] = useState("White")

  //Assigns color based on generated random number
  const changeColour = () => {
    let ranNum  = Math.floor(Math.random() * colorArray.length);
    setColour(colorArray[ranNum])
  }
  
  return (
         <section>
            <div id="color-container" style={{backgroundColor: colour}}>
                <div className="color-details">
                    <h2 className="color-name">Background Color: {colour}</h2>
                    <button className='btn' onClick={changeColour}>Change Color</button>
                </div>
            </div>
        </section> 
  )
}

export default SimpleColors