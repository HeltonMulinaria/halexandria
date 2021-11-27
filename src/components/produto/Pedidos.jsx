import { useState, useEffect } from "react";
import Api from "../api/Api";
import MenuTopo from "../menu/MenuTopo";
import { Card } from "react-bootstrap";
import "./pedidoStyle.css";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    Api.get("/pedido").then(listar);

    function listar(response) {
      setPedidos(response.data);
    }
  });

  return (
    <>
      <MenuTopo></MenuTopo>
      <div className="container">
        {pedidos.map((pedido) => (
          <Card style={{ width: "18rem", margin: "10px" }}>
            <div key={pedido.id}></div>
            <Card.Body>
              <Card.Title>
                <p>
                  {" "}
                  <strong>{pedido.nomeCliente}</strong>{" "}
                </p>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {" "}
                <p>
                  <strong>Número do pedido:</strong> {pedido.id}
                </p>
              </Card.Subtitle>
              <Card.Text>
                <p>
                  <strong>Data do pedido:</strong> {pedido.dataPedido}
                </p>

                <p>
                  {" "}
                  <strong>Status do Pedido:</strong> {pedido.pedidoStatus}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Pedidos;
