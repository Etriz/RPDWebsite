import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">RYANPDESIGNS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://docs.google.com/document/d/185IZD6de6XH1KQeddU0L_3tsH9-e_jPe2sl-KfVG_3g/edit?usp=sharing">
              RESUME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
