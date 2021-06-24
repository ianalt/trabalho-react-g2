import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from '../Modal/Modal'

import api from "../../api";
import  './Funcionarios.css'

const initialValue = {
  nome:'',
  cpf:'',
}

const Funcionarios = () => {
    
    const [values, setValues] = useState (initialValue);
    const [funcionario, setFuncionario] = useState ([])
    const [modalVisivel, setModalVisivel] = useState(false);
    const history = useHistory();

    useEffect(() => {
     async function loadFuncionario () {
        const response = await api.get("funcionario");
        setFuncionario (response.data)
      }
      loadFuncionario();
    },[])

    function onChange (ev) {
      const {name, value} = ev.target;
      setValues({...values, [name]: value});
    }

    function onSubmit (ev) {
      ev.preventDefault();

    api.post("funcionario", values)
      .then((response => {
        history.push('/');
      }));
    }

        return(
          <>
            <div>
              <section className = "conteiner">
                <h1 style={{ textAlign: "center" }}>Funcionarios</h1>
                <button className = "salvar" onClick = {() => setModalVisivel(true)}>Cadastre um Funcionario</button>
                <div className="category">
                  {funcionario.map((funcionario) => (
                    <div key={funcionario.id} className = "category-content">
                          <h2>{funcionario.nome}</h2>
                          <p>{funcionario.cpf}</p>
                    </div>
                  ))}
                </div>
             </section>
            </div>
        
        {
        modalVisivel ? (
        <Modal onClose = {() => setModalVisivel(false)} conteudo = {
          <div>
            <form onSubmit = {onSubmit}>
              <div className = "formulario">
                <label htmlFor = "nomeFuncionario">Nome do Funcionario:&emsp;&emsp;</label>
                <input type = "text" name="nome" id="nomeFuncionario" onChange={onChange}></input>
              </div>
              <div className = "formulario">
                <label htmlFor = "cpf">CPF:&emsp;</label>
                <input type = "text" name="cpf" id = "cpf" onChange={onChange}></input>
              </div>
                <div className = "formulario">
                <button type="submit">Salvar</button>
                </div>
            </form>
          </div>}> 
        </Modal>
        ): null}
        </>
        );
    }

export default Funcionarios;