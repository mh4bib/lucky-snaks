import React from 'react';

const LuckyItem = (props) => {
    const {picture, name, price} = props.luckyOne;
    console.log(props);
    return (
        <div>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    );
};

export default LuckyItem;