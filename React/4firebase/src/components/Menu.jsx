import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebaseconfig'

const Menu = () => {

    const historial = useHistory()
    const [usuario, setUsuario] = useState(null)

    useEffect(() => { //Con este hook comprobamos si el usuario está activo dentro de la aplicación
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email) //Si lo está lo cargamos en el estado
            }
        })
    }, [])

    const cerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        historial.push('/')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Inicio</Link>
                    </li>
                    <li>
                        {
                            usuario ? //Si el usurio está loggeado entonces no muestro la opción de login en el menu
                                (
                                    <span></span>
                                ) :
                                (
                                    <Link className="nav-link" to='/Admin'>Admin</Link>
                                )
                        }

                    </li>
                    <li>
                        {
                            usuario ? //Si el usurio está loggeado entonces no muestro la opción de login en el menu
                                (
                                    <span></span>
                                ) :
                                (
                                    <Link className="nav-link" to='/Login'>Login</Link>
                                )
                        }
                    </li>
                </ul>
                {
                    usuario ? //Si el usuaio está cargado en el estado entonces aparece el botón de cerrar sesión
                        (
                            <button className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesión</button>
                        ) :
                        (
                            <span></span>
                        )
                }
            </nav>
        </div>
    );
};

export default Menu;