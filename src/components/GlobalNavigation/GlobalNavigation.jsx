import React from 'react'
import {
  Navbar,
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
        <Link to="/" className='navbar-brand NavbarTitle'>Messagez</Link>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">  
        <Nav className="me-auto">
          <Link to="groupChats" className='nav-link'>Chats</Link>
            <Link to="newMessage" className='nav-link'>New Message</Link>
            <Link to="friends" className='nav-link'>Friends</Link>
        </Nav>
        <Nav>
            <Link to="/account" className='nav-link'>{currentUser !== null ? currentUser.displayName : null}</Link>
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