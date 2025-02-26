import "./ClientesInstitucionales.css"
import clientes from "../img/Clientesinstitucionales.jpg"
import { FormattedMessage } from "react-intl";

function ClientesInstitucionales() {
    return (
        <section className="clientes_Ins">
            <h2>
                <FormattedMessage
                    id="inicio.titulo_clientes_institucionales"
                    defaultMessage="Clientes Institucionales"
                />
            </h2>
            <img src={clientes} alt="logos corporativos" />
        </section>
    );
}

export { ClientesInstitucionales }