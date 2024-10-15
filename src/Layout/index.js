import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
import logo from "../img/SuescAventura.png";

function Layout() {
    return (
        <div className="layout">
            <div className="menu">
                <img src={logo} className="img-navbar" />
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
            <Outlet />
            <footer>
                <p>Este es el footer</p>
            </footer>
        </div>
    );
}

export { Layout }