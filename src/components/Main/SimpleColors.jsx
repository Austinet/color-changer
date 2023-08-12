import { useState } from 'react'
import './main.css'
import colorArray from '../../data'


const SimpleColors = () => {
  const  [colour, setColour] = useState("white")

  const getColour = () => {
    let ranNum  = Math.floor(Math.random() * colorArray.length);
    setColour(colorArray[ranNum])
  }
  
  return (
         <section>
            <div id="color-container" style={{backgroundColor: colour}}>
                <div className="color-details">
                    <h2 className="color-name">Background Color: {colour}</h2>
                    <button className='btn' onClick={getColour}>Change Color</button>
                </div>
            </div>
        </section> 
  )
}

export default SimpleColors