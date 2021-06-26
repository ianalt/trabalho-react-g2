import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCart } from '../Context/CartContext.js';
import './Carrinho.css';


import api from "../../api";


const Carrinho = () => {
    const cart = useCart()
    const remove = id => () => {
        cart.removeFromCart(id)
    }
    const [produto, setProduto] = useState([]);

    // const itensCount = Object.keys(cart.cart).length
    const add = produto => () => {
        cart.addToCart(produto)
    }

    const itensCount = Object.keys(cart.cart).reduce((prev, curr) => {
        return prev + cart.cart[curr].quantidade
    }, 0)

    const precototal = Object.keys(cart.cart).reduce((prev, curr) => {
        return prev + cart.cart[curr].total
    }, 0)

    const changeQuantidade = id => evt => {
        cart.changeQuantidade(id, Number(evt.target.value))
    }

    useEffect(() => {
        async function loadProduto() {
            const response = await api.get("produto");
            setProduto(response.data);
        }

        loadProduto();
    }, []);

    function mostrarCarrinho(temItem) {
        if (temItem > 0) {
            return (
                <div>
                    <h3 className="carrinho"> Meu Carrinho ({itensCount}) </h3>
                    <div className="encapsulamento">
                        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5 geral" />
                        <div className="flex-1">
                            <table className="w-full text-sm lg:text-base" cellspacing="0">
                                <thead>
                                    <tr className="h-12 uppercase">
                                        <th className="hidden md:table-cell"></th>
                                        <th className="produtocabec">Produto</th>
                                        <th className="qtd">
                                            <span className="qtd" title="Quantidade">Qtd</span>
                                        </th>
                                        <th className="hidden text-right md:table-cell">Preço Unitário</th>
                                        <th className="text-right">Preço Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(cart.cart).map(key => {
                                        const { produto, quantidade } = cart.cart[key]

                                        return (
                                            <tr key={key}>
                                                <td className="hidden pb-4 md:table-cell">
                                                    <a href="#">
                                                        <img src={produto.fotoLink} className="imagem" alt={produto.nome} />
                                                    </a>
                                                </td>
                                                <td className="espacamentoproduto">
                                                    <p className="nome">{produto.nome}</p>
                                                    <button type="submit" className="btnremoveritem" onClick={remove(key)}>
                                                        <small>(Remover produto)</small>
                                                    </button>
                                                </td>
                                                <td className="espacamentoqtd">
                                                    <div className="w-20 h-10">
                                                        <div className="relative flex flex-row w-full h-8">
                                                            <input type="number" defaultValue={quantidade} min="1" max={produto.qtdEstoque} onBlur={changeQuantidade(key)}
                                                                className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black caixaQuantidade" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="espacamentounit">
                                                    <span className="text-sm lg:text-base font-medium">
                                                        R$ {produto.valor.toFixed(2)}
                                                    </span>
                                                </td>
                                                <td className="text-right">
                                                    <span className="text-sm lg:text-base font-medium">
                                                        R$ {(produto.valor * quantidade).toFixed(2)}
                                                        </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <hr className="pb-6 mt-6" />
                        </div>
                    </div>
                    <div className="finalizarcompra">
                        <div className="total">
                            <h3>Total: R${precototal.toFixed(2)}</h3>
                        </div>
                        <button className = "finalizarCompra">
                            FINALIZAR COMPRA
                        </button>
                    </div>
                </div>
            )
        } else if (temItem = 0) {
            return (
                <h1 className="carrinhoVazio"> Seu carrinho está vazio :( </h1>
            )
        } else {
            temItem = 0;
            return (
                <h1 className="carrinhoVazio"> Seu carrinho está vazio :( </h1>
            )
        }

    }


    return (

        mostrarCarrinho(precototal)

    );
};
export default Carrinho;