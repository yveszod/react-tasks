import PropTypes from 'prop-types'

const Button = ({ color, text, onAdd, showAdd }) => {
    return <button onClick={onAdd} className="btn" style={showAdd ? {backgroundColor: '#ffcc00'} : {backgroundColor: color}}>
        {showAdd ? 'Close' : text}
        </button>
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

Button.defaultProps = {
    color: 'black',
    text: 'Add Text',
}

export default Button
