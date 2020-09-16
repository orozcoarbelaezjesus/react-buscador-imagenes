import React from "react";

class Buscador extends React.Component{

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        const termino=this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

    render(){
        return(
            <React.Fragment>
                <div className="jumbotron">
                    <h1 className="text-center">Imágenes</h1>
                    <h5 className="text-center">Encuentra imágenes sobre los temas que más te gustan</h5>
                    <form onSubmit={this.obtenerDatos}>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <input type="text" ref={this.busquedaRef} className="form-control form-control-lg text-center" placeholder="Busca tu imagen, por ejemplo: laptop" />
                            </div>
                            <div className="form-group col-md-4">
                                <input type="submit" className="btn btn-lg btn-block btn-primary" value="Buscar" />
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default Buscador;
