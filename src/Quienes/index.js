import "./quienes.css"
import Equipo from "../img/Equipo.jpg"
import { FormattedMessage } from "react-intl";

function Quienes() {
    return (
        <section className="quienes_somos">
            <img className="foto_equipo" src={Equipo} alt="equipo" />
            <div className="registro_turismo">
                <p className="titulo_registro_turismo">
                    <FormattedMessage
                        id="quienes.registro"
                        defaultMessage="Registro Nacional de Turismo (RTN) SuescAventura - 65563"
                    /></p>
                <p className="descripcion_agencia">
                    <FormattedMessage
                        id="quienes.descripcion_agencia"
                        defaultMessage="Somos operadores turísticos en el municipio de Suesca (Cundinamarca) desde el 2015, legalmente constituidos, nos especializamos en actividades al aire libre, turismo de naturaleza y turismo de aventura con todos los equerimiento de seguridad necesarios para brindar un excelente servicio y así generar una experiencia inolvidable en nuestros visitantes."
                    />
                </p>
            </div>
            <section className="valores">
                <p className="titulo_valores">
                    <FormattedMessage
                        id="quienes.nuestrosValores"
                        defaultMessage="Nuestros Valores:"
                    /></p>
                <ul className="lista_valores">
                    <li>
                        <FormattedMessage
                            id="quienes.calidad"
                            defaultMessage="Calidad: Ofrecemos solo lo mejor, cuidando cada detalle para que tu aventura sea perfecta."
                        />
                    </li>
                    <li>
                        <FormattedMessage
                            id="quienes.pasion"
                            defaultMessage="Pasión: Amamos lo que hacemos, y esa pasión se refleja en cada uno de nuestros servicios."
                        />
                    </li>
                    <li>
                        <FormattedMessage
                        id="quienes.compromiso"
                        defaultMessage="Compromiso: Nos comprometemos a brindar un servicio excepcional, siempre poniendo al cliente en el centro de todo."
                        />
                        </li>
                    <li>
                        <FormattedMessage
                        id="quienes.innovacion"
                        defaultMessage="Innovación: Nos mantenemos a la vanguardia, buscando siempre nuevas formas de sorprender y deleitar a nuestros clientes."
                        />
                        </li>
                </ul>
            </section>
        </section>
    );
}

export { Quienes }