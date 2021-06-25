import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//Primeiro: Adicionar imagem na pasta "img"

//Segundo: Importar a imagem (que nem ai embaixo)

//Terceiro: dentro da TAG "img" => src={nomeDoImport}

import batata from "../../img/img1.jpg";
import img2 from "../../img/img2.png";
import alice from "../../img/alice.jpg";
import day from "../../img/Day.jpg";
import deb from "../../img/deby.jpg";
import ian from "../../img/Ian.jpg";
import estev from "../../img/Estevao.jpg";
import mat from "../../img/matheus.jpg";

import HomeCss from "../Home/Home.css";

class Home extends Component {
    render() {
        return (
            <div className="tudo">
                <Container>
                    <h1>Ecommerce G2</h1>
                    <Carousel fade>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={batata}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>O Melhor Ecommerce !</h3>
                                <p>Presente em todas as plataformas</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Sem complicações !</h3>
                                <p>
                                    Compre produtos diretamente com os melhores
                                    vendedores da região
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <Row style={{ "margin-top": "40px" }}>
                        <Col xs={6} md={4}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Text>
                                        <a
                                            href="https://www.linkedin.com/in/alice-lopes-1942a4204"
                                            class="link-criador"
                                            target="_blank"
                                        >
                                            <img
                                                class="img-criador"
                                                src={alice}
                                                alt="Foto de Alice"
                                            />
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Text>
                                        <a
                                            href="https://www.linkedin.com/in/dayane-roson/"
                                            class="link-criador"
                                            target="_blank"
                                        >
                                            <img
                                                class="img-criador"
                                                src={day}
                                                alt="Foto de Dayane"
                                            />
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Text>
                                        <a
                                            href="https://www.linkedin.com/in/estev%C3%A3o-corr%C3%AAa-bb856420b/"
                                            class="link-criador"
                                            target="_blank"
                                        >
                                            <img
                                                class="img-criador"
                                                src={deb}
                                                alt="Foto de Estevão"
                                            />
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ "margin-top": "40px" }}>
                        <Col xs={6} md={4}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body style={{ border: "" }}>
                                    <Card.Text>
                                        <a
                                            href="https://www.linkedin.com/in/ian-alt/"
                                            class="link-criador"
                                            target="_blank"
                                        >
                                            <img
                                                class="img-criador"
                                                src={ian}
                                                alt="Foto de Ian"
                                            />
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Text>
                                        <a
                                            href="https://www.linkedin.com/in/estev%C3%A3o-corr%C3%AAa-bb856420b/"
                                            class="link-criador"
                                            target="_blank"
                                        >
                                            <img
                                                class="img-criador"
                                                src={estev}
                                                alt="Foto de Estevão"
                                            />
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={4}>
                            <Card style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Text>
                                        <a
                                            href="https://www.linkedin.com/in/matheus-alves-barbosa"
                                            class="link-criador"
                                            target="_blank"
                                        >
                                            <img
                                                class="img-criador"
                                                src={mat}
                                                alt="Foto de Matheus"
                                            />
                                        </a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
