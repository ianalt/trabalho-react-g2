import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Home from "../Home/Home.js";

import Produtos from "../Produtos/Produtos.js";
import Minhaconta from "../Minhaconta/Minhaconta.js";
import categoria from "../Categoria/Categoria.js";
import Funcionarios from "../Funcionarios/Funcionarios.js";
<<<<<<< HEAD
import login from "../Login/Login.js"
=======
import carrinho from './carrinho.jpg';
import "./Header.css";
import Cadastro from "../Cadastro/Cadastro.js";
>>>>>>> 1f4bb0f035274d2955301d96ab447aef7b3f1869

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/">Papapa</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link>
                                        <Link to="/produtos">Produtos</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/Funcionarios">Funcionarios</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/Cadastro">Cadastre-se</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/MinhaConta">
                                            Minha Conta
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/login">
                                            Login
                                        </Link>
                                    </Nav.Link>
                                    <NavDropdown
                                        title="Categorias"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item>
                                            <Link to="/categoria">
                                                Categoria
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Something
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        <Nav.Link id="login"><Link to="/Login">Login</Link></Nav.Link>
                        <Nav.Link><Link to="/Carrinho"><img id="carrinho" src={carrinho} /></Link></Nav.Link>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/produtos" component={Produtos} />
                        <Route path="/MinhaConta" component={Minhaconta} />
                        <Route path="/login" component={login} />
                        <Route path="/categoria" component={categoria} />
                        <Route path="/Funcionarios" component={Funcionarios} />
                        <Route path="/Cadastro" component={Cadastro} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
