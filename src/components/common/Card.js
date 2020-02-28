import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} title Titulo del card 
 * @param {string} rem Anchura del card en rem ej: 18, 30, 70
 */
const Card = ({rem, title, children}) => {
    return(
        <div className="card" style={{width: `${rem}rem`}}>
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text">
                    {children}
                </p>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    rem: PropTypes.string.isRequired,
}

export default Card;