import PropTypes from 'prop-types'
import './header.css'

const Header = ({changeMode}) => {
 
  return (
    <header>
        <div id="header">
            <h1>Color Flipper</h1>
            <nav>
                <ul>
                    <li><a onClick={()=> changeMode("simple")}>Simple</a></li>
                    <li><a onClick={()=> changeMode("hex")}>Hex</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

Header.propTypes = {
    changeMode: PropTypes.func
}

export default Header