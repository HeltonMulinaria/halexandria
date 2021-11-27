import MenuTopo from "../menu/MenuTopo";
import React, { Component } from "react";
import Api from "../api/Api";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./produtoStyle.css";
import { Link } from 'react-router-dom';

class Produto extends Component {
  state = {
    nome: [],
  };

  async componentDidMount() {
    const response = await Api.get("/produto");
    this.setState({ nome: response.data });
  }

  render() {
    const { nome } = this.state;

    return (
      <>
      <MenuTopo></MenuTopo>
       
      <h1>Produtos </h1>
      <div className="container">
       
        {console.log(nome)}
        {nome.map((nome) => (
          <li key={nome.id} className="lista-de-produtos">
            <Card style={{ width: "19rem" }} >
              <Card.Img variant="top" src={nome.fotoLink}className="imagemProduto" />
              <Card.Body>
                <Card.Title>{nome.nome}</Card.Title>
                <Card.Text>
                  <p>{nome.descricao}</p>

                  {nome.foto}
                  <p>R$:{nome.valor}</p>
                </Card.Text>
               <Link to={`/produto/${nome.id}`}><Button variant="primary">Descrição do produto </Button></Link>
              </Card.Body>
            </Card>
          </li>
        ))}
      </div>
      </>
    );
  }
}
export default Produto;
