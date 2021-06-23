import React from 'react';
import { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import api from "../../api";

export class Produtos extends Component{
    
    state = {
        produtos: [],
    };

    async componentDidMount() {
        const response = await api.get("produto");
    
        this.setState({ produtos: response.data });
    }

    render(){
        const { produtos } = this.state;

        return(
        <div>
            <h1 style={{ textAlign: "center" }}>Produtos</h1>
            <Container>
            <Row>
        {produtos.map((produto) => (
          <Col>
            <Card style={{ width: "18rem", height: "15rem", marginTop: "2rem" }} key={produto.id}>
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Text>R${produto.valor}</Card.Text>
                <Button variant="primary">Comprar</Button>
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

export default Produtos;
