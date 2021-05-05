import React from "react";

export const boardWaiter  =()=>{
    return(
        <div className="container_Users">
            <div className="mesero">
            <h2>BIENVENIDO</h2>
            <h4>ELIGE UNA OPCIÓN</h4>

            <button className="btn_mesero">MESERO</button>
            </div>
            <div className="cocina">

            <button className="btn_cocina">COCINA</button>
            </div>
        </div>
    )
}