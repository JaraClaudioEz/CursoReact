import React from 'react';

const Cards = (props) => {
    const { imagen, titulo, texto } = props

    //Para introducir estilos en línea se utiliza la doble llave {{ }}, donde la propiedad es una key y el valor un string. Las propiedades separadas por ,
    //Sino tambien puedo crear un objeto JSON style:
    const style={
        //etc
    }

    return (
        <div className="card" style={{width: "18rem"}}> 
            <img src={imagen} className="card-img-top img-thumbnail" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{texto}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};

export default Cards;