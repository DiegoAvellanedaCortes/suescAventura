import "./inicio.css";
import fondo from "../img/FondoInicio.png";

function Inicio() {
    return (
        <div className="home">
            <div className="imagen-fondo-inicio">
                <img src={fondo} alt="fondo-inicio" />
            </div>
            <div className="boton-inicio">
                <p>¿Estás preparado</p>
                <p>para la <strong>aventura?</strong></p>
                <button className="boton-contacto">
                    <a target="_blank" rel="noreferrer" href="https://wa.me/573204543746">Contáctanos</a>
                </button>
            </div>
            <div className="contenido-inicio">

            </div>
        </div>
    );
}

export { Inicio }