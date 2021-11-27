import {useState , useEffect} from "react";
import Api from "../api/Api";
import ItemPedido from "./ItemPedido";

function Pedidos() {
    const [pedidos , setPedidos] = useState([]);

    useEffect(() => {
        Api.get("/pedido").then(listar);

        function listar (response) {
           setPedidos(response.data);
            
        }
    });

    return (
        <>
        {pedidos.map((pedido) => (

            <div key = {pedido.id}>
           
            Data do pedido: {pedido.dataPedido}<br/>
            Nome do cliente: {pedido.nomeCliente}<br/>
            Status do Pedido: {pedido.pedidoStatus}<br/>
               <ItemPedido id = {pedido.id} />        
            <p/>

            </div>



        )

         )}
        </>

    );
}

export default Pedidos;