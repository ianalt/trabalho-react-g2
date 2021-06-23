import React from 'react';
import { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import api from "../../api";

export class categoria extends Component{
    
    state = {
        categoria: [],
    };

    async componentDidMount() {
        const response = await api.get("categoria");
    
        this.setState({ categoria: response.data });
    }

    render(){
        const { categoria } = this.state;

        return(
        <div>
            <h1 style={{ textAlign: "center" }}>Categorias</h1>
            <Container>
            <Row>
        {categoria.map((categoria) => (
          <Col>
            <Card style={{ width: "18rem", height: "30rem", marginTop: "2rem" }} key={categoria.id}>
              <Card.Body>
                <Card.Title>{categoria.nome}</Card.Title>
                <Card.Text>{categoria.descricao}</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
            </Container>
        </div>
        );
    }
}

export default categoria;
