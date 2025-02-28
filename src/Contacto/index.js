import "./contacto.css"
import logo from "../img/SuescAventura.svg";
import fondoContacto from "../img/fondoContacto.jpg"
import QR from "../img/QR.svg";
import icoYoutube from "../img/youtube.svg";
import icoInstagram from "../img/instagram.svg";
import icoFacebook from "../img/facebook.svg";
import icoTiktok from "../img/tiktok.svg";
import { FormattedMessage } from "react-intl";

function Contacto() {
    return (
        <div className="contacto">
            <div className="card-datos">
                <div className="imagen-contacto">
                    <img src={logo} className="img-contacto" alt="Logo SuescAventura" />
                </div>
                <div className="datos-contacto">
                    <p>
                        <FormattedMessage
                            id="contacto.correo"
                            defaultMessage="Correo:"
                        />
                        <a href="mailto:suescaventura@gmail.com"> suescaventura@gmail.com</a> </p>
                    <p>
                        <FormattedMessage
                            id="contacto.telefono"
                            defaultMessage="Teléfono: (+57) 320 454 3746"
                        /></p>
                </div>
            </div>
            <div className="card-datos">
                <p className="textoQr">
                    <FormattedMessage
                        id="contacto.qr"
                        defaultMessage="Inicia una conversación en WhatsApp escaneando el código QR"
                    />
                </p>
                <img className="qr" src={QR} alt="QR" />
            </div>
            <div className="card-datos-dos">
                <p>
                    <FormattedMessage
                    id="contacto.redes"
                    defaultMessage="Nuestras Redes"
                    />
                </p>
                <div className="redes-contacto">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/suescaventura" ><img src={icoInstagram} alt="icono Instagram" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100063543973730" ><img src={icoFacebook} alt="icono Facebook" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@suescaventura" ><img src={icoYoutube} alt="icono Youtube" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@suescaventura" ><img src={icoTiktok} alt="icono Tiktok" /></a>
                </div>
            </div>
            <img className="fondoContacto" src={fondoContacto} alt="fondo contacto" />
        </div>
    );
}

export { Contacto }