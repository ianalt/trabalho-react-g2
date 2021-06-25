import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CenterContainer = styled.div`
    background-color: white;
    color: #60A3D9;
    width: 35%;
    height: 35%;
    border-radius: 15px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height:32px;
    
`;

export const Img = styled.img`
    width: 50%;
    height: 50%;
`;

export const Content = styled.div`
    text-align: center;
    align-items: center;
`;

export const Botao = styled.button`
    background-color: #60A3D9;
    border-radius: 20px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
        background-color: #0074B7;
    }
`;