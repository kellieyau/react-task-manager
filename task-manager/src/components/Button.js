import PropTypes from 'prop-types'

const Button = ({colour, text, onClick}) => {
  return (
    <button 
     onClick={onClick} 
     style= {{ backgroundColor: colour }} 
     className='btn'
    >
     {text}
    </button>)
}

Button.defaultProps = {
    color:'steelblue',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button