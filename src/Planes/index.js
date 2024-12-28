import fondoPlanes from "../img/FondoPlanes.png";
import escaladaPlanes from "../img/Escalada.jpg";
import rappelPlanes from "../img/Rappel.png";
import caminataPlanes from "../img/Caminata.jpg";
import cuevaPlanes from "../img/Cueva.jpeg";
import cabalgataPlanes from "../img/Cabalgata.png";
import ferrataPlanes from "../img/ferrata.png";
import cursosPlanes from "../img/cursos.png";
import corporativosPlanes from "../img/corporativos.png";
import "./Planes.css";
import React from "react";
import { Modal } from "../Modal";

function Planes() {
    const datosPlanes = [
        {
            "fotoURL": escaladaPlanes,
            "Titulo": "Escalada en Roca",
            "descripcion": "¡Vive la emoción de la escalada en roca en Suesca, Cundinamarca! Sumérgete en la aventura y la naturaleza mientras desafías tus límites en uno de los destinos de escalada más icónicos de Colombia.Suesca, con sus majestuosas paredes de roca, es el escenario perfecto para vivir una experiencia única, rodeado de impresionantes paisajes y aire puro. Tanto si eres principiante como un escalador experimentado, nuestras rutas están diseñadas para todos los niveles.Contarás con equipo de alta calidad y la guía de expertos que te acompañarán en cada paso del camino.Sentirás la adrenalina al alcanzar nuevas alturas y la satisfacción de superar tus propios retos.",
        },
        {
            "fotoURL": rappelPlanes,
            "Titulo": "Rappel",
            "descripcion": "¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca! Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable. Imagina sentir el viento en tu rostro mientras conquistas cada metro de descenso, rodeado de un paisaje de ensueño. Al finalizar, te quedarás con una sensación de logro y una sonrisa que te acompañará por mucho tiempo. ¡No esperes más para vivir esta experiencia!  Reserva tu aventura de rappel en Suesca hoy y deja que la emoción te lleve a nuevas alturas (y profundidades). ¡El desafío y la diversión te están esperando! ",
        },
        {
            "fotoURL": caminataPlanes,
            "Titulo": "Caminatas",
            "descripcion": "¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca! Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable. Imagina sentir el viento en tu rostro mientras conquistas cada metro de descenso, rodeado de un paisaje de ensueño. Al finalizar, te quedarás con una sensación de logro y una sonrisa que te acompañará por mucho tiempo. ¡No esperes más para vivir esta experiencia!  Reserva tu aventura de rappel en Suesca hoy y deja que la emoción te lleve a nuevas alturas (y profundidades). ¡El desafío y la diversión te están esperando! ",
        },
        {
            "fotoURL": cuevaPlanes,
            "Titulo": "Travesía en cuevas",
            "descripcion": "¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca! Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable. Imagina sentir el viento en tu rostro mientras conquistas cada metro de descenso, rodeado de un paisaje de ensueño. Al finalizar, te quedarás con una sensación de logro y una sonrisa que te acompañará por mucho tiempo. ¡No esperes más para vivir esta experiencia!  Reserva tu aventura de rappel en Suesca hoy y deja que la emoción te lleve a nuevas alturas (y profundidades). ¡El desafío y la diversión te están esperando! ",
        },
        {
            "fotoURL": cabalgataPlanes,
            "Titulo": "Cabalgata",
            "descripcion": "¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca! Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable. Imagina sentir el viento en tu rostro mientras conquistas cada metro de descenso, rodeado de un paisaje de ensueño. Al finalizar, te quedarás con una sensación de logro y una sonrisa que te acompañará por mucho tiempo. ¡No esperes más para vivir esta experiencia!  Reserva tu aventura de rappel en Suesca hoy y deja que la emoción te lleve a nuevas alturas (y profundidades). ¡El desafío y la diversión te están esperando! ",
        },
        {
            "fotoURL": ferrataPlanes,
            "Titulo": "Ascenso en vía Ferrata",
            "descripcion": "¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca! Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable. Imagina sentir el viento en tu rostro mientras conquistas cada metro de descenso, rodeado de un paisaje de ensueño. Al finalizar, te quedarás con una sensación de logro y una sonrisa que te acompañará por mucho tiempo. ¡No esperes más para vivir esta experiencia!  Reserva tu aventura de rappel en Suesca hoy y deja que la emoción te lleve a nuevas alturas (y profundidades). ¡El desafío y la diversión te están esperando! ",
        },
        {
            "fotoURL": cursosPlanes,
            "Titulo": "Cursos",
            "descripcion": "¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca! Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable. Imagina sentir el viento en tu rostro mientras conquistas cada metro de descenso, rodeado de un paisaje de ensueño. Al finalizar, te quedarás con una sensación de logro y una sonrisa que te acompañará por mucho tiempo. ¡No esperes más para vivir esta experiencia!  Reserva tu aventura de rappel en Suesca hoy y deja que la emoción te lleve a nuevas alturas (y profundidades). ¡El desafío y la diversión te están esperando! ",
        },
        {
            "fotoURL": corporativosPlanes,
            "Titulo": "Eventos Corporativos",
            "descripcion": "¡Atrévete a descender al corazón de la aventura con rappel en Suesca, Cundinamarca! Descubre la adrenalina pura mientras desciendes por las imponentes paredes de roca que hacen de Suesca un destino único en Colombia. Esta actividad no solo es emocionante, sino que también te conecta con la naturaleza en su estado más puro. Con vistas espectaculares y la energía incomparable del entorno, cada descenso es una experiencia inolvidable. Imagina sentir el viento en tu rostro mientras conquistas cada metro de descenso, rodeado de un paisaje de ensueño. Al finalizar, te quedarás con una sensación de logro y una sonrisa que te acompañará por mucho tiempo. ¡No esperes más para vivir esta experiencia!  Reserva tu aventura de rappel en Suesca hoy y deja que la emoción te lleve a nuevas alturas (y profundidades). ¡El desafío y la diversión te están esperando! ",
        }
    ];

    const [openModal, setOpenModal] = React.useState(false);
    const [dataModal, setDataModal]=React.useState("");
    return (
        <div>
            <div className="titulo_planes">
                <h2>Nuestros Planes</h2>
                <img src={fondoPlanes} alt="Rocas_Suesca" />
            </div>
            <div
                className="planes">
                {datosPlanes.map(item => (
                    <div
                        className="cardPlanes"
                        key={item.Titulo}
                        onClick={
                            () => {
                                setDataModal(item);
                                setOpenModal(true);
                            }
                        }
                    >
                        <img src={item.fotoURL} />
                        <p className="tituloPlan">{item.Titulo}</p>
                        <p
                            className="boton"
                        >Ver más</p>

                    </div>
                ))}
                {openModal && (
                    <Modal data={dataModal}>

                    </Modal>
                )}
            </div>
        </div>
    );
}

export { Planes }