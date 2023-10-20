import React from 'react';
import './APropos.css';
import PhotoProfil from '../../assets/PhotoProfil.jpg';
import { Container, Col, Row } from 'react-bootstrap';
import transition from "../../transition"

import { motion } from "framer-motion";

function APropos() {
  return (
    <Container className="apropos-container">
      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <motion.p className='aboutMe tilt'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}>
            Hey, je suis Maxime Guillemin, un développeur web qui adore créer des sites web magiques même si, je n'ai toujours pas reçu ma lettre de Poudlard.
            J'ai plongé tête la première dans le monde de l'informatique, et ça a été une aventure aussi passionnante que
            tenter de résoudre un bug mystérieux à 3 heures du matin.
            <br/><br/> En tant que développeur web en herbe, j'essaye de m'entrainer avec une variété d'outils, y compris des frameworks tels que React, que j'apprécie
            particulièrement. Je ne demande qu'à m'améliorer et à apprendre de nouvelles choses pour repousser les limites de ma créativité.
            </motion.p>
        </Col>

        <Col lg={5} className="d-flex align-items-center ms-5">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,

            }}
            src={PhotoProfil} alt="Photo Maxime" className="photo-profil" />
        </Col>
      </Row>
    </Container>
  );
}

export default transition(APropos);
