import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar  collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container className="py-2 fs-5">
          <Navbar.Brand>
            <Link to="/" className="text-light text-decoration-none">CORPORATE SALES TRANER</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={ Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={ Link} to="/login">SignIn</Nav.Link>
              <Nav.Link as={ Link} to="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
