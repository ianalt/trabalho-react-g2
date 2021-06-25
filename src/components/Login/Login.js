import React, { useState, useEffect, useContext } from 'react';
import BotaoLogin from '../BotaoLogin/BotaoLogin';
import StoreContext from '../Store/Context';
import { useHistory } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import MinhaConta from '../Minhaconta/Minhaconta'
import api from "../../api";

function initialState(){
  return {email: '', cpf: ''};
}

function login({ email, cpf }){
 if (email === 'jose.coves@email.com' && cpf === '65782885033'){
   return { token: '1234' };
 }
 return { error: 'Email ou CPF incorretos, ou usuário não cadastardo.'}
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event){
    const { value, name } = event.target;
    
    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event){
      event.preventDefault();

      const { token } = login(values);

      if (token){
          setToken(token);
          return history.push('/');
      }

      setValues(initialState);
  }

  // const [email, setEmail] = useState("");
  // const [cpf, setCpf] = useState("");
  // const [cliente, setCliente] = useState([]) 

  // function validateForm() {
  //   return email.length > 0 && cpf.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // useEffect(() => {
  //   async function loadCliente () {
  //      const response = await api.get("/cliente");
  //      setCliente (response.data);
  //     }
  //     loadCliente();
  //   },[])
  //   console.log([cliente]);

  return (
    <div className="user-login">
      <h1 className="user-login__title">Faça o Login</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" onChange={onChange} value={values.email}/>
        </div>
        <div className="user-login__form-control">
          <label htmlFor="cpf">CPF</label>
          <input id="cpf" type="cpf" name="cpf" onChange={onChange} value={values.cpf}/>
        </div>
        <BotaoLogin
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Login
        </BotaoLogin>
      </form>
    </div>

  //   <div className="Login">
  //     <h1>Faça o Login</h1>
  //     <Form onSubmit={onSubmit}>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>Email</Form.Label>
  //         <Form.Control autoFocus type="email" /*value={email}*/ onChange={onChange} value={values.email}/>
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="cpf">
  //         <Form.Label>Cpf</Form.Label>
  //         <Form.Control type="cpf" /*value={cpf}*/ onChange={onChange} value={values.cpf}/>
  //       </Form.Group>
  //       <Button block size="lg" type="submit" /*disabled={!validateForm()}*/>
  //         Login
  //       </Button>
  //     </Form>
  //   </div>
   );
}

export default Login;