import React from "react";
import {thePrices} from '../../data/prices.js'

const prices = thePrices.priceList



export const Menu  =()=>{
    return(
        <div>
        <h2>Entro a boardWaiter</h2>
        <div><h1>{thePrices.priceList.item}</h1></div>
        <div><h1>{thePrices.priceList.price}</h1></div>
        </div>
    )
};