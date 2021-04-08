const datos = [
    {nombre: 'Eze', edad: 40},
    {nombre: 'Lolo', edad: 20},
    {nombre: 'Tito', edad: 15},
    {nombre: 'Lu', edad: 70}
]

datos.forEach( elemento => { //Se puede recorrer con un forEach el array
    console.log(elemento);
})

datos.map( elemento => { //Con map es muucho más rápido recorrer el array que el forEach
    console.log(elemento.nombre); //Con el . puedo acceder a la key deseada
})