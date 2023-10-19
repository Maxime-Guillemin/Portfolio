import React from 'react';
import transition from '../../transition';
import { Card, Tag } from 'antd';
import { Row, Col } from 'react-bootstrap';
import './Projets.css';

import {
   SiGit
} from "react-icons/si";
import LaVraieMifa from '../../assets/LaVraieMifa.jpg';

const Projets = () => {
  return (
    <Row>
      <Col lg="3">
        <div className="card-container">
          <Card title="La Vraie Mifa" bordered={false}>
            <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
            <Tag color="#ff5733">Symfony</Tag>
            <Tag color="#ff5733">Php</Tag>
            <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
            <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
              <li>
                <i className="card-icon "> <SiGit size={50} title="Git" /></i>
              </li>
            </a>
          </Card>
        </div>
      </Col>
      <Col lg="3">
        <div className="card-container">
          <Card title="La Vraie Mifa" bordered={false}>
            <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
            <Tag color="#ff5733">Symfony</Tag>
            <Tag color="#ff5733">Php</Tag>
            <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
            <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
              <li>
                <i className="card-icon "> <SiGit size={50} title="Git" /></i>
              </li>
            </a>
          </Card>
        </div>
      </Col>
      <Col lg="3">
        <div className="card-container">
          <Card title="La Vraie Mifa" bordered={false}>
            <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
            <Tag color="#ff5733">Symfony</Tag>
            <Tag color="#ff5733">Php</Tag>
            <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
            <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
              <li>
                <i className="card-icon "> <SiGit size={50} title="Git" /></i>
              </li>
            </a>
          </Card>
        </div>
      </Col>
      
    </Row>
  );
};

export default transition(Projets);
