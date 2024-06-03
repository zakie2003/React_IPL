import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function BasicExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">IPL Power Play Predictor App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://zakiekhan.games">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;