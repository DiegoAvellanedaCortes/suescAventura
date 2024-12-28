import { createPortal } from "react-dom";
import "./modal.css"

function Modal ({data}){
   
    return createPortal(
        <div className="modalPlanes">
            <div className="contenedor">
                <p>{data.Titulo}</p>
                <img src={data.fotoURL}/>
                <p>{data.descripcion}</p>
            </div>
        </div>,
        document.getElementById("modal")
    );

}

export {Modal}