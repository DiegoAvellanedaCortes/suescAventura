import React from "react";
import ingles from "../lang/ingles.json"
import espanol from "../lang/espanol.json"
import { IntlProvider} from "react-intl";

const IdiomaContext = React.createContext();


function IdiomaProvider({ children }) {
    const [idioma, setIdioma] = React.useState(espanol);
    const [locate, setLocate] = React.useState("es-CO");

    const establecerLeng = (lenguaje) => {
        switch (lenguaje) {
            case "es-CO":
                setIdioma(espanol);
                setLocate(lenguaje);
                break;
            case "en-US":
                setIdioma(ingles);
                setLocate(lenguaje);
                break;
            default:
                setIdioma(espanol);
                setLocate("es-CO");
        }

    }

    return (
        <IdiomaContext.Provider value={{ establecerLeng: establecerLeng }}>
            <IntlProvider locale={locate} messages={idioma}>
                {children}
            </IntlProvider>
        </IdiomaContext.Provider>
    );
}

export { IdiomaContext, IdiomaProvider }