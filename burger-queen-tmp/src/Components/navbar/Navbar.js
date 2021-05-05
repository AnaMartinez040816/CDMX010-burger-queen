import React from 'react';
import './Navbar.css';
import Logo from '../../assets/hamburguesaLogo.png'
/* import {Select} from '../elements/Select' */

export const Navbar =()=>{
    return(
        <div>
            <div className="navbar">
                <h2>BURGUER QUEEN</h2>
            <img src={Logo} alt="Logotipo empresa" />
            <button className="btn_exit">SALIR</button>
            </div>
        </div>
    )
}