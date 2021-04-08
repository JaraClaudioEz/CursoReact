function saludar(){
    console.log('Hola')
}

saludar()

//Para declarar variables se usa let

//TEMPLATES STRING

const nombre = 'Eze'
const apellido = 'Jara'

console.log(`El nombre es ${nombre} y el apellido ${apellido}`); //Para el template se usan las comillas hacia la izquierda `` (tecla abajo de esc)
//Con el ${} todo lo que está adentro lo evalua como contenido de javascript

//OBJETOS (JSON)

const Persona = { //Puede ser constante o variable
    nombre: 'Eze', //os objetos tienen propiedades (key) con su valor (value)
    edad: 40,
    casado: true,
    hijo: { //Los valores de las propiedades pueden ser de cualquier tipo, hasta de otro Objeto
        nombreHijo: 'Mica'
    }
}

Persona.id = 1 //Puedo definir una propiedad fuera de la definición del Objeto en cualquier momento
console.log(Persona);

//OBJECT DESTRUCTURING

const {nombre, edad} = Persona //javascript entiende que en Persona hay propiedades que coinciden con el nombre de las variables
                               //Por lo tanto asigna los valores de las keys coincidentes a las variables constantes en este caso
                               //Tambien con el . puedo acceder a los objetos dentro del objeto

