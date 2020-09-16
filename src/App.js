import React from 'react';
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

class App extends React.Component {

  state = {
    termino: "",
    imagenes: [],
    pagina: ""
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarAPI();
    })
  }

  consultarAPI = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
    this.scroll();
  }

  paginaAnterior = () => {
    let pagina=this.state.pagina;
    if(pagina===1) return null;
    pagina-=1;
    this.setState({ pagina: pagina }, () => {
      this.consultarAPI();
    })
  }

  paginaSiguiente = () => {
    let pagina=this.state.pagina;
    pagina+=1;
    this.setState({ pagina: pagina }, () => {
      this.consultarAPI();
    })
  }

  scroll = () => {
    const elemento = document.querySelector(".resultados");
    elemento.scrollIntoView("smooth","end");
  }

  render(){
    return (
      <div className="container">
          <Buscador datosBusqueda={this.datosBusqueda} />
          {this.state.imagenes!=[] && <Resultado imagenes={this.state.imagenes} paginaAnterior={this.paginaAnterior} paginaSiguiente={this.paginaSiguiente} />}
      </div>
    )
  }
}

export default App;
