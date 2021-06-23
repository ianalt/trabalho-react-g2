import React, { Component } from 'react';
import api from './api'
import "./App.css";

class App extends Component {
    
    state = {
        produto: [],
    }

   async componentDidMount() {
            const response = await api.get('produto');
            this.setState ({ produto: response.data });
   }

   render() {

    const { produto } = this.state;

    return (
        <section className="container">
            <div className = "listaProdutos">
            {produto.map(produto => (
                <div className= "produto"> 
                    <div key={produto.id} className = "conteudo-produto">
                    <h2>
                    <strong>{produto.nome}</strong>
                    </h2>
                    <p>{produto.descricao}</p>
                    <p>{produto.qtdEstoque}</p>
                    <p>{produto.valor}</p>
                    </div>
                </div>
        ))}
        </div>
      </section>
    );
  };
};

export default App;
