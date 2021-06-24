import React from 'react';
import { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import api from "../../api";

export class Minhaconta extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      cliente: {endereco: {}},
      id: props.id
    };
    console.log(this.state.id);
  }

    async componentDidMount() {
        const response = await api.get(`/cliente/${this.state.id}`);
    
        this.setState({cliente: response.data});
    }

    render(){
        // const { cliente } = this.props.cliente;

        console.log(this.state.cliente)
        return(
        <div>
            <h1 style={{ textAlign: "center" }}>Minha Conta</h1>
            <Container>
            <Row>
            <Card style={{ width: "18rem", height: "30rem", marginTop: "2rem" }} key={this.state.cliente.id}>
              <Card.Body>
              <Card.Title>{this.state.cliente.nome}</Card.Title>
                <Card.Text>{this.state.cliente.usuario}</Card.Text>
                <Card.Text>{this.state.cliente.cpf}</Card.Text>
                <Card.Text>{this.state.cliente.email}</Card.Text>
                <Card.Text>{this.state.cliente.dataNascimento}</Card.Text>
                <Card.Text>{this.state.cliente.endereco.rua}</Card.Text>
                <Card.Text>{this.state.cliente.endereco.numero}</Card.Text>
                <Card.Text>{this.state.cliente.endereco.bairro}</Card.Text>
                <Card.Text>{this.state.cliente.endereco.complemento}</Card.Text>
                <Card.Text>{this.state.cliente.endereco.cidade}</Card.Text>
                <Card.Text>{this.state.cliente.endereco.estado}</Card.Text>
                <Card.Text>{this.state.cliente.endereco.cep}</Card.Text>
              </Card.Body>
            </Card>
        </Row>
            </Container>
        </div>
        );
    }
}

export default Minhaconta;
