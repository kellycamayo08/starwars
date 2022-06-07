import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbars = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink activeclassname='active' className="nav-item nav-link" to="/">Mostrar Cartas</NavLink>
      <NavLink activeclassname='active' className="nav-item nav-link" to="/search">Buscador</NavLink>

    </Nav>
    </Container>
  </Navbar>

        </div>
    );
};

export default Navbars;