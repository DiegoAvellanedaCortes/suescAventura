import "./Ubicacion.css";
import agencia from "../img/Agencia.jpg";
import mapa from "../img/mapa.jpg";

function Ubicacion() {
    return (
        <section className="Ubicacion">
            <div className="titulo-Ubicacion">
                <p>Nuestra Ubicación</p>
            </div>
            <div className="contenido_ubicacion">
                <div className="mapa">
                    <p>Nuestra Ubicación <a href="https://maps.app.goo.gl/uVJYqr9AG9XVVXyF8" target="_blank" rel="noreferrer">aquí</a></p>
                    <div className="mapa">
                        <a href="https://maps.app.goo.gl/uVJYqr9AG9XVVXyF8" target="_blank" rel="noreferrer">
                            <img src={mapa} alt="Ubicación agencia" />
                        </a>
                    </div>
                </div>
                <div className="foto-lugar">
                    <div className="boton-flotante-Ubi">
                        <a href="https://maps.app.goo.gl/uVJYqr9AG9XVVXyF8" target="_blank" rel="noreferrer">
                            Aquí
                        </a>
                    </div>
                    <img src={agencia} alt="Fachada agencia" />
                    <strong>Suesca, Cundinamarca</strong>
                </div>
            </div>
        </section>
    );
}

export { Ubicacion }