import Button from './Button'
import PropTypes from 'prop-types'



const Header = ({title}) => {
    const onClick= () => {
        console.log('Click')
    }
  return (
    <header className='header'>
        <h1 style={headingStyle}>{title}</h1>
        <Button colour='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    'title': 'Task Manager',
}

Header.propTypes = {
    'title': PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'black',
    backgroundColor: 'red'
}
export default Header