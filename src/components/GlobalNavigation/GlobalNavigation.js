import React from 'react'
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import "./GlobalNavigationStyles.css";

import 'bootstrap/dist/css/bootstrap.min.css';



function GlobalNavigation() {

  const { currentUser, login, logout } = useAuth();

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
      <Container>
      <Navbar.Brand className="NavbarTitle">Messagez</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>Group Chats</Nav.Link>
            <Nav.Link>New Message</Nav.Link>
            <Nav.Link>Friends</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link>{currentUser !== null ? currentUser.displayName : null}</Nav.Link>
            {currentUser === null ?
              <Nav.Item>
                <Button className="btn login" onClick={login}>
                  login
                </Button>
              </Nav.Item>
              :
              <Nav.Item>
                <Button className="btn logout" onClick={logout}>
                  Logout
                </Button>
              </Nav.Item>}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default GlobalNavigation