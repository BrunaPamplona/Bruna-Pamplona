// Importando o React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import './index.css';

// Renderizando o component APP (com seus sub componenets e etc) em <div id="root"></div> do index.html
// Obs: Colocamos o <BrowserRouter> envolta de <App /> para que as rotas fiquem disponíveis no nosso APP todo
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))