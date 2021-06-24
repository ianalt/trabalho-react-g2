import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import MinhaConta from '../Minhaconta/Minhaconta'
import api from "../../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cliente, setCliente] = useState([]) 

  function validateForm() {
    return email.length > 0 && cpf.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    async function loadCliente () {
       const response = await api.get("/cliente");
       setCliente (response.data);
      }
      loadCliente();
    },[])
    console.log([cliente]);

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="cpf">
          <Form.Label>Cpf</Form.Label>
          <Form.Control
            type="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}