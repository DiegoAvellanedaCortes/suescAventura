import "./contacto.css"
import logo from "../img/SuescAventura.png";
import fondoContacto from "../img/fondoContacto.png"
import QR from "../img/QR.png";
import icoYoutube from "../img/youtube.svg";
import icoInstagram from "../img/instagram.svg";
import icoFacebook from "../img/facebook.svg";
import icoTiktok from "../img/tiktok.svg";

function Contacto() {
    return (
        <div className="contacto">
            <div className="card-datos">
                <div className="imagen-contacto">
                    <img src={logo} className="img-contacto" alt="Logo SuescAventura" />
                </div>
                <div className="datos-contacto">
                    <p>Correo: <a href="mailto:suescaventura@gmail.com"> suescaventura@gmail.com</a> </p>
                    <p>Teléfono:  320 454 3746 </p>
                </div>
            </div>
            <div className="card-datos">
                <p className="textoQr">Inicia una conversación via WhatsApp escaneando el código QR</p>
                <img className="qr" src={QR} alt="QR" />
            </div>
            <div className="card-datos-dos">
                <p>Nuestras Redes</p>
                <div className="redes-contacto">
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@suescaventura" ><img src={icoYoutube} alt="icono Youtube" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/suescaventura" ><img src={icoInstagram} alt="icono Instagram" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100063543973730" ><img src={icoFacebook} alt="icono Facebook" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@suescaventura" ><img src={icoTiktok} alt="icono Tiktok" /></a>
                </div>
            </div>
            <img className="fondoContacto" src={fondoContacto} alt="fondo contacto"/>
        </div>
    );
}

export { Contacto }