import React, { useState, useEffect } from 'react';

import Modal from '../Modal/Modal'
import { FaTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import api from "../../api";
import './Funcionarios.css'
import FormUpdate from '../FormUpdate/FormUpdate'

const initialValue = {
  nome: '',
  cpf: '',
}
var idFuncionario = '';
const Funcionarios = () => {

  const [values, setValues] = useState(initialValue);
  const [funcionario, setFuncionario] = useState([])
  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalVisivelUpdate, setModalVisivelUpdate] = useState(false);

  useEffect(() => {
    async function loadFuncionario() {
      const response = await api.get("funcionario");
      setFuncionario(response.data)
    }
    loadFuncionario();
  }, [])

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    api.post("funcionario", values)
      .then((response => {
        window.location.reload();
      }));
  }

  const deleteFuncionario = async (id) => {
    await api.delete(`funcionario/${id}`);
    funcionario.filter((funcionario) => {
      return funcionario.id !== id;
    });
    window.location.reload();
  }

  function updateFuncionario(id) {
    idFuncionario = id;
    setModalVisivelUpdate(true);
  }

  function onSubmitUpdate(ev) {
    ev.preventDefault();

    api.put("funcionario/" + idFuncionario, values)
      .then((response => {
        window.location.reload();
      }));
  }

  return (
    <>
      <div>
        <section className="conteiner">
          <h1 style={{ textAlign: "center" }}>Funcionarios</h1>
          <button className="salvar" onClick={() => setModalVisivel(true)}>Cadastre um Funcionario</button>
          <div className="staff">
            {funcionario.map((funcionario) => (
              <div key={funcionario.id} className="staff-content">
                <h2>{funcionario.nome}</h2>
                <p>{funcionario.cpf}</p>
                <button type="button" className="delete-button" onClick={() => deleteFuncionario(funcionario.id)} >
                  <FaTrashAlt></FaTrashAlt>
                </button>
                <button type="button" className="update-button" onClick={() => updateFuncionario(funcionario.id)}>
                  <FiEdit></FiEdit>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {
        modalVisivel ? (
          <Modal onClose={() => setModalVisivel(false)} conteudo={
            <div>
              <form onSubmit={onSubmit}>
                <div className="formulario">
                  <label htmlFor="nomeFuncionario">Nome do Funcionario:&emsp;&emsp;</label>
                  <input type="text" name="nome" id="nomeFuncionario" onChange={onChange}></input>
                </div>
                <div className="formulario">
                  <label htmlFor="cpf">CPF:&emsp;</label>
                  <input type="text" name="cpf" id="cpf" onChange={onChange}></input>
                </div>
                <div className="formulario">
                  <button type="submit">Salvar</button>
                </div>
              </form>
            </div>}>
          </Modal>
        ) : null}

      {
        modalVisivelUpdate ? (
          <FormUpdate onClose={() => setModalVisivelUpdate(false)} conteudo={
            <div>
              <form onSubmit={onSubmitUpdate}>
                <div className="formulario">
                  <label htmlFor="nomeFuncionario">Nome do Funcionario:&emsp;&emsp;</label>
                  <input type="text" name="nome" id="nomeFuncionario" onChange={onChange}></input>
                </div>
                <div className="formulario">
                  <label htmlFor="cpf">CPF:&emsp;</label>
                  <input type="text" name="cpf" id="cpf" onChange={onChange}></input>
                </div>
                <div className="formulario">
                  <button type="submit">Editar</button>
                </div>
              </form>
            </div>}>
          </FormUpdate>
        ) : null}
    </>
  );
}

export default Funcionarios;
