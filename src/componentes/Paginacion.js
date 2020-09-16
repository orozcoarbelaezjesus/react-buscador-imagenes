import React from "react";

function Paginacion(props){
    return(
        <div className="py-3 justify-content-center">
            <button type="button" onClick={props.paginaAnterior} className="btn btn-info mr-1">Anterior</button>
            <button type="button" onClick={props.paginaSiguiente} className="btn btn-info">Siguiente</button>
        </div>
    )
}

export default Paginacion;