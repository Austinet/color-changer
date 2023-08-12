// import { useState } from 'react'
import HexColors from './HexColors'
import './main.css'
import SimpleColors from './simpleColors'
import PropTypes from 'prop-types'


const Main = ({mode}) => {

  return (
    <main>
      {
        mode === "simple" ?
        <SimpleColors /> :
        <HexColors /> 
      } 
    </main>
  )
}

Main.propTypes = {
    mode: PropTypes.string
}

export default Main