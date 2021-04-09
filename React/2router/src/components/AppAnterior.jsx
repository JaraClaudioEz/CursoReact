//App original del Curso

import React from 'react'
import Inicio from './components/Inicio'
import Base from './components/Base'
//App es un componente principal el cual es el punto de entrada para todos los componentes
import {
  BrowserRouter as Router, //Para no escribir largo se pone as para poner un alias, en este caso Router es el componente principal
  Switch, //Para camiar los path para cada url
  Route, //Cada ruta, ojo la ruta base o sea de sólo / hay que poner el exact porque sino las rutas de más abajo van a ser ignoradas ya que tomaría siempre la primera
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router> 
      <Link to="/Inicio">Inicio</Link>
      <Link to="/">Base</Link>
      <Switch>
        <Route exact path="/inicio/:nombre">
          <Inicio></Inicio>
        </Route>
        <Route path="/">
          <Base></Base>
        </Route>
      </Switch>
    </Router>
  );
}
//Con el : en el path indico que lo siguiente es Dinámico, o sea puede ser un número o un texto pero lo principal es que lo capture el componente
//En este caso lo identificamos con "nombre", puedo asignarlo como quiera pero es para identificarlo
//Puedo combinar los dinámicos : con los estáticos / como quiera
export default App;