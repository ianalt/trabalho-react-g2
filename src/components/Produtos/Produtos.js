import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useCart } from '../Context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import ModalProdutos from '../ModalProdutos/ModalProdutos'
import FormUpdateProduto from '../FormUpdateProduto/FormUpdateProduto'
import './Produtos.css'

import {
    Titulo,
    Box,
    BoxBody,
    NomeProduto,
    ImgProduto,
    DescProduto,
    PrecoProduto,
    BotaoCompra,
} from "./stylesProdutos";

import api from "../../api";

const initialValue = {
    dataFabricacao:'',
    descricao:'',
    idCategoria: 0,
    idFuncionario: 0,
    nome:'',
    nomeCategoria:'',
    nomeFuncionario:'',
    qtdEstoque:0,
    valor: 0
  }

  var idProduto = '';
const Produtos = () => {
    const [values, setValues] = useState(initialValue);
    const [modalVisivel, setModalVisivel] = useState(false);
    const [modalVisivelUpdate, setModalVisivelUpdate] = useState(false);
    const [produto, setProduto] = useState([]);

    const cart = useCart()
    const itemsCount = Object.keys(cart.cart).length
    const add = produto => () => {
        cart.addToCart(produto)
    }

    useEffect(() => {
        async function loadProduto() {
            const response = await api.get("produto");
            setProduto(response.data);
        }

        loadProduto();
    }, []);

     function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        api.post("produto", values)
        .then((response => {
            window.location.reload();
        }));
    } 

    const deleteProdutos = async (id) => {
        await api.delete(`produto/${id}`);
        produto.filter((produto) => {
            return produto.id !== id;
        });
        window.location.reload();
    }

    function UpdateProduto (id) {
        idProduto = id;
        setModalVisivelUpdate(true);
      }

      function onSubmitUpdate (ev) {
        ev.preventDefault();
 
     api.put("produto/"+idProduto, values)
       .then((response => {
         window.location.reload();
       }));
     }

    // como não será possível inserir imagens,
    // colocamos uma imagem padrão que será inserida para todos os produtos novos inseridos
    const verificaImg = (id, fotoLink) => {
        if (id >= 10) {
            fotoLink =
                "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10029/16.treinamento-garcom-cursos-cpt.jpg";
        }
        return fotoLink;
    };

    const verificaDesc = (descricao) => {
        if (descricao.length > 25) {
            return descricao.slice(0, 25) + "...";
        } else {
            return descricao;
        }
    };

    return (
        <>
            <Titulo>Produtos</Titulo>
            <Container>
                <button className="salvar" onClick={() => setModalVisivel(true)}>Cadastre um Produto</button>
                <Row>
                    {produto.map((produto) => (
                        <Col style={{ marginBottom: "50px" }}>
                            <Box key={produto.id} className="boxProduto">
                                <button type="button" className="delete-button" onClick={() => deleteProdutos(produto.id)} >
                                    <FaTrashAlt></FaTrashAlt>
                                </button>
                                <BoxBody>
                                    <NomeProduto>{produto.nome}</NomeProduto>
                                    <ImgProduto
                                        src={verificaImg(
                                            produto.id,
                                            produto.fotoLink
                                        )}
                                    ></ImgProduto>
                                    <DescProduto>
                                        {verificaDesc(produto.descricao)}
                                    </DescProduto>
                                    <PrecoProduto>
                                        R${produto.valor}
                                    </PrecoProduto>
                                    <BotaoCompra onClick={add(produto)}>Comprar</BotaoCompra>
                                </BoxBody>
                                <button type="button" className="delete-button" onClick={() => deleteProdutos(produto.id)} >
                                    <FaTrashAlt></FaTrashAlt>
                                </button>
                                <button type = "button" className = "update-button" onClick = {() => UpdateProduto (produto.id)}>
                                    <FiEdit></FiEdit>
                                </button>
                            </Box>
                        </Col>
                    ))}
                </Row>
            </Container>
            {
                modalVisivel ? (
                    <ModalProdutos onClose={() => setModalVisivel(false)} conteudo={
                        <div>
                            <form onSubmit={onSubmit}>
                                <div className="formulario">
                                    <label htmlFor="dataFabricacao">Data de Fabricação:&emsp;&emsp;</label>
                                    <input type="date" name="dataFabricao" id="dataFabricacao" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="descricaoProduto">Descricao do Produto:&emsp;</label>
                                    <input type="text" name="descricao" id="descricaoProduto" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="idCategoria">Identificador da Categoria:&emsp;</label>
                                    <input type="number" name="idCategoria" id="idCategoria" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="idFuncionario">Identificador do Funcionário:&emsp;</label>
                                    <input type="number" name="idFuncionario" id="idFuncionario" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="nomeProduto">Nome do Produto:&emsp;</label>
                                    <input type="text" name="nome" id="nomeProduto" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="nomeCategoria">Nome da Categoria:&emsp;</label>
                                    <input type="text" name="nomeCategoria" id="nomeCategoria" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="nomeFuncionario">Nome do Funcionario:&emsp;</label>
                                    <input type="text" name="nomeFuncionario" id="nomeFuncionario" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="quantEstoque">Quantidade em Estoque:&emsp;</label>
                                    <input type="number" name="qtdEstoque" id="quantEstoque" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="valorProduto">Valor do Produto:&emsp;</label>
                                    <input type="number" name="valor" id="valorProduto" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <button type="submit">Salvar</button>
                                </div>
                            </form>
                        </div>
                    }>

                    </ModalProdutos>
                ) : null
            }
             {
                modalVisivelUpdate ? (
                    <FormUpdateProduto onClose={() => setModalVisivelUpdate(false)} conteudo={
                        <div>
                            <form onSubmit={onSubmitUpdate}>
                                <div className="formulario">
                                    <label htmlFor="dataFabricacao">Data de Fabricação:&emsp;&emsp;</label>
                                    <input type="date" name="dataFabricao" id="dataFabricacao" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="descricaoProduto">Descricao do Produto:&emsp;</label>
                                    <input type="text" name="descricao" id="descricaoProduto" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="idCategoria">Identificador da Categoria:&emsp;</label>
                                    <input type="number" name="idCategoria" id="idCategoria" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="idFuncionario">Identificador do Funcionário:&emsp;</label>
                                    <input type="number" name="idFuncionario" id="idFuncionario" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="nomeProduto">Nome do Produto:&emsp;</label>
                                    <input type="text" name="nome" id="nomeProduto" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="nomeCategoria">Nome da Categoria:&emsp;</label>
                                    <input type="text" name="nomeCategoria" id="nomeCategoria" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="nomeFuncionario">Nome do Funcionario:&emsp;</label>
                                    <input type="text" name="nomeFuncionario" id="nomeFuncionario" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="quantEstoque">Quantidade em Estoque:&emsp;</label>
                                    <input type="number" name="qtdEstoque" id="quantEstoque" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <label htmlFor="valorProduto">Valor do Produto:&emsp;</label>
                                    <input type="number" name="valor" id="valorProduto" onChange={onChange}></input>
                                </div>
                                <div className="formulario">
                                    <button type="submit">Editar</button>
                                </div>
                            </form>
                        </div>
                    }>

                    </FormUpdateProduto>
                ) : null
            }

        </>
    );
};

export default Produtos;
