import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import api from "../../api";

export class Minhaconta extends Component {
    state = {
        cliente: [],
    };

    async componentDidMount() {
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
        );
    }
}

export default Minhaconta;
