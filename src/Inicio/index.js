import "./inicio.css";
import fondo from "../img/FondoInicio.png";
import { BannerClientes } from "../bannerClientes";
import { ClientesInstitucionales } from "../ClientesInstitucionales";
import { Ubicacion } from "../Ubicacion";

function Inicio() {
    return (
        <div className="home">
            <div className="imagen-fondo-inicio">
                <img src={fondo} alt="fondo-inicio" />
                <div className="boton-inicio">
                    <p>¿Estás preparado</p>
                    <p>para la <strong>aventura?</strong></p>
                    <button className="boton-contacto">
                        <a target="_blank" rel="noreferrer" href="https://wa.me/573204543746">Contáctanos</a>
                    </button>
                </div>
            </div>
            <BannerClientes />
            <ClientesInstitucionales />
            <Ubicacion />
        </div>
    );
}

export { Inicio }