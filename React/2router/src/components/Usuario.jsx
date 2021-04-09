import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const Usuario = () => {

    const [usuario, setUsuario] = useState([])
    const {id} = useParams() //Capturo el id de la ruta que nos está enviando

    const obtenerUsuario = async () => { //Esto hace una peticion a una API, como los datos pueden tardar con esto me aseguro que el codigo se siga ejecutando
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users = await respuesta.data
        setUsuario(users)
    }

    useEffect(() => {
        obtenerUsuario()
    }, [])

    return (
        <div>
            <h4>Usuario</h4>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <small>Teléfono: {usuario.phone}</small>
        </div>
    );
};

export default Usuario;