import React from "react";
import Api from "../api/Api";
import { useParams } from "react-router-dom";

function Pedido() {
  const { id } = useParams();
  const [pedido, setPedido] = React.useState({});
// eslint-disable-next-line
  React.useEffect(consultar, []);

  function consultar() {
    const exibir = (res) => setPedido(res.data);
    Api.get(`/pedido/${id}`).then(exibir);
  }
  return(
    <>
    <h1> Meu Pedido</h1>
    <p>{id}</p>
    <p>Cliente: {pedido.id}</p>
    </>
  );
}

export default Pedido;
