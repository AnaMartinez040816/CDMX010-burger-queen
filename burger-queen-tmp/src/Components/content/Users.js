import './Users.css';
import icon_mesero from '../../assets/icon_mesero.jpg'
import icon_chef from '../../assets/icon_chef.jpg'

export const Users = () => {
    return (
        <div className="container_Users">
            <div className="mesero">
                <h2>BIENVENIDO</h2>
                <h4>ELIGE UNA OPCIÓN</h4>
                <img src={icon_mesero} alt="mesero" />
                <button className="btn_mesero">MESERO</button>
            </div>
            <div className="cocina">
                <img src={icon_chef} alt="cocina" />
                <button className="btn_cocina">COCINA</button>
            </div>
        </div>
    )
}