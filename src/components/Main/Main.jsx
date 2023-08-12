import HexColors from './HexColors'
import SimpleColors from './simpleColors'
import PropTypes from 'prop-types'
import './main.css'


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