import React, { useState } from 'react';

const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(19)
    const Subir = () => {
        setTemperatura(temperatura + 1)
    }
    const Bajar = () => {
        setTemperatura(temperatura - 1)
    }

    return (
        <div className="container">
            <h2>La temperatura es: {temperatura} </h2>
            <p>
                {
                    temperatura > 25 ? 'Hace Calor' : 'Hace fresco' //Operador Ternario, se da la condicion luego el valor para true y el valor para false
                }
            </p>
            <button className="btn btn-primary btn-block" onClick={Subir}>Aumentar Temperatura</button>
            <button className="btn btn-primary btn-block" onClick={Bajar}>Reducir Temperatura</button>
        </div>
    );
};

export default Temperatura;