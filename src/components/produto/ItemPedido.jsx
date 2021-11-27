import {useState , useEffect} from "react";
import Api from "../api/Api";

function ItemPedido(props) {

    const [itens , setItens] = useState ([]);

    useEffect(() => {

        Api.get(`/pedido/${props.id}`).then(listar)

        function listar (response) {
           setItens(response.data.itens);
            
        }
    }, [itens]);


    return(
        <div key = {itens.id}>
        
        {itens.map((item) => (
            <div key = {item.id}>
                <p>
            {props.id}
            </p>
            <p>
            {item.nomeProduto}
            </p>
            <p>
           {item.subTotal}
           </p>
            </div>
               
        ))}
        
        </div>
    );
}

export default ItemPedido;