import React from 'react';
import 'assets/styles/Container.css';

const CardContainer = (props) => {
    return (
        <div className="card__container">
            <div className="card__title">
                <h4>{props.title}</h4>
            </div>
            {props.children}
        </div>
    )
}

export default CardContainer
