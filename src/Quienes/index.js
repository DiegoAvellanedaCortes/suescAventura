import "./quienes.css"
import Equipo from "../img/Equipo.png"

function Quienes() {
    return (
        <section className="quienes_somos">
            <img className="foto_equipo" src={Equipo} alt="equipo" />
            <div className="registro_turismo">
                <p className="titulo_registro_turismo">Registro Nacional de Turismo (RTN) <br />
                    SuescAventura - 65563</p>
                <p className="descripcion_agencia">
                    Somos operadores turísticos en el municipio de Suesca (Cundinamarca) desde el 2015, legalmente
                    constituidos, nos especializamos en actividades al aire libre, turismo de naturaleza y turismo de
                    aventura con todos los requerimiento de seguridad necesarios para brindar un excelente servicio y
                    así generar una experiencia inolvidable en nuestros visitantes.
                </p>
            </div>
            <section className="valores">
                <p>Nuestros Valores:</p>
                <p>
                    <ul>
                        <li>Calidad: Ofrecemos solo lo mejor, cuidando cada detalle para que tu aventura sea perfecta.</li>
                        <li>Pasión: Amamos lo que hacemos, y esa pasión se refleja en cada uno de nuestros servicios.</li>
                        <li>Compromiso: Nos comprometemos a brindar un servicio excepcional, siempre poniendo al cliente en el centro de todo.</li>
                        <li>Innovación: Nos mantenemos a la vanguardia, buscando siempre nuevas formas de sorprender y deleitar a nuestros clientes.</li>
                    </ul>
                </p>
            </section>
        </section>
    );
}

export { Quienes }