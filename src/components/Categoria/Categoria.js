import React, {useState, useEffect} from 'react';
import {FaTrashAlt} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import Modal from '../Modal/Modal'
import api from "../../api";
import  './Categoria.css'
import FormUpdate from '../FormUpdate/FormUpdate'

const initialValue = {
  nome:'',
  descricao:'',
}

 var idCategoria = '';
const Categoria = () => {

    const [values, setValues] = useState (initialValue);
    const [categorias, setCategorias] = useState ([])
    const [modalVisivel, setModalVisivel] = useState(false);
    const [modalVisivelUpdate, setModalVisivelUpdate] = useState(false);
    

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
        window.location.reload();
      }));
    }

    const deleteCategoria = async (id) => {
      await api.delete(`categoria/${id}`);
      categorias.filter((categoria) => {
        return categoria.id !== id;
      });
      window.location.reload();
    }

    function UpdateCategoria (id) {
      idCategoria = id;
      setModalVisivelUpdate(true);
    }
    
    function onSubmitUpdate (ev) {
       ev.preventDefault();

    api.put("categoria/"+idCategoria, values)
      .then((response => {
        window.location.reload();
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
                          <button type = "button" className="delete-button" onClick={() =>deleteCategoria(categoria.id)} >
                              <FaTrashAlt></FaTrashAlt>
                          </button>
                          <button type = "button" className = "update-button" onClick = {() => UpdateCategoria (categoria.id)}>
                            <FiEdit></FiEdit>
                          </button>
                    </div>
                  ))}
                </div>
             </section>
            </div>
        
        {
        modalVisivel ? (
        <Modal onClose = {() => setModalVisivel(false)}  conteudo = {
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

{
        modalVisivelUpdate ? (
        <FormUpdate onClose = {() => setModalVisivelUpdate(false)}  conteudo = {
          <div>
            <form onSubmit = {onSubmitUpdate}>
              <div className = "formulario">
                <label htmlFor = "nomeCategoria">Nome da Categoria:&emsp;&emsp;</label>
                <input type = "text" name="nome" id="nomeCategoria" onChange={onChange}></input>
              </div>
              <div className = "formulario">
                <label htmlFor = "descricaoCategoria">Descricao da Categoria:&emsp;</label>
                <input type = "text" name="descricao" id = "descricaoCategoria" onChange={onChange}></input>
              </div>
                <div className = "formulario">
                <button type="submit">Editar</button>
                </div>
            </form>
          </div>}> 
        </FormUpdate>
        ): null}

        </>
        );
    }


export default Categoria;
