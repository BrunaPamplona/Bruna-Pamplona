// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col } from 'react-materialize';
import { NavLink} from 'react-router-dom'

import Curso from "./curso"

const Cursos = (props) => (
  <Row>
    <h4>
      Cursos
    </h4>
    <NavLink to="/adicionar"><a class="grey waves-effect waves-light btn">Adicionar</a></NavLink>
    <Col>
    {props.coursesData.map(course => (
              <Curso
                course={course} 
              />
            ))}
    </Col>
  </Row>
);

export default Cursos;