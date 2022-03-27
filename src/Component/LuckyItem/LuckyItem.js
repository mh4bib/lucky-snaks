import React from 'react';
import './LuckyItem.css';
const LuckyItem = (props) => {
    const {picture, name, price} = props.luckyOne;
    return (
        <div>
            <h1 className='lucky-header'>Your Lucky Snack</h1>
            <div className='lucky-container'>
            <img src={picture} alt="" />
            <div>
                <h2>{name}</h2>
                <p>${price}</p>
            </div>
        </div>
        </div>
    );
};

export default LuckyItem;