import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "../Home/Home.js";
import Produtos from "../Produtos/Produtos.js";
import Minhaconta from "../Minhaconta/Minhaconta.js";
import categoria from "../Categoria/Categoria.js";
import Funcionarios from "../Funcionarios/Funcionarios.js";
import Cadastro from "../Cadastro/Cadastro";
import login from "../Login/Login.js"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './Header.css'
import StoreProvider from "../Store/Provider.js";
import RoutesPrivate from "../Routes/Private";
import Carrinho from '../Carrinho/Carrinho.js';


export default class Header extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar bg="dark" expand="lg" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                <Nav.Link>
                                <Link to="/" className = "links">Home</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/produtos" className = "links">Produtos</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/Funcionarios" className = "links">Funcionarios</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/Cadastro" className = "links">Cadastre-se</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/MinhaConta" className = "links">
                                            Clientes
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/categoria" className = "links">
                                            Categoria
                                        </Link>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        <Nav.Link id="login"><Link to="/Login" className = "links">Login</Link></Nav.Link>
                        <Nav.Link><Link to="/Carrinho" className = "links"><AiOutlineShoppingCart id="carrinho"></AiOutlineShoppingCart></Link></Nav.Link>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/produtos" component={Produtos} />
                        <Route path="/MinhaConta" component={Minhaconta} />
                        <Route path="/categoria" component={categoria} />
                        <Route path="/Funcionarios" component={Funcionarios} />
                        <Route path="/Cadastro" component={Cadastro} />
                        <Route path="/Carrinho" component={Carrinho} />
                    </Switch>
                    <StoreProvider>
                        <Switch>
                            <Route path="/login" component={login} />
                            <RoutesPrivate path="/home" component={Home} />
                        </Switch>
                    </StoreProvider>
                </div>
            </Router>
        );
    }
}