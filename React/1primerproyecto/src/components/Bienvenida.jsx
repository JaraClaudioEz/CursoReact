import React from 'react';

function Bienvenida(props) { //Las propiedades pueden ser de cualquier tipo, un objeto
    const {nombre} = props //Esto se llama Object Destructuring, en el cual accedo a la propidead deseada del objeto y usarla en vez de todo el objeto
                           //Con , puedo elegir las props que quiera sacar del objeto ej: {nombre, edad, etc}
    return (
        <div>
           <h2>Bienvenido (objeto) {props.nombre}</h2>
           <h3>Bienvenido (propiedad) {nombre}</h3>
        </div>
    );
}

export default Bienvenida;