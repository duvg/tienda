import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @prop { string } type Tipo de alerta a mostar ej: danger, info, success
 * @prop { string } text Texto a mostrar en la alerta 
 */
const Alert = ({ type, text }) => {
    return(
        <div className={`alert alert-${type}`} role="alert">
            { text }
        </div>
    );
}

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Alert;