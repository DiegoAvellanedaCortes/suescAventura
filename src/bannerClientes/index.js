import "./bannerClientes.css";
import Caminata from "../img/Caminata.jpg";
import Escalada from "../img/Escalada.jpg";
import Cueva from "../img/Cueva.jpeg";
import Cuarta from "../img/Cuarta.png";
import React from 'react';
import { Carousel } from 'antd';


function BannerClientes() {

    const fotos_clientes = [
        { url: Caminata, alt: "Caminata", hidden: true },
        { url: Escalada, alt: "Escalada", hidden: true },
        { url: Cueva, alt: "Cueva", hidden: true },
        { url: Cuarta, alt: "Cuarta", hidden: false },
    ];

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

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

    /*return (
        <Carousel autoplay>
           {fotos_clientes.map(item => (
                    <div className={`card-imagenes ${item.hidden ? "active" : "inactive"}`} key={item.alt}>
                        <img src={item.url} alt={item.alt} />
                    </div>
                ))}
        </Carousel>
    );*/
}


function infiniteSlider() {
    const sliderBanner = document.getElementsByClassName('banner')[0];
    const firstImage = sliderBanner.firstElementChild;

    
    setInterval(()=>{
        sliderBanner.style.transform += `translateX(-50px)`
    }, 1000);
    // Mueve la primera imagen al final después de cada transición
    //sliderBanner.appendChild(firstImage.cloneNode(true)); // Clonamos la primera imagen
    //console.log(sliderBanner)
    //sliderBanner.removeChild(firstImage); // Eliminamos la original

}

// Ejecutar el deslizamiento cada vez que la animación termina
//sliderBanner.addEventListener('animationiteration', infiniteSlider);


//window.addEventListener('load', infiniteSlider);


export { BannerClientes }
