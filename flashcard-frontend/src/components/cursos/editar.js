import React, { useState } from "react";

import { Row, Col, Input, Button, Card } from 'react-materialize'

import {NavLink, useParams} from 'react-router-dom'

import api from "../../services/api"

const Editar = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const {colecaoId} = useParams('');

    const editar = async () =>{
		await api.put("/" + colecaoId, {nome: name, descricao: description});
	}

    return (
        <Card>
        <Row>
            <Input placeholder="Nome do novo curso" 
                label="Nome do curso" 
                onChange={event => setName(event.target.value)} s={12} 
            />
            
            <Input placeholder="Descrição do novo curso" 
                label="Descrição" 
                onChange={event => setDescription(event.target.value)} s={12} 
            />

            <Col s={12} m={12}>
                <NavLink to="/cursos" >
                    <Button onClick={editar} waves='light' className="right grey darken-2">Editar</Button>
                </NavLink>
            </Col>
        </Row>
        </Card>
    );
}

export default Editar;