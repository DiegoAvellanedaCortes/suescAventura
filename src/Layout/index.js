import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import logo from "../img/SuescAventura.png";
import logo_whatsapp from "../img/whatsapp.svg";
import icoYoutube from "../img/youtube.svg";
import icoInstagram from "../img/instagram.svg";
import icoFacebook from "../img/facebook.svg";
import icoTiktok from "../img/tiktok.svg";

import { TiThMenu } from "react-icons/ti";
import React from "react";

function Layout() {

    const [menuMovil, setMenuMovil] = React.useState(false);

    const redes = [
        { name_red: "Youtube", logo: icoYoutube, url: "https://www.youtube.com/@suescaventura" },
        { name_red: "Instagram", logo: icoInstagram, url: "https://www.instagram.com/suescaventura" },
        { name_red: "Facebook", logo: icoFacebook, url: "https://www.facebook.com/profile.php?id=100063543973730" },
        { name_red: "Tiktok", logo: icoTiktok, url: "https://www.tiktok.com/@suescaventura" },
    ]

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
            <div className="movil">
                <TiThMenu
                    className="iconMenu"
                    onClick={
                        () => {
                            setMenuMovil(status => !status);
                            console.log(menuMovil);
                        }
                    }
                />
            </div>
            {menuMovil &&
                <div className="MenuMovil">
                    <nav className="movilMenu">
                        <ul onClick={
                            () => {
                                setMenuMovil(status => !status);
                             
                            }
                        }>
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
            }
            <div className="boton-whatsapp">
                <a target="_blank" rel="noreferrer" href="https://wa.me/573204543746">
                    <img src={logo_whatsapp} alt="logo WhatsApp" />
                </a>
            </div>
            <Outlet />
            <footer>
                <div className="logo-footer">
                    <img src={logo} className="img-navbar" alt="Logo SuescAventura" />
                </div>
                <div className="contenido-footer">
                    <div className="redes">
                        <ul>
                            {redes.map(item => (
                                <li key={item.name_red}>
                                    <a href={item.url} target="_blank" rel="noreferrer">
                                        <img src={item.logo} alt={item.name_red} />
                                        {item.name_red}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="links">
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
                    </div>
                </div>
            </footer>
        </div>
    );
}

export { Layout }