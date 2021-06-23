import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import api from "../../api";

export class Produtos extends Component {
    state = {
        produtos: [],
    };

    async componentDidMount() {
        const response = await api.get("produto");

        this.setState({ produtos: response.data });
    }

    render() {
        const { produtos } = this.state;

        // como não será possível inserir imagens,
        // colocamos uma imagem padrão que será inserida para todos os produtos novos inserido
        const verificaImg = (id, fotoLink) => {
            if (id >= 10) {
                fotoLink =
                    "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10029/16.treinamento-garcom-cursos-cpt.jpg";
            }
            return fotoLink;
        };

        const verificaDesc = (descricao) => {
            if (descricao.length > 20) {
                return descricao.slice(0, 19) + "...";
            } else {
                return descricao;
            }
        };

        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Produtos</h1>
                <Container>
                    <Row>
                        {produtos.map((produto) => (
                            <Col>
                                <Card
                                    style={{
                                        width: "18rem",
                                        height: "auto",
                                        marginTop: "2rem",
                                    }}
                                    key={produto.id}
                                >
                                    <Card.Body
                                        style={{
                                            width: "285px",
                                            height: "auto",
                                        }}
                                    >
                                        <Card.Title>{produto.nome}</Card.Title>
                                        <Card.Text>
                                            <img
                                                src={verificaImg(
                                                    produto.id,
                                                    produto.fotoLink
                                                )}
                                                alt={`Foto de ${produto.nome}`}
                                                style={{
                                                    width: "250px",
                                                    height: "250px",
                                                }}
                                            ></img>
                                        </Card.Text>
                                        <Card.Text>
                                            {verificaDesc(produto.descricao)}
                                        </Card.Text>
                                        <Card.Text>R${produto.valor}</Card.Text>
                                        <Button variant="primary">
                                            Comprar
                                        </Button>
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
