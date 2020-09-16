import React from "react";

function Imagen(props){

    const { largeImageURL, likes, previewURL, views, tags } = props.imagen;
    
    return(
        <div className="col-lg-3 col-sm-6 col-md-4 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-image-top" width="200px" height="200px" />
                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;