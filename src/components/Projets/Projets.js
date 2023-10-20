import React from 'react';
import { useContext } from 'react';
import transition from '../../transition';
import { Card, Tag } from 'antd';
import { Row, Col } from 'react-bootstrap';
import './Projets.css';

import AppContext from '../../AppContext';


import {
  AiFillGithub, AiOutlineLink
} from "react-icons/ai";
import LaVraieMifa from '../../assets/LaVraieMifa.jpg';

const Projets = () => {

  const themeContext = useContext(AppContext);
  const darkMode = themeContext.darkMode.value;

  var color = {
    php: "#ff5733",
    symfony :"#e8b339"
  }

  return (
    <>
    <Row className="justify-content-md-center mt-5">
      <Col lg="3">
        <div className="card-container">
            <Card style={{ backgroundColor: "#e84545" } } title="La Vraie Mifa" bordered={false}>
            <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
            <Tag color={color.symfony}>Symfony</Tag>
            <Tag color={color.php}>Php</Tag>
            <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
              <div className="icon-container">
                <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                  <i className="card-icon"> <AiFillGithub size={50} title="GitHub" /></i>
                </a>
                <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                  <i className="card-icon"> <AiOutlineLink size={50} title="Link" /></i>
                </a>
              </div>
          </Card>
        </div>
      </Col>
      <Col lg="3">
        <div className="card-container">
            <Card style={{ backgroundColor: "#2d4059" }} title="La Vraie Mifa" className='bg-red' bordered={false}>
            <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
            <Tag color="#ff5733">Symfony</Tag>
            <Tag color="#e8b339">Php</Tag>
            <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon "> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <i className="card-icon "> <AiOutlineLink size={50} title="Git" /></i>
              </a>
            </Card>
        </div>
      </Col>
      <Col lg="3">
        <div className="card-container">
            <Card style={{ backgroundColor: "#0C7C59" }} title="La Vraie Mifa" className='bg-cyan' bordered={false}>
            <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
            <Tag color="#ff5733">Symfony</Tag>
            <Tag color="#e8b339">Php</Tag>
            <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon "> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <i className="card-icon "> <AiOutlineLink size={50} title="Git" /></i>
              </a>
          </Card>
        </div>
      </Col>
    </Row>

      <Row className="justify-content-md-center mt-5">
        <Col lg="3">
          <div className="card-container">
            <Card style={{ backgroundColor: "#2d4059" }} title="La Vraie Mifa" className='bg-red' bordered={false}>
              <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
              <Tag color="#ff5733">Symfony</Tag>
              <Tag color="#e8b339">Php</Tag>
              <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon "> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <i className="card-icon "> <AiOutlineLink size={50} title="Git" /></i>
              </a>
            </Card>
          </div>
        </Col>
        <Col lg="3">
          <div className="card-container">
            <Card style={{ backgroundColor: "#e84545" }} title="La Vraie Mifa" className='bg-red' bordered={false}>
              <img className="card-image" src={LaVraieMifa} alt="LaVraieMifa" />
              <Tag color="#ff5733">Symfony</Tag>
              <Tag color="#e8b339">Php</Tag>
              <p>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon "> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
              <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                <i className="card-icon "> <AiOutlineLink size={50} title="Git" /></i>
              </a>
            </Card>
          </div>
        </Col>

      </Row>
      
    </>

  );
};

export default transition(Projets);
