import fondoPlanes from "../img/FondoPlanes.jpg";
import escaladaPlanes from "../img/Escalada.jpg";
import rappelPlanes from "../img/Rappel.jpg";
import caminataPlanes from "../img/Caminata.jpg";
import cuevaPlanes from "../img/Cueva.jpg";
import cabalgataPlanes from "../img/Cabalgata.jpg";
import ferrataPlanes from "../img/ferrata.jpg";
import cursosPlanes from "../img/cursos.jpg";
import corporativosPlanes from "../img/corporativos.jpg";
import "./Planes.css";
import React from "react";
import { Modal } from "../Modal";

function Planes() {
    const datosPlanes = [
        {
            "fotoURL": escaladaPlanes,
            "Titulo": "Escalada en Roca",
        },
        {
            "fotoURL": rappelPlanes,
            "Titulo": "Rappel",
        },
        {
            "fotoURL": caminataPlanes,
            "Titulo": "Caminatas"
        },
        {
            "fotoURL": cuevaPlanes,
            "Titulo": "Travesía en cuevas"
        },
        {
            "fotoURL": cabalgataPlanes,
            "Titulo": "Cabalgata"
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
        <div className="div_planes">
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
                        <img src={item.fotoURL} alt="foto plan"/>
                        <p className="tituloPlan">{item.Titulo}</p>
                        <p
                            className="boton"
                        >Ver más</p>

                    </div>
                ))}
                {openModal && (
                    <Modal data={dataModal} setOpenModal={setOpenModal}>

                    </Modal>
                )}
            </div>
        </div>
    );
}

export { Planes }