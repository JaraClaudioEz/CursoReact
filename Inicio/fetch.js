//Es una función para hacer peticiones a APIs

fetch('https://jsonplaceholder.typicode.com/todos/1') //Fetch trabaja con "promesas", dentro de la misma viene la respuesta (response)
    .then( response => response.json() ) //Para capturar la respuesta. A la respuesta la parseamos a un objeto JSON. En una arrow function todo lo que esta a la derecha es devuelto (return implícito)
    .then( mijson => console.log(mijson) )  //El JSON lo capturo con este then 
    .catch( e => console.log(e) ) //Para capturar los errores, esto se ejecuta si fetch o los then dan false, o sea que hay un error

//ASYNC Y AWAIT: de esta forma se trabaja de forma más segura, de forma paralela al hilo principal del programa

const obtenerUsuario = async() => { //Se crea un hilo aparte y lo ejecuta, el hilo principal no se detiene
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/1') //Espera a que fetch me devuelva la respuesta
        const datos = await respuesta.json() //Parseo la respuesta a JSON. A guardar la respuesta en constantes no permite su modificación (seguridad)
        console.log(datos);
    } catch (e) {
        console.log(e);
    }
}

obtenerUsuario()