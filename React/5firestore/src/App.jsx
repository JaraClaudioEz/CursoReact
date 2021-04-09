import React, { useState, useEffect } from 'react'
import { store } from './firebaseconf'

function App() {

  const [idUsuario, setIdUsuario] = useState('')
  const [nombre, setNombre] = useState('')
  const [phone, setPhone] = useState('')
  const [usuarioAgenda, setUsuarioAgenda] = useState([])
  const [error, setError] = useState('')
  const [modoEdicion, setModoEdicion] = useState(null)

  useEffect(() => {
    const getUsuarios = async () => { //Con asyn y await permito a la aplicacion seguir funcionando mientras que en otro hilo espero la respuesta con los datos
      const { docs } = await store.collection('Agenda').get() //Lo que se hace acá es un Object Destructuring de la respuesta y la guardo en docs
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
      //El nuevo array lo cargo iterando a través de lo obtenido de la respuesta, docs en este caso
      //En cada iteración guardo un objeto en el array con un id y todo (data) lo que venga del item
      setUsuarioAgenda(nuevoArray)
    }
    getUsuarios()
  }, []) //IMPORTANTE: Después de la coma poner un array vacío como mínimo siempre!

  const setUsuarios = async (e) => { //Esta función es para registrar nuevos usuarios
    e.preventDefault()
    if (!nombre.trim()) { //Checkea campos vacíos
      setError('El campo nombre está vacío')
    } else if (!phone.trim()) {
      setError('El campo número está vacío')
    }

    const usuario = { //Guarda en objeto JSON los datos del form
      nombre: nombre,
      telefono: phone
    }

    try {
      const data = await store.collection('Agenda').add(usuario) //store.collection() crea una nueva coleccion si no existe, luego agrega el objeto JSON a la coleccion
      //Arriba guardo los datos en la base de datos
      //Abajo traigo los datos desde la base de datos
      const { docs } = await store.collection('Agenda').get() //Estos 3 pasos se repiten para que se actualice la lista al momento de pulsar el botón
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setUsuarioAgenda(nuevoArray)

      //console.log('Agregado')
      alert('Usuario agregado!')

    } catch (error) {
      console.log(error)
    }
    setNombre('')
    setPhone('')

  }

  const borrarUsuario = async (id) => {
    try {
      await store.collection('Agenda').doc(id).delete()

      const { docs } = await store.collection('Agenda').get() //Actualiza la lista
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setUsuarioAgenda(nuevoArray)

    } catch (error) {
      console.log(error);
    }
  }

  const actualizarUsuario = async (id) => {
    try {
      const data = await store.collection('Agenda').doc(id).get()

      const { nombre, telefono } = data.data()
      setNombre(nombre)
      setPhone(telefono)
      setIdUsuario(id)
      setModoEdicion(true)

    } catch (error) {
      console.log(error);
    }

  }

  const setUpdate = async (e) =>{
    e.preventDefault()
    if (!nombre.trim()) { //Checkea campos vacíos
      setError('El campo nombre está vacío')
    } else if (!phone.trim()) {
      setError('El campo número está vacío')
    }

    const userUpdate = {
      nombre:nombre,
      telefono:phone
    }

    try {
      await store.collection('Agenda').doc(idUsuario).set(userUpdate)

      const { docs } = await store.collection('Agenda').get() //Actualiza la lista
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setUsuarioAgenda(nuevoArray)

    } catch (error) {
      console.log(error);
    }

    setNombre('')
    setPhone('')
    setIdUsuario('')
    setModoEdicion(false)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Formulario de Usuarios</h2>
          <form className="form-group" onSubmit={modoEdicion ? setUpdate : setUsuarios}>
            <input type="text" className="form-control" placeholder="Introduce el Nombre" onChange={(e) => { setNombre(e.target.value) }} value={nombre} />
            <input type="text" className="form-control mt-3" placeholder="Introduce el Número" onChange={(e) => { setPhone(e.target.value) }} value={phone} />
            {
              modoEdicion ?
              (
                <input type="submit" value="Editar" className="btn btn-dark btn-block mt-3" />
              )
              :
              (
                <input type="submit" value="Registrar" className="btn btn-dark btn-block mt-3" />
              )
            }
            
          </form>
          {
            error ? (
              <div>
                <p>{error}</p>
              </div>
            ) :
              (
                <span></span>
              )
          }
        </div>
        <div className="col">
          <h2>Lista de Agenda</h2>
          <ul className="list-group">
            {
              usuarioAgenda.length !== 0 ?
                (
                  usuarioAgenda.map(item => (
                    <li className="list-group-item" key={item.id}>{item.nombre} -- {item.telefono}
                      <button onClick={(id) => { borrarUsuario(item.id) }} className="btn btn-danger float-right">Borrar</button>
                      <button onClick={(id) => { actualizarUsuario(item.id) }} className="btn btn-info float-right mr-3">Actualizar</button>
                    </li>

                  ))
                )
                :
                (
                  <span>No hay usuarios en la agenda</span>
                )
            }
          </ul>

        </div>
      </div>
    </div >
  );
}

export default App;
