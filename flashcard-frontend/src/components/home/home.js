// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';

import company_avatar2 from '../../images/company2.jpg';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre nós</h5>
        <Card>
          <div>
            <p><b>Trajetória</b></p>
            <p>Há muitos anos, nós oferecemos à sociedade uma educação superior acessível e focada na formação científica, cultural, tecnológica e humanística de alta qualidade para a construção de um país melhor.</p>
            <br/>
            <p><b>Visão</b></p>
            <p>Ser uma instituição educacional reconhecida pela excelência nos serviços prestados, pelos seus elevados padrões éticos e pela qualidade pessoal e profissional de seus egressos.</p>
          </div>
        </Card>
        <h5 className="subtitle">Competências</h5>  

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Professores com"
                    company="mestrado e doutorado"
                    description="A maior parte de nossos profissionais contam com mestrado e doutorado em seus currículos, permitindo um ensino mais completo e de maior qualidade."
                    avatar={company_avatar}
        />
        <Experience title="Nota do"
                    company="MEC"
                    description="Possuímos uma avaliação 5 no MEC, comprovando nossa experiência e excelência na área de ensino, buscando evoluir cada vez mais."
                    avatar={company_avatar2}
        />
    </Col>
  </Row>
);

export default Home;