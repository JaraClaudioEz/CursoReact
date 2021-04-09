import React, { useState } from 'react';
import { auth } from '../firebaseconfig'
import {useHistory} from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [msjError, setMsjError] = useState(null)
    const historial = useHistory()

    const RegistrarUsuario = (e) => {
        e.preventDefault()
        /* //DE ESTA FORMA NO FUNCIONA EL TRY CATCH POR EL THEN EN EL MEDIO
        try {
            auth.createUserWithEmailAndPassword(email, pass)
                .then(r => alert('Usuario Registrado')) //Si está todo ok muestra el alert sino se va al catch
            //alert('Usuario Registrado') //Lo que se hace normalmente es un push a otra dirección u otra parte de la aplicación
        } catch (error) {
            console.log(error);
            if (e.code == 'auth/invalid-email') {
                setMsjError('Formato de email incorrecto')
            }
            if (e.code == 'auth/weak-password') {
                setMsjError('L contraseña debe ser al menos de 6 dígitos')
            }
        }*/
        auth.createUserWithEmailAndPassword(email, pass)
            .then(r => {
                historial.push('/') //Cuando el usuario se registre lo redirecciona o pushea a otra página, inicio en este caso
            }) 
            
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    setMsjError('Formato de email incorrecto')
                }
                if (error.code === 'auth/weak-password') {
                    setMsjError('La contraseña debe ser al menos de 6 dígitos')
                }
            })
    }

    const loginUsuario = (e) => {
        auth.signInWithEmailAndPassword(email, pass)
        .then( (respuesta) => {
            historial.push('/') //Lo mismo cuando se loggea como cuando se registra
        })
        .catch( (error) => {
            if (error.code === 'auth/wrong-password') {
                setMsjError('La contraseña ingresada es incorrecta')
            }/*
            if (error.code == 'auth/weak-password') {
                setMsjError('La contraseña debe ser al menos de 6 dígitos')
            }
            console.log(error);*/
        })
    }

    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <form className="form-group" onSubmit={RegistrarUsuario}>
                    <input
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control mt-4"
                        type="text"
                        placeholder="Introduce un email"
                    />
                    <input
                        onChange={(e) => { setPass(e.target.value) }}
                        className="form-control mt-4"
                        type="password"
                        placeholder="Introduce una contraseña"
                    />
                    <input
                        value="Registrarse"
                        className="btn btn-primary btn-block mt-4"
                        type="submit"
                    />
                </form>
                <button
                    onClick={loginUsuario}
                    className="btn btn-success btn-block"
                >Iniciar Sesión</button>
                {
                    msjError != null ? (
                        <div className="alert alert-danger mt-4">
                            {msjError}
                        </div>
                    ) :
                        (
                            <span></span>
                        )
                }
            </div>
            <div className="col"></div>
        </div >
    );
};

export default Login;