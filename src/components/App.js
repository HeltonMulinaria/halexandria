import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Produto from "./produto/Produto.jsx";
import ProdutoDetalhe from "./produto/ProdutoDetalhe.jsx";
import Pedido from "./pedido/Pedido.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produto />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/pedido" element={<Pedido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
