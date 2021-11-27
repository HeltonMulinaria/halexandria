import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Produto from "./produto/Produto.jsx";
import ProdutoDetalhe from "./produto/ProdutoDetalhe.jsx";
import Pedidos from "./produto/Pedidos.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produto />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

        //<Route path="/pedido/Ped" element={<Pedidos />} />
