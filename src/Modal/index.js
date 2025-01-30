import { createPortal } from "react-dom";
import "./modal.css"
import { ReactComponent as SVGDelete } from "../img/delete.svg";

function Modal({ data, setOpenModal }) {

    return createPortal(
        <div className="modalPlanes">
            <div className="contenedor">
                <div className="contenedorTitulo">
                    <p className="tituloModal">{data.Titulo}</p>
                    <p
                        className="botonCerrarModal"
                        onClick={
                            () => {
                                setOpenModal(false)
                            }
                        }
                    ><SVGDelete /></p>
                </div>
                <img src={data.fotoURL} />
                <div className="descripcion">
                    {data.Titulo === "Escalada en Roca" && (
                        <p>
                            <strong>¡Vive la emoción de la escalada en roca en Suesca, Cundinamarca!</strong><br />
                            Sumérgete en la aventura y la naturaleza mientras desafías tus límites en uno de los destinos de escalada más icónicos de Colombia.Suesca, con sus majestuosas paredes de roca, es el escenario perfecto para vivir una experiencia única, rodeado de impresionantes paisajes y aire puro. <br />Tanto si eres principiante como un escalador experimentado, nuestras rutas están diseñadas para todos los niveles.Contarás con equipo de alta calidad y la guía de expertos que te acompañarán en cada paso del camino.Sentirás la adrenalina al alcanzar nuevas alturas y la satisfacción de superar tus propios retos.
                        </p>
                    )}
                    {data.Titulo === "Rappel" && (
                        <p>
                            <strong>¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca!</strong><br /> Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable.<br /> ¡El desafío y la diversión te están esperando!
                        </p>
                    )}
                    {data.Titulo === "Caminatas" && (
                        <p>
                            <strong>Adéntrate en los encantadores paisajes de Suesca</strong><br /> Cada paso te llevará a descubrir la belleza y tranquilidad de este destino único. Nuestras caminatas están diseñadas para conectar tu espíritu aventurero con la naturaleza, mientras recorres senderos rodeados de montañas, formaciones rocosas, río y una flora y fauna inigualables. <br />Desde principiantes hasta caminantes experimentados, contamos con rutas adaptadas a todos los niveles.
                        </p>
                    )}
                    {data.Titulo === "Travesía en cuevas" && (
                        <p>
                            <strong> ¡Explora el misterio bajo tierra con un recorrido en cuevas en Suesca, Cundinamarca!</strong><br />

                            Adéntrate en un mundo oculto lleno de emoción, aventura y maravillas naturales. Los recorridos por las cuevas de Suesca te ofrecen una experiencia única para descubrir formaciones subterráneas fascinantes, pasadizos sorprendentes y la historia que esconden estas mágicas cavidades.

                            Guiados por expertos, vivirás una aventura segura y emocionante, ideal para quienes buscan conectar con la naturaleza de una manera diferente.
                        </p>
                    )}
                    {data.Titulo === "Cabalgata" && (
                        <p>
                            <strong>¡Descubre Suesca a caballo y vive una experiencia inolvidable!</strong><br />

                            Sumérgete en la belleza de los paisajes de Suesca, Cundinamarca, con nuestras emocionantes cabalgatas. Esta actividad es perfecta para quienes desean disfrutar de la naturaleza de una manera relajante y diferente, mientras recorren senderos rodeados de montañas, ríos y espectaculares vistas.<br />

                            No importa si eres un jinete experimentado o si es tu primera vez, nuestros caballos están entrenados para ofrecerte una experiencia segura y placentera. Además, contarás con guías expertos que te acompañarán durante el recorrido, compartiendo interesantes historias y curiosidades sobre la región.
                        </p>
                    )}
                    {data.Titulo === "Ascenso en vía Ferrata" && (
                        <p>
                            <strong>¡Vive la emoción del ascenso en vía ferrata en Suesca, Cundinamarca!</strong><br />

                            Atrévete a conquistar las alturas en una de las experiencias más emocionantes y seguras que Suesca tiene para ofrecer. La vía ferrata combina la adrenalina de la escalada con la tranquilidad de saber que cuentas con un sistema de seguridad diseñado para todo tipo de aventureros, desde principiantes hasta expertos.

                            Mientras asciendes por las paredes rocosas, disfrutarás de vistas panorámicas espectaculares que harán que cada paso valga la pena.
                        </p>
                    )}
                    {data.Titulo === "Cursos" && (
                        <p>
                            <strong>¡Prepárate para conquistar las alturas con nuestros cursos especializados!</strong><br />

                            Si buscas desarrollar habilidades únicas y desafiantes, nuestros cursos de alturas son la opción ideal. Diseñados tanto para principiantes como para quienes desean perfeccionar sus técnicas, estos cursos te brindan el conocimiento y la confianza para desempeñarte de manera segura en entornos elevados. <br />

                            Aprenderás desde el uso adecuado del equipo de protección personal (arneses, cuerdas y sistemas de anclaje) hasta las mejores prácticas para trabajar o moverte en altura con total seguridad. Todo esto bajo la guía de instructores certificados que te acompañarán paso a paso, garantizando una experiencia educativa y emocionante.
                        </p>
                    )}
                    {data.Titulo === "Eventos Corporativos" && (
                        <p>
                            <strong>¡Lleve la experiencia de Suesca a su equipo con nuestros servicios corporativos!</strong><br />

                            En [Nombre de tu Agencia], sabemos que las experiencias compartidas fortalecen los lazos, inspiran creatividad y renuevan la energía de los equipos. Por eso, ofrecemos una amplia gama de actividades y servicios diseñados especialmente para empresas que buscan combinar aventura, naturaleza y trabajo en equipo.<br /><br />

                            ¿Por qué elegirnos?<br /><br />

                            Experiencia comprobada en turismo corporativo, guías profesionales y equipos de alta calidad, planes personalizados que se ajustan a sus objetivos y presupuesto.

                        </p>
                    )}

                    <button className="boton-contacto-planes">
                        <a target="_blank" rel="noreferrer" href="https://wa.me/573204543746">Contáctanos</a>
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    );

}

export { Modal }