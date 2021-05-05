import React from 'react';

import {Cart} from '../elements/Cart'
import prices from '../../data/prices.json'

export function Content() {

    let name=prices.item;
    let unitPrice=prices.price;
    return (
        <div className="content">
             <Cart
             name={name}
            unitPrice={unitPrice}
            />           
              <Cart
             name={name}
            unitPrice={unitPrice}
            />   
                         <Cart
             name={name}
            unitPrice={unitPrice}
            />   
                         <Cart
             name={name}
            unitPrice={unitPrice}
            />   
                         <Cart
             name={name}
            unitPrice={unitPrice}
            />   
                         <Cart
             name={name}
            unitPrice={unitPrice}
            />              
        </div>
    );
}