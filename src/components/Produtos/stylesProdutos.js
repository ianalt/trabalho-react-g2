import styled from "styled-components";

export const Titulo = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-top: 20px;
`;

export const Box = styled.div`
    width: 18rem;
    height: auto;
    margin-top: 2rem;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.22);
    cursor: pointer;
`;

export const BoxBody = styled.div`
    width: 285px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 5px;
`;

export const NomeProduto = styled.h2`
    font-size: 1.5rem;
    margin-top: 2px;
`;

export const ImgProduto = styled.img`
    width: 250px;
    height: 250px;
`;

export const DescProduto = styled.p``;

export const PrecoProduto = styled.p`
    font-size: 1.25rem;
`;

export const BotaoCompra = styled.button`
    color: #fff;
    background: #0d6efd;
    border-radius: 10px;
    border-color: #0d6efd;
    padding: 5px 20px;
`;
