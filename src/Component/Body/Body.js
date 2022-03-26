import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Selected from '../Selected/Selected';
import './Body.css';

const Body = () => {
    const [cards, setCards] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[]);

     const addToDraw = (selectedItem) => {
        // console.log(selectedItem);
        let newItems = [];
        const exists = items.find(item => item.id === selectedItem.id);
        if(exists){
            alert('You can not add an item two times');
        }
        else{
            newItems = [...items, selectedItem];
        }
        setItems(newItems);
    };

    return (
        <div className='root-container'>
            <div className='card-container'>
                {
                    cards.map(card =><Cards
                    key={card.id}
                    card={card}
                    addToDraw={addToDraw}
                    ></Cards>
                    )
                }
            </div>
            <div className='draw-section'>
                {
                    items.map(item => <Selected
                    key={item.id}
                    item={item}
                    ></Selected>)
                }

               <button className='green-button'>choose random</button>
               <button className='red-button'>clear all</button>
            </div>
        </div>
    );
};

export default Body;