import React, {Fragment, useState} from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0) //Con el useState permite cambiar el estado de la constante y que se actualice 
                                            //Numero es la constante y SetNumero es la funcion para acceder a la constante
                                            //Es una forma similar a los Set/Get de Java y C# para acceder a variables privadas
    const Aumentar = () => {
        setNumero(numero + 1)
    }
    const Reducir = () => {
        setNumero(numero - 1)
    }

    return (
        <Fragment>
            <h2>Cantidad del contador: {numero}</h2>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Reducir</button>
        </Fragment>
    );
};

export default Contador;