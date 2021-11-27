import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MenuTopo from "../menu/MenuTopo";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Api from "../api/Api";
import { useParams } from "react-router";

function ProdutoDetalhe() {
  const [produto, setProduto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    Api.get(`/produto/${id}`).then(listar);

    function listar(response) {
      setProduto(response.data);
    }
  });

  return (
    <>
      <Container fluid>
        <MenuTopo></MenuTopo>
        <Row>
          <Col>
            <div className="container">
              <Card style={{ width: "40rem" }}>
                <h1>Listar pedidos </h1>
                {console.log(produto)}
                <li key={produto.id}>
                  <Card.Body>
                    <Card.Title>{produto.nome}</Card.Title>
                    <Card.Text>
                    <img src={produto.fotoLink} alt="" className='imagemProduto' />
                    </Card.Text>                   
                  </Card.Body>

                  
                </li>
              </Card>
            </div>
            )
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ProdutoDetalhe;
