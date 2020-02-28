import React from 'react';
import PropTypes from 'prop-types'

/**
 * @prop {string} text Texto para mostrar el boton
 * @prop {string} type Define el tipo de boton ej: primary, succes, danger
 * @prop {string} size Define el tamaño del boton ej: ls sm xs block
 */
const Button = ({text, type, size, handleClick}) => {
    
    let customSize = size ? `btn-${size}`: '' ;
    return(
        <button 
            className={`btn btn-${type} ${customSize}`}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string,
    handleClick: PropTypes.func.isRequired
}

export default Button;