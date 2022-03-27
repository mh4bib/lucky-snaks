import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'

import './Cards.css'
const Cards = (props) => {
    const {card, addToDraw} = props
    const {name, picture, price} = card;
    return (
        <div className='card'>
            <div className='img-container'><img src={picture} alt=""/></div>
            <div className='card-desc'>
                <h2>{name}</h2>
                <p>price: {price}</p>
                <button onClick={()=> addToDraw(card)}>select <FontAwesomeIcon icon={faHandPointer} /></button>
                
            </div>
        </div>
    );
};

export default Cards;