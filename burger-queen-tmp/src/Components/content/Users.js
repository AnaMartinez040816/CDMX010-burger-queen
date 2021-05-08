import './Users.css';
import icon_mesero from '../../assets/icon_mesero.jpg'
import icon_chef from '../../assets/icon_chef.jpg'

export const Users = () => {
    return (
        <div>
            <div className="title">
                <h2>BIENVENIDX</h2>
                <h4>ELIGE UNA OPCIÓN</h4>
            </div>
            <div className="logos">
                <img src={icon_mesero} className="iconSize" alt="mesero" />
                <img src={icon_chef} className="iconSize" alt="cocina" />
            </div> 
            <div className="options">
                <button className="btn_mesero">MESERO</button>
                <button className="btn_cocina">COCINA</button>
            </div>
        </div>
    )
}