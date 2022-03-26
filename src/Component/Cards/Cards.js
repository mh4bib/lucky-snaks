import React from 'react';
import './Cards.css'
const Cards = (props) => {
    const {name, picture, price} = props.card;
    return (
        <div className='card'>
            <div className='img-container'><img src={picture} alt=""/></div>
            <div className='card-desc'>
                <h2>{name}</h2>
                <p>price: {price}</p>
                <button>select</button>
            </div>
        </div>
    );
};

export default Cards;