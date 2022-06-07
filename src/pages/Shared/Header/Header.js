import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {signOut} from "firebase/auth";
import auth from "../../../firebase.init";
// import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {

  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Container className="fs-6">
          <Navbar.Brand>
            <Link to="/" className="text-light text-decoration-none">
              <h5>CORPORATE SALES TRAINER</h5>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link  href="home#services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {user ? (
                <div className="d-flex align-items-center">
                  <p className="me-2 text-light m-0">{user?.displayName}</p>
                  <button onClick={logOut}>Sign Out</button>
                </div>
              ) : (
                <div className="d-flex">
                  <Nav.Link as={Link} to="/login">
                    SignIn
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
