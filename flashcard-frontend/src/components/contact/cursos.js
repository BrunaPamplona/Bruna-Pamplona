// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'

import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';

const Cursos = () => (
  <Row>
    <Col m={12} s={12}>
        <h5>Cursos</h5>
        <Experience title="Biologia"
                    description=""
                    avatar={img1}
        />
        <Experience title="Física"
                    description=""
                    avatar={img2}
        />
        <Experience title="Matemática"
                    description=""
                    avatar={img3}
        />
        <Experience title="Química"
                    description=""
                    avatar={img4}
        />
        <Experience title="História"
                    description=""
                    avatar={img5}
        />
        <Experience title="Design 3D"
                    description=""
                    avatar={img6}
        />
        <Experience title="Fotografia"
                    description=""
                    avatar={img7}
        />
    </Col>
  </Row>
);

export default Cursos;