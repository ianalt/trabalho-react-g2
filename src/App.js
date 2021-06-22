import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [nomeCliente, setNomeCliente] = useState("");

    const getNomeCliente = () => {
        axios
            .get("https://trabalho-react-g2.herokuapp.com/cliente/1")
            .then((response) => {
                setNomeCliente(response.data.nome);
            });
    };

    getNomeCliente();
    return (
        <div>
            <h1>Bem-vindo, {nomeCliente}!</h1>
        </div>
    );
}

export default App;
