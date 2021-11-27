import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuTopo from "../menu/MenuTopo";
import React, { Component } from "react";
import Api from "../api/Api";
import { useParams } from "react-router";
import { withRouter } from "react-router-dom";

class ProdutoDetalhe extends Component {
  
  state = {
    produto: [],
  };
  
  async componentDidMount() {
    const {id} = this.props.match.params;
    console.log(id)
    const response = await Api.get(`/produto/${id}`);
    this.setState({ produto: response.data });
  }

  render() {
    const { produto } = this.state;

    return (
      <Container fluid>
        <MenuTopo></MenuTopo>
        <Row>
          <Col sm={12}>
            <div>
              <h1>Listar pedidos </h1>
              {console.log(produto)}
              
                <li key={produto.id}>
                  <h2>
                    {" "}
                    <strong>produto: </strong>
                  </h2>
                  {produto.produto}
                  <p> descrição</p>
                  {produto.descricao}
                  descrição:
                  {produto.foto}
                  valor do pedido:
                  {produto.valor}
                  <p>foto: </p>
                  <img src={produto.fotoLink} alt="" />
                </li>
              )
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(ProdutoDetalhe);
