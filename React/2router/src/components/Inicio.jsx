import React from 'react';
import {useParams} from 'react-router-dom' //useParams es un Hook, es una función que captura de las rutas lo que se envíe de la misma 

const Inicio = () => {

    const {nombre} = useParams() //Con Object Destructuring capturo el objeto que me trae el useParams, más específicamente la propiedad "nombre" en este caso
    //Esta es la única forma de recoger los parámetros que vengan de las rutas
    return (
        <div>
            <h1>Pagina de Inicio</h1>
            {nombre}
        </div>
    );
};

export default Inicio;