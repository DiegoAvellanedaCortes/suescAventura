import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../img/SuescAventura.png";
import logo_whatsapp from "../img/whatsapp.png";

function Layout() {
    return (
        <div className="layout">
            <div className="menu">
                <img src={logo} className="img-navbar" alt="Logo SuescAventura" />
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/planes">Planes</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                        <li>
                            <Link to="/quienes-somos">Quienes Somos?</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="boton-whatsapp">
                <a target="_blank" rel="noreferrer" href="https://wa.me/573204543746">
                    <img src={logo_whatsapp} alt="logo WhatsApp" />
                </a>
            </div>
            <Outlet />
            <footer>
                <p>Este es el footer</p>
            </footer>
        </div>
    );
}

export { Layout }