import React from 'react';
import './APropos.css';
import PhotoProfil from '../../assets/PhotoProfil.jpg';
import { Container, Col, Row } from 'react-bootstrap';

function APropos() {
  return (
    <Container className="apropos-container">
      <Row>
        <Col lg={6} className="d-flex align-items-center">
          <p>
          Lorem ipsum dolor sit amet. Aut corporis quos in assumenda velit ut quis asperiores id Quis consequatur. Ut laudantium enim non expedita nisi ut delectus voluptatem non illum dolorum.
          <br/><br/>Lorem ipsum dolor sit amet. Aut corporis quos in assumenda velit ut quis asperiores id Quis consequatur. Ut laudantium enim non expedita nisi ut delectus voluptatem non illum dolorum.
            Lorem ipsum dolor sit amet. Aut corporis quos in assumenda velit ut quis asperiores id Quis consequatur. Ut laudantium enim non expedita nisi ut delectus voluptatem non illum dolorum.
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
