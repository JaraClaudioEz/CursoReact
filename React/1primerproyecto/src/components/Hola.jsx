import React, {Fragment} from 'react'; //Se importa Fragment para poder utilizarlo como contenedor

function Hola(){
    let saludo = 'variable saludo'
    return( //con los paréntesis se puede introducir html en un archivo de js y con {} se introduce codigo js
            //Para escribir codigo html debe estar siempre dentro de un elemento root contenedor, div en este caso
            //Para evitar el uso de un div asi no se hace lío con los div anidados en css, se puede utilizar como contenedor Fragment
        <div>
            <h2>Primer componente Hola {saludo}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi optio consectetur quaerat obcaecati, sunt expedita maxime nobis sit fugit soluta laudantium perspiciatis maiores mollitia laboriosam vitae a saepe provident? Vitae.</p>
        </div>
        
    )
}

export default Hola