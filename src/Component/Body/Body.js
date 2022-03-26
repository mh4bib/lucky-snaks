import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Body.css';

const Body = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[]);

    return (
        <div className='root-container'>
            <div className='card-container'>
                {
                    cards.map(card =><Cards
                    key={card.id}
                    card={card}
                    ></Cards>
                    )
                }
            </div>
            <div className='draw-section'>
                
            </div>
        </div>
    );
};

export default Body;