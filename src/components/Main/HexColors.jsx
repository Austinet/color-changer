import { useState } from 'react'
// import { hexArray } from '/src/data.js'
import './main.css'


const HexColors = () => {
    const  [colour, setColour] = useState("#ffffff")
    const hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    const getRandomNum = () => {
        let ranNum  = Math.floor(Math.random() * hexArray.length);
        return hexArray[ranNum]
    } 

    const getColour = () => {
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
                      <button className='btn' onClick={getColour}>Change Color</button>
                  </div>
              </div>
          </section>
    )
}

export default HexColors