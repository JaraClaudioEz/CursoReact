import React, { useState } from 'react';

function Formulario(props) {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const Validar = (event)=>{
        event.preventDefault()
        console.log("Pulsado");
        if(!nombre.trim()){ //La funcion trim compara la cadena de caracteres, el ! si da true significa que no hay caracteres
            console.log('El nombre está vacio');
            return
        }
        if(!edad.trim()){
            console.log('La edad está vacia');
            return
        }
    }

    return (
        <div className="container">
            <form action="" className="form-group" onSubmit={Validar}>
                <input placeholder="Nombre" className="form-control mb-3" type="text" onChange={ (e) => {setNombre(e.target.value)} } />
                <input placeholder="Edad" className="form-control mb-3" type="text" onChange={ (e) => {setEdad(e.target.value)} }/>
                <input className="btn btn-primary btn-block mb-3" type="submit" />
            </form>
        </div>
    );
}

export default Formulario;

//Al evento onChange llamamos a una callback (arrow function), ésta recibe un evento (e) del propio input.
//En la arrow se setea el valor de la constante con el valor ingresado en el input