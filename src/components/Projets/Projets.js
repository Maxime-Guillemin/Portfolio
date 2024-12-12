import React from 'react';
import { useContext } from 'react';
import transition from '../../transition';
import { Card, Tag } from 'antd';
import { Row, Col } from 'react-bootstrap';
import './Projets.css';
import { motion } from "framer-motion"

import AppContext from '../../AppContext';


import {
  AiFillGithub, AiOutlineLink
} from "react-icons/ai";


import LaVraieMifa from '../../assets/LaVraieMifa.jpg';
import LaravelOutil from '../../assets/LaravelOutils.jpg';
import CentreVille from '../../assets/CentreVille.jpg';
import Portfolio from '../../assets/Portfolio.jpg';
import IndicateurOdema from '../../assets/IndicateurOdema.jpg';
import Uama from '../../assets/Uama.jpg'


const Projets = () => {

  const themeContext = useContext(AppContext);
  const darkMode = themeContext.darkMode.value;

  var color = {
    php: "#ff5733",
    symfony: "#EBADB1",
    laravel: "#5ab1bb",
    javascript: "#b233ff",
    react: "#ff9333",
    typescrypt:"#591f0a"
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible">
        
    <Row className="justify-content-md-center mt-5">
      <Col lg="3">
          <motion.div variants={item} className="card-container">
            <Card style={{ backgroundColor: "#e84545" } } title="La Vraie Mifa" bordered={false}>
            <img className="card-image mb-2" src={LaVraieMifa} alt="LaVraieMifa" />
                <Tag color={color.php}>Php</Tag>
                <Tag color={color.symfony}>Symfony</Tag>
            <p className='mt-2'>Site web réalisé entre amis pour découvrir Symfony et la configuration serveur.</p>
              <div className="icon-container">
                <a href="https://github.com/votre-utilisateur/LaVraieMifa" target="_blank" rel="noopener noreferrer">
                  <i className="card-icon git"> <AiFillGithub size={50} title="GitHub" /></i>
                </a>
                <a href="https://lavraiemifa.fr/" target="_blank" rel="noopener noreferrer">
                  <i className="card-icon link"> <AiOutlineLink size={50} title="Link" /></i>
                </a>
              </div>
          </Card>
        </motion.div>
      </Col>
      <Col lg="3">
        <motion.div variants={item} className="card-container">
            <Card style={{ backgroundColor: "#2d4059" }} title="Laravel, outils" bordered={false}>
              <img className="card-image mb-2" src={LaravelOutil} alt="Laraveloutil" />
                <Tag color={color.php}>Php</Tag>
                <Tag color={color.laravel}>Laravel</Tag>
            <p className='mt-2'>Projet pédagogique, découverte de laravel.</p>
              <a href="https://github.com/VoltalitSama/Laravel" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon"> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
            </Card>
        </motion.div>
      </Col>
      <Col lg="3">
        <motion.div variants={item} className="card-container">
            <Card style={{ backgroundColor: "#0C7C59" }} title="Tableau de bord centre-ville" className='bg-cyan' bordered={false}>
              <img className="card-image mb-2" src={CentreVille} alt="CentreVille" />
              <Tag color={color.javascript}>JavaScript</Tag>
            <p className='mt-2'>Tableau de bord dans le cadre de mon travail à la région HDF.</p>
              <a href="https://github.com/MaximeGuillemin/dashboard-cv" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon git"> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
                <a href="https://sig.hautsdefrance.fr/ext/tableaudebord-cv/" target="_blank" rel="noopener noreferrer">
                <i className="card-icon link"> <AiOutlineLink size={50} title="Git" /></i>
              </a>
          </Card>
        </motion.div>
      </Col>
    </Row>

      <Row className="justify-content-md-center mt-5">
        <Col lg="3">
          <motion.div variants={item} className="card-container">
            <Card style={{ backgroundColor: "#2d4059" }} title="Portfolio" bordered={false}>
              <img className="card-image mb-2" src={Portfolio} alt="Portfolio" />
              <Tag color={color.laravel}>JavaScript</Tag>
              <Tag color={color.react}>React</Tag>
              <p className='mt-2'>Mon portfolio :D</p>
                <a href="https://github.com/Maxime-Guillemin/portfolio" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon git"> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
                <a href="https://www.maxime-guillemin.fr/" target="_blank" rel="noopener noreferrer">
                <i className="card-icon link"> <AiOutlineLink size={50} title="Git" /></i>
              </a>
            </Card>
          </motion.div>
        </Col>
        <Col lg="3">
          <motion.div variants={item} className="card-container">
              <Card style={{ backgroundColor: "#0C7C59" }} title="Projet indicateur ODEMA" bordered={false}>
              <img className="card-image mb-2" src={IndicateurOdema} alt="IndicateurOdema" />
              <Tag color={color.typescrypt}>TypeScript</Tag>
              <Tag color={color.react}>React</Tag>
              <p className='mt-2'>Tableau de bord pour l'Observatoire déchets et matières dans le cadre de mon travail à la région HDF.</p>
                <a href="https://github.com/geo2france/odema-viz" target="_blank" rel="noopener noreferrer">
                <li>
                  <i className="card-icon git"> <AiFillGithub size={50} title="Git" /></i>
                </li>
              </a>
                <a href="https://www.geo2france.fr/public/odema/" target="_blank" rel="noopener noreferrer">
                <i className="card-icon link"> <AiOutlineLink size={50} title="Git" /></i>
              </a>
            </Card>
          </motion.div>
          </Col>
          
          <Col lg="3">
            <motion.div variants={item} className="card-container">
              <Card style={{ backgroundColor: "#2d4059" }} title="Uama" bordered={false}>
                <img className="card-image mb-2" src={Uama} alt="Uama" />
                <Tag color={color.react}>React</Tag>
                <Tag color={color.symfony}>Symfony</Tag>
                <p className='mt-2'>Projet cas thématiques du Master conçu pour soutenir les assistantes maternelles dans leurs activités de gestion. (git privé)</p>
                <div className="icon-container">
                  <a href="https://github.com/miage-amiens-organization/2023_M2_PRO-03_GR12" target="_blank" rel="noopener noreferrer">
                    <i className="card-icon git"> <AiFillGithub size={50} title="GitHub" /></i>
                  </a>
                  <a href="https://www.uama.fr" target="_blank" rel="noopener noreferrer">
                    <i className="card-icon link"> <AiOutlineLink size={50} title="Link" /></i>
                  </a>
                </div>
              </Card>
            </motion.div>
          </Col>

      </Row>
      </motion.div>
    </>

  );
};

export default transition(Projets);
