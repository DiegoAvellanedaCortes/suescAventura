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
import { FormattedMessage } from "react-intl";

function Planes() {
    const datosPlanes = [
        {
            "fotoURL": escaladaPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.escalada_titulo"
                    defaultMessage="Escalada en Roca"
                />,
        },
        {
            "fotoURL": rappelPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.rappel"
                    defaultMessage="Rappel"
                />,
        },
        {
            "fotoURL": caminataPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.caminatas"
                    defaultMessage="Caminatas"
                />,
        },
        {
            "fotoURL": cuevaPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.cuevas"
                    defaultMessage="Travesía en cuevas"
                />,
        },
        {
            "fotoURL": cabalgataPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.cabalgata"
                    defaultMessage="Cabalgata"
                />,
        },
        {
            "fotoURL": ferrataPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.ferrata"
                    defaultMessage="Ascenso en vía Ferrata"
                />,
        },
        {
            "fotoURL": cursosPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.cursos"
                    defaultMessage="Cursos"
                />,
        },
        {
            "fotoURL": corporativosPlanes,
            "Titulo":
                <FormattedMessage
                    id="planes.corporativos"
                    defaultMessage="Eventos Corporativos"
                />,
        }
    ];

    const [openModal, setOpenModal] = React.useState(false);
    const [dataModal, setDataModal] = React.useState("");
    return (
        <div className="div_planes">
            <div className="titulo_planes">
                <h2>
                    <FormattedMessage
                        id="planes.titulo"
                        defaultMessage="Nuestros Planes"
                    />
                </h2>
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
                        <img src={item.fotoURL} alt="foto plan" />
                        <p className="tituloPlan">{item.Titulo}</p>
                        <p
                            className="boton"
                        >
                            <FormattedMessage
                                id="planes.vermas"
                                defaultMessage="Ver más"
                            />
                        </p>

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