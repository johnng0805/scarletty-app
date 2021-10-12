import React from 'react';
import 'assets/styles/Card.css';

const CardSquare = (props) => {
    return (
        <div className="card__square">
            <div className="card__background">
                <img src={props.img} alt="" />
            </div>
            <div className="card__content">
                <div className="card__name">
                    <h4>{props.name}</h4>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default CardSquare;
