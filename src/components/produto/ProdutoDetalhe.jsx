import Api from "../api/Api";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import MenuTopo from "../menu/MenuTopo";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import "./produtoDetalheStyle.css";
function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState([]);
  const [quantidade, setQuantidade] = React.useState(1);

  useEffect(() => {
    console.log(id);
    Api.get(`/produto/${id}`).then(listar);

    function listar(response) {
      setProduto(response.data);
    }
  });

  function adicionarProduto(event) {
    event.preventDefault();
   
    // eslint-disable-next-line
    function adicionarProduto(idPedido) {
      Api.post("/pedido", {
        pedido: {
          id: idPedido,
        },
        produto: {
          id: id,
        },
        quantidade: quantidade,
      }).then(() => (window.location.href = "/pedido"));
    }
  }

  const handleChange = (event) => setQuantidade(event.target.value);

  return (
    <>
      <MenuTopo></MenuTopo>
      <Container style={{ marginTop: "50px" }} fluid>
        <Row>
          <Col>
            <div className="container">
              <div classname="card">
                <img src={produto.fotoLink} alt="" className="imagemProduto" />
                {console.log(produto)}
                <li key={produto.id}>
                  <h2>{produto.produto}</h2>
                  <p>{produto.descricao}</p>
                  <p>R$ {produto.valor} </p>

                  <Form onSubmit={adicionarProduto}>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicQuantidade"
                    >
                      <Form.Label>Quantidade</Form.Label>
                      <Form.Control
                        type="number"
                        value={quantidade}
                        onChange={handleChange}
                        min="0"
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btnAdicionarAoCarrinho"
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </Form>
                </li>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ProdutoDetalhe;
