import "./bannerClientes.css";
import Caminata from "../img/Caminata.jpg";
import Escalada from "../img/Escalada.jpg";
import Cueva from "../img/Cueva.jpeg";
import Cuarta from "../img/Cuarta.png";
import React from 'react';


function BannerClientes() {

    const fotos_clientes = [
        { url: Caminata, alt: "Caminata", hidden: true },
        { url: Escalada, alt: "Escalada", hidden: true },
        { url: Cueva, alt: "Cueva", hidden: true },
        { url: Cuarta, alt: "Cuarta", hidden: false },
    ];

    return (
        <section className="banner-clientes">
            <div className="titulo-clientes">
                <p>Nuestros Clientes</p>
            </div>

            <div className="banner">
                {fotos_clientes.map(item => (
                    <div className={`card-imagenes ${item.hidden ? "active" : "inactive"}`} key={item.alt}>
                        <img src={item.url} alt={item.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}
export { BannerClientes }
