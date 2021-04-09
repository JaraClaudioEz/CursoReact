import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css' //Con yarn add agrego las librerias de bootstrap, luego debo importarlas en el index para poder usarlo en todos los componentes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
