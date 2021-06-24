import React from 'react';
import { Component, setState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import api from '../../api';

export class Cadastro extends Component {
    state = {
        nome: '',
        usuario: '',
        cpf: '',
        email:'',
        dataNascimento:'',
        endereco:{
            rua: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: ''
        }
    };

    handleNome = event => {this.setState({ nome: event.target.value })}
    handleUsuario = event => {this.setState({ usuario: event.target.value })}
    handleCPF = event => {this.setState({ cpf: event.target.value })}
    handleEmail = event => {this.setState({ email: event.target.value })}
    handleDataNascimento = event => {this.setState({ dataNascimento: event.target.value })}

    handleRua = event => {
        this.setState({ rua: event.target.value })
    }
    
    handleNumero = event => {
        this.setState({ numero: event.target.value })
    }
    
    handleComplemento = event => {
        this.setState({ complemento: event.target.value })
    }
    
    handleBairro = event => {
        this.setState({ bairro: event.target.value })
    }
    
    handleCidade = event => {
        this.setState({ cidade: event.target.value })
    }
    
    handleEstado = event => {
        this.setState({ estado: event.target.value })
    }

    handleCep = event => {
        this.setState({ cep: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { nome, usuario, cpf, email, dataNascimento, rua, numero, complemento, bairro, cidade, estado, cep} = this.state;

        const json = JSON.stringify({nome: this.state.nome, usuario: this.state.usuario, cpf: this.state.cpf, email: this.state.email, dataNascimento: this.state.dataNascimento, 
            endereco:{ rua: this.state.rua, numero: this.state.numero, complemento: this.state.complemento, bairro: this.state.bairro, 
            cidade: this.state.cidade, estado: this.state.estado, cep: this.state.cep}});

        console.log(json);

        api.post('/cliente', json, {headers: {'Content-Type': 'application/json'}} )
        .then((result) => {
            console.log(result.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    
    
    

    render() {

        const { nome, usuario, cpf, email, dataNascimento, rua, numero, complemento, bairro, cidade, estado, cep} = this.state; 
        
        return (
            <div>
                
                <Container>
                <Form onSubmit={this.handleSubmit}>

                    <h2>Dados de cadastro</h2>

                    <Form.Group className="mb-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Insira seu nome completo" name="this.state.nome" onChange={this.handleNome}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Nome de usuário</Form.Label>
                        <Form.Control type="text" placeholder="Insira seu nome de usuário" name="this.state.usuario" onChange={this.handleUsuario}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Insira seu CPF" name="this.state.cpf" onChange={this.handleCPF} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Insira seu email" name="this.state.email" onChange={this.handleEmail}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control type="date" name="this.state.dataNascimento" onChange={this.handleDataNascimento}/>
                    </Form.Group>

                    <h2>Dados de endereço</h2>
            
                    <Form.Group className="mb-3" >
                        <Form.Label>Rua</Form.Label>
                        <Form.Control type="text" placeholder="Insira o nome da rua" name="this.state.endereco.rua" onChange={this.handleRua}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="text" placeholder="Insira o número da sua residência" name="this.state.endereco.numero" onChange={this.handleNumero}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Complemento</Form.Label>
                        <Form.Control type="text" name="this.state.endereco.complemento" onChange={this.handleComplemento}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" name="this.state.endereco.bairro" onChange={this.handleBairro}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Insira sua cidade" name="this.state.endereco.cidade" onChange={this.handleCidade}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="number" placeholder="Insira seu CEP" name="this.state.endereco.cep" onChange={this.handleCep}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" placeholder="Insira seu estado" name="this.state.endereco.estado" onChange={this.handleEstado}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
                </Container>
                
            </div>
        );
    }

}

export default Cadastro;