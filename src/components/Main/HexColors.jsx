import { useState } from 'react'
import './main.css'

const HexColors = () => {
    const  [colour, setColour] = useState("#FFFFFF")
    const hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    //Get random numbers and assign hexArray elements accordingly
    const getRandomNum = () => {
        let ranNum  = Math.floor(Math.random() * hexArray.length);
        return hexArray[ranNum]
    } 

    //Constructs six hexadecimal values to form color value
    const changeColour = () => {
        let colorValue = "#"

        for(let i = 0; i < 6; i++) {
            colorValue += getRandomNum();
        }
      setColour(colorValue)
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

export default HexColors