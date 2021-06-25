import React, {useState, useEffect} from 'react';


import Modal from '../Modal/Modal'
import {FaTrashAlt} from 'react-icons/fa'
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
        window.location.reload();
      }));
    }

    const deleteFuncionario = async (id) => {
      await api.delete(`funcionario/${id}`);
      const funcionarioslist = funcionario.filter((funcionario) => {
        return funcionario.id !== id;
      });
      window.location.reload();
    }

        return(
          <>
            <div>
              <section className = "conteiner">
                <h1 style={{ textAlign: "center" }}>Funcionarios</h1>
                <button className = "salvar" onClick = {() => setModalVisivel(true)}>Cadastre um Funcionario</button>
                <div className="staff">
                  {funcionario.map((funcionario) => (
                    <div key={funcionario.id} className = "staff-content">
                          <h2>{funcionario.nome}</h2>
                          <p>{funcionario.cpf}</p>
                          <button type = "button" className="delete-button" onClick={() =>deleteFuncionario(funcionario.id)} >
                              <FaTrashAlt></FaTrashAlt>
                          </button>
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
