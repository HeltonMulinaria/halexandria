
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'
function MenuTopo() {
  return (
      <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to="/pedidos">Meus Pedidos</Link>          
          </Navbar.Text>         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MenuTopo;
