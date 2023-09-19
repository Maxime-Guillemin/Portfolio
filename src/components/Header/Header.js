import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';

import {Container,Nav,Navbar} from 'react-bootstrap';



const Header = () => {
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500, // Ajoutez un délai si nécessaire
  });

  const linkAnimation = useSpring({
    borderBottom: '2px solid #ff6600', // Trait au survol
    paddingBottom: '3px', // Ajustez la valeur en conséquence
    opacity: 1,
    from: { borderBottom: '2px solid transparent', paddingBottom: '3px', opacity: 0 },
  });

  return (
    <animated.header className="header" style={headerAnimation}>
       <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </animated.header>
  );
};

export default Header;
