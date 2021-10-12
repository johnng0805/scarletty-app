import React from 'react';
import 'assets/styles/Wrapper.css';

const CardWrapper = (props) => {
    return (
        <div className="card__wrapper">
            <div className="card__background">
                <img src={props.img} alt="" />
            </div>
            <div className="card__content">
                <div className="card__name">
                    <h4>{props.name}</h4>
                    <p>{props.price}</p>
                </div>
                <div className="card__description">
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default CardWrapper;
