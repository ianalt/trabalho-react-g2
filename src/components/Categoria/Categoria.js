import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from '../Modal/Modal'

import api from "../../api";
import  './Categoria.css'

const initialValue = {
  nome:'',
  descricao:'',
}

const Categoria = () => {
    
    const [values, setValues] = useState (initialValue);
    const [categorias, setCategorias] = useState ([])
    const [modalVisivel, setModalVisivel] = useState(false);
    const history = useHistory();

    useEffect(() => {
     async function loadCategorias () {
        const response = await api.get("categoria");
        setCategorias (response.data)
      }
      loadCategorias();
    },[])

    function onChange (ev) {
      const {name, value} = ev.target;
      setValues({...values, [name]: value});
    }

    function onSubmit (ev) {
      ev.preventDefault();

    api.post("categoria", values)
      .then((response => {
        history.push('/');
      }));
    }

        return(
          <>
            <div>
              <section className = "conteiner">
                <h1 style={{ textAlign: "center" }}>Categorias</h1>
                <button className = "salvar" onClick = {() => setModalVisivel(true)}>Cadastre uma Categoria</button>
                <div className="category">
                  {categorias.map((categoria) => (
                    <div key={categoria.id} className = "category-content">
                          <h2>{categoria.nome}</h2>
                          <p>{categoria.descricao}</p>
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
                <label htmlFor = "nomeCategoria">Nome da Categoria:&emsp;&emsp;</label>
                <input type = "text" name="nome" id="nomeCategoria" onChange={onChange}></input>
              </div>
              <div className = "formulario">
                <label htmlFor = "descricaoCategoria">Descricao da Categoria:&emsp;</label>
                <input type = "text" name="descricao" id = "descricaoCategoria" onChange={onChange}></input>
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


export default Categoria;
