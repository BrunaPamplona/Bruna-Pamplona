// Importantando o React
import React from "react";

import Home from "./components/home/home";
import Cursos from "./components/cursos/cursos";
import Adicionar from './components/cursos/adicionar'

import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Routes, Route } from 'react-router-dom'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/cursos' element={<Cursos coursesData={props.coursesData}/>}/>
        <Route path='/adicionar' element={<Adicionar/>}/>
      </Routes>
    </Container>
  </main>
);

export default Main;