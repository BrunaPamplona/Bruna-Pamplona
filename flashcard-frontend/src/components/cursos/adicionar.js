import React, { useState } from "react";

import { Row, Col, Input, Button } from 'react-materialize'

import {NavLink} from 'react-router-dom'

import api from "../../services/api"

const Adicionar = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const register = async () =>{
		await api.post("", {nome: name, descricao: description});
	}

    return (
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
                    <Button onClick={register} waves='light' className="right grey darken-2">Adicionar</Button>
                </NavLink>
            </Col>
        </Row>
    );
}

export default Adicionar;