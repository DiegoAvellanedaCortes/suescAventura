import "./ClientesInstitucionales.css"
import clientes from "../img/Clientesinstitucionales.png"

function ClientesInstitucionales () {
    return(
        <section className="clientes_Ins">
            <h2>Clientes Institucionales</h2>
            <img src={clientes} alt="logos corporativos"/>
        </section>
    );
}

export {ClientesInstitucionales}