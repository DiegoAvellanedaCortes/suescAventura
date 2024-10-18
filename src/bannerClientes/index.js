import "./bannerClientes.css";
import Caminata from "../img/Caminata.jpg";
import Escalada from "../img/Escalada.jpg";
import Cueva from "../img/Cueva.jpeg";

function BannerClientes() {
    return (
        <section className="banner-clientes">
            <div className="titulo-clientes">
                <p>Nuestros Clientes</p>
            </div>
            <div className="banner">
                <div className="card-imagenes">
                    <img src={Caminata} alt="Caminata" />
                </div>
                <div className="card-imagenes">
                    <img src={Escalada} alt="Caminata" />
                </div>
                <div className="card-imagenes">
                    <img src={Cueva} alt="Caminata" />
                </div>
            </div>
        </section>
    );
}

export { BannerClientes }