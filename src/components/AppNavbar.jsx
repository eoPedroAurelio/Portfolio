import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function AppNavbar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container className="nav-container">
        <Navbar.Brand as={Link} to="/" className="logo">
          <img src="/imgs/logo.png" alt="Logo Aurélio Creator" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navMenu" aria-label="Abrir menu" />

        <Navbar.Collapse id="navMenu" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/trabalhos">Trabalhos</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
