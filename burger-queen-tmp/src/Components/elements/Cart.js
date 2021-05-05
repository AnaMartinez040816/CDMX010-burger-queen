import React from 'react';

export function Cart(props) {
    let {name, image} =props
    return (
        <div className="cart">
            <img src={image} alt={name} />
            <span>{name}</span>

        </div>
    );
}