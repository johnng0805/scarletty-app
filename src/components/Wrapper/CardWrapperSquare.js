import React from 'react';
import 'assets/styles/Wrapper.css';

const CardWrapperSquare = (props) => {
    return (
        <div className="card__wrapper__square">
            {props.children}
        </div>
    )
}

export default CardWrapperSquare
