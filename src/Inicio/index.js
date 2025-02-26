import "./inicio.css";
import fondo from "../img/FondoInicio.jpg";
import { BannerClientes } from "../bannerClientes";
import { ClientesInstitucionales } from "../ClientesInstitucionales";
import { Ubicacion } from "../Ubicacion";
import { FormattedMessage } from "react-intl";

function Inicio() {
    return (
        <div className="home">
            <div className="imagen-fondo-inicio">
                <img src={fondo} alt="fondo-inicio" />
                <div className="boton-inicio">
                    <p>
                        <FormattedMessage
                            id="inicio.frase"
                            defaultMessage="¿Estás preparado"
                        />
                    </p>
                    <p>
                        <FormattedMessage
                            id="inicio.frase2"
                            defaultMessage="para la"
                        />
                        <strong>
                            <FormattedMessage
                                id="inicio.frase3"
                                defaultMessage="aventura"
                            />
                        </strong></p>
                    <button className="boton-contacto">
                        <a target="_blank" rel="noreferrer" href="https://wa.me/573204543746">
                            <FormattedMessage
                                id="inicio.boton"
                                defaultMessage="Contáctanos"
                            />
                        </a>
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