import React, { useState } from 'react';
import uniqid from 'uniqid' //Esta libreria sirve para crear Id unicos de forma aleatoria

const Listadonombres = () => {

    const [nombre, setNombre] = useState('')
    const [listaNombres, setListaNombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)


    const addNombre = (e) => {
        e.preventDefault() //Esto previene el comportamiento por defecto del formulario, o sea la action?
        if(!nombre.trim()){
            setError('Nombre vacío')
            return //Return me sale de la funcion agregar nombre
        }
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListaNombres([...listaNombres, nuevoNombre]) //... es un operador de propagación
        setNombre('')
        setError(null)

    }

    const deleteNombre = (id) => {
        const newArray = listaNombres.filter(item => item.id !== id) //En realidad no se borra nada, lo que se hace es generar un nuevo array
        //Este nuevo array se genera filtrando el anterior con el id a borrar
        setListaNombres(newArray)
    }

    const edit = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editNombre = (e) => {
        e.preventDefault()
        const newArray = listaNombres.map( item => item.id === id ? {id:id, tituloNombre:nombre}: item)
        setListaNombres(newArray)
        setModoEdicion(false)
        setNombre('')
    }

    return (
        <div>
            <h2>Create Read Update Delete</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de Nombres</h2>
                    <ul className="list-group">
                        {
                            listaNombres.map(item =>
                                <li key="{item.id}" className="list-group-item">{item.tituloNombre}
                                    <button onClick={() => { deleteNombre(item.id) }} className="btn btn-danger float-right">Delete</button>
                                    <button onClick={() => { edit(item) }} className="btn btn-primary float-right">Edit</button>
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario</h2>
                    <form onSubmit={modoEdicion ? editNombre : addNombre} className="form-group">
                        <input onChange={(e) => { setNombre(e.target.value) }} type="text" placeholder="Nombre" className="form-control mb-3" value={nombre} />
                        <input type="submit" value={modoEdicion ? 'Editar' : 'Registrar'} className="btn btn-info btn-block" />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Listadonombres;