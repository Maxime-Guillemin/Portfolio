import React, { useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';

import ThemeToggler from './ThemeToggler';
import styled, { ThemeContext } from 'styled-components';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const theme = useContext(ThemeContext);

  // État pour suivre le lien actif
  const [activeLink, setActiveLink] = useState(null);

  const linkAnimation = useSpring({
    borderBottom: '2px solid #ff6600',
    paddingBottom: '3px',
    opacity: 1,
    from: { borderBottom: '2px solid transparent', paddingBottom: '3px', opacity: 0 },
  });


  // Gestionnaire de clic de lien
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <animated.header className="header" style={headerAnimation}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Ajoutez la classe spécifique aux liens et un gestionnaire de clic */}
              <Nav.Link
                href="#home"
                className={`header-navbar-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </Nav.Link>
              {/* Ajoutez la classe spécifique aux liens et un gestionnaire de clic */}
              <Nav.Link
                href="#link"
                className={`header-navbar-link ${activeLink === 'link' ? 'active' : ''}`}
                onClick={() => handleLinkClick('link')}
              >
                Link
              </Nav.Link>
            </Nav>
            <ThemeToggler />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </animated.header>
  );
};

export default Header;
