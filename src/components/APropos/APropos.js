import React from 'react';
import './APropos.css';
import PhotoProfil from '../../assets/PhotoProfil.jpg';
import { Container, Col, Row } from 'react-bootstrap';

function APropos() {
  return (
    <Container className="apropos-container">
      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <p className='aboutMe'>
            Hey, je suis Maxime Guillemin, un développeur web qui adore créer des sites web magique même si, je n'ai toujours pas reçu ma lettre de Poudlard.
            J'ai plongé tête la première dans le monde de l'informatique, et ça a été une aventure aussi passionnante que
            tenter de résoudre un bug mystérieux à 3 heures du matin.
            <br/><br/> En tant que développeur web en herbe, j'esaye de m'entrainer avec une variété d'outils, y compris des frameworks tels que React, que j'apprécie
            particulièrement. Je ne demande qu'à m'améliorer et à apprendre de nouvelles choses pour repousser les limites de ma créativité.
          </p>
        </Col>

        <Col lg={5} className="d-flex align-items-center ms-5">
          <img src={PhotoProfil} alt="Photo Maxime" className="photo-profil" />
        </Col>
      </Row>
    </Container>
  );
}

export default APropos;
