import React from 'react';
import xdomodal from '../../img/xdomodal.svg'

import { 
  Container,
  CenterContainer,
  Button,
  Img,
  Content,
} from './styles'

const Modal = ({id = "identidade", onClose = () => {} ,conteudo}) => {
  
  const tratarCliqueFora = (e) => {
    if(e.target.id == id) onClose();
  }

  return (
    <Container id={id} onClick={tratarCliqueFora}>
      <CenterContainer>
        <Button onClick={onClose}><Img src = {xdomodal} alt="fechar"></Img></Button>
        <Content>{conteudo}</Content>
      </CenterContainer>
    </Container>
  );
}

export default Modal;
