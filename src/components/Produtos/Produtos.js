import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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

const Produtos = () => {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function loadProduto() {
            const response = await api.get("produto");
            setProduto(response.data);
        }

        loadProduto();
    }, []);

    // como não será possível inserir imagens,
    // colocamos uma imagem padrão que será inserida para todos os produtos novos inserido
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
                <Row>
                    {produto.map((produto) => (
                        <Col style={{ marginBottom: "50px" }}>
                            <Box key={produto.id}>
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
                                    <BotaoCompra>Comprar</BotaoCompra>
                                </BoxBody>
                            </Box>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Produtos;
