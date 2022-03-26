import React from 'react';
import './Selected.css';
const Selected = (props) => {
    // console.log(props)
    const {name, picture, price} = props.item;
    return (
        <div className='selected-items'>
            <img src={picture} alt="" />
            <div className='selected-items-desc'>
                <p><strong>{name}</strong></p>
                <p><small>${price}</small></p>
            </div>
        </div>
    );
};

export default Selected;