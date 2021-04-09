
import './App.css';
import Cards from './components/Cards';
//import Hola from './components/Hola'
//import Contador from './components/Contador'
//import Listado from './components/Listado'
//import Temperatura from './components/Temperatura'
//import Formulario from './components/Formulario'
//import Bienvenida from './components/Bienvenida'

function App() {
  return ( //Para renderizar un componente hay que llamarlo como si fuese un elemento de html
    <div className="App">
      <h1>Funcionando</h1>
      <hr />
      <div className="row">
        <div className="col">
          <Cards
            imagen="http://lorempixel.com/output/nature-q-c-150-150-10.jpg"
            titulo="Tarjeta 1"
            texto="bla bla bla bla bla bla"
          />
        </div>
        <div className="col">
          <Cards
            imagen="http://lorempixel.com/output/nature-q-c-150-150-10.jpg"
            titulo="Tarjeta 2"
            texto="bla bla bla bla bla bla"
          />
        </div>
        <div className="col">
          <Cards
            imagen="http://lorempixel.com/output/nature-q-c-150-150-10.jpg"
            titulo="Tarjeta 3"
            texto="bla bla bla bla bla bla"
          />
        </div>
      </div>

    </div>
  );
}

export default App;
