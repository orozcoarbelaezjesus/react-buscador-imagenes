import React from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

class Resultado extends React.Component{

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if(imagenes.length===0) return null;

        return (
            <div className="container">
                <div className="row col-12 p-2">
                    {imagenes.map(imagen => (
                        <Imagen imagen={imagen} key={imagen.id} />
                    ))}
                </div>
                <div className="row justify-content-center">
                    <Paginacion paginaAnterior={this.props.paginaAnterior} paginaSiguiente={this.props.paginaSiguiente} />
                </div>
            </div>
        )

    }

    render(){
        return (
            <div className="resultados">
                    {this.mostrarImagenes()}
            </div>
        )
    }
}

export default Resultado;
