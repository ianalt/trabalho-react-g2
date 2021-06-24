import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import api from "../../api";

<<<<<<< HEAD
export class Minhaconta extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      cliente: {endereco: {}},
      id: props.id
=======
export class Minhaconta extends Component {
    state = {
        cliente: [],
>>>>>>> 1f4bb0f035274d2955301d96ab447aef7b3f1869
    };
    console.log(this.state.id);
  }

    async componentDidMount() {
<<<<<<< HEAD
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
=======
        const response = await api.get("cliente");

        this.setState({ cliente: response.data });
    }

    render() {
        const { cliente } = this.state;

        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Minha Conta</h1>
                <Container>
                    <Row>
                        {cliente.map((cliente) => (
                            <Col>
                                <Card
                                    style={{
                                        width: "18rem",
                                        height: "auto",
                                        marginTop: "2rem",
                                    }}
                                    key={cliente.id}
                                >
                                    <Card.Body>
                                        <Card.Title>{cliente.nome}</Card.Title>
                                        <Card.Text>
                                            Usuário: {cliente.usuario}
                                        </Card.Text>
                                        <Card.Text>
                                            CPF: {cliente.cpf}
                                        </Card.Text>
                                        <Card.Text>
                                            E-mail: {cliente.email}
                                        </Card.Text>
                                        <Card.Text>
                                            Data de nascimento:{" "}
                                            {cliente.dataNascimento}
                                        </Card.Text>
                                        <Card.Text>
                                            Rua: {cliente.endereco.rua}
                                        </Card.Text>
                                        <Card.Text>
                                            Número: {cliente.endereco.numero}
                                        </Card.Text>
                                        <Card.Text>
                                            Bairro: {cliente.endereco.bairro}
                                        </Card.Text>
                                        <Card.Text>
                                            Complemento:{" "}
                                            {cliente.endereco.complemento}
                                        </Card.Text>
                                        <Card.Text>
                                            Cidade: {cliente.endereco.cidade}
                                        </Card.Text>
                                        <Card.Text>
                                            Estado: {cliente.endereco.estado}
                                        </Card.Text>
                                        <Card.Text>
                                            CEP: {cliente.endereco.cep}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
>>>>>>> 1f4bb0f035274d2955301d96ab447aef7b3f1869
        );
    }
}

export default Minhaconta;
