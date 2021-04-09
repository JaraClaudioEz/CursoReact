import React, {useState, useEffect} from 'react';
//El useEffect, en un Hook, es una función callback que es llamada luego que es renderizada la página, o sea que se vea en el browser

const Base = () => {

    const [nombre, setNombre] = useState('Lolo')

    useEffect( ()=> { //Es usado comúnmente para conectarse a una API 
        setTimeout( ()=> {
            setNombre('Tito')
        }, 2000)
    })

    return (
        <div>
            <h2>Página de Base Ruta /</h2>
            {nombre}
        </div>
    );
};

export default Base;