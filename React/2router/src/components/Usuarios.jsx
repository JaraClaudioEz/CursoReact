import React, { useState, useEffect } from 'react';
import axios from 'axios'; //Axios reemplaza y simplifica un poco a la función fetch de react
import {Link} from 'react-router-dom'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    const obtenerUsuarios = async () => { //Esto hace una peticion a una API, como los datos pueden tardar con esto me aseguro que el codigo se siga ejecutando
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await respuesta.data
        setUsuarios(users)
    }

    useEffect( ()=>{
        obtenerUsuarios()
    },[]) //Después de la coma , son las dependencias y si no pasamos nadas se genera un loop infinito

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            {
                usuarios.map((item) => (
                    <div>
                        <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    );
};
//Las comillas `` son para usar Template Strings
export default Usuarios;