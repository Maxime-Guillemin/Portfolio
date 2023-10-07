import React, { useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Header.css';

import { Link, useLocation } from 'react-router-dom'

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
  const location = useLocation(); // Obtenez la route actuelle

  // État pour suivre le lien actif, initialisé avec la route actuelle
  const [activeLink, setActiveLink] = useState(location.pathname);

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
      <Navbar expand="lg" variant="dark" >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className={`header-navbar-link ${activeLink === '/' ? ' active' : ''}`}
                onClick={() => handleLinkClick('/')}
              >
                <Link to="/">Accueil</Link>
              </Nav.Link>
              <Nav.Link
                className={`header-navbar-link ${activeLink === '/APropos' ? ' active' : ''}`}
                onClick={() => handleLinkClick('/APropos')}
              >
                 <Link to="/APropos">A propos de moi</Link>
              </Nav.Link>
              <Nav.Link
                className={`header-navbar-link ${activeLink === '/competence' ? ' active' : ''}`}
                onClick={() => handleLinkClick('/competence')}
              >
                 <Link to="/competence">Compétences</Link>
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
