import React from 'react';
import './Competence.css'
import transition from "../../transition"
import {
  SiTypescript, SiJavascript, SiCsharp, SiCplusplus, SiReact, SiSymfony, SiLaravel, SiAndroidstudio, SiUnity, SiGit, SiSpring
} from "react-icons/si";
import { FaJava, FaNode, FaVuejs, FaAngular } from "react-icons/fa"
import { TbBrandKotlin, TbSql } from "react-icons/tb"
import { motion } from "framer-motion"


const Competences = () => {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (
    <div className="mainContainer">
      <div className="competenceContainer">

        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h2>Langages :</h2>

          <div className="wrapper">
          <motion.li className="item" variants={item}>
            <SiTypescript size={50} title="TypeScript" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <SiJavascript size={50} title="JavaScript" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <TbBrandKotlin size={55} title="Kotlin" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <FaJava size={50} title="Java" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <SiCplusplus size={50} title="C++" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <SiCsharp size={50} title="C#" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <TbSql size={50} title="SQL" />
            </motion.li>
          </div>
        </motion.ul>

        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h2>Framework et logiciels :</h2>

          <div className="wrapper">
          <motion.li className="item" variants={item}>
            <SiReact size={50} title="React" />
            </motion.li>
            <motion.li className="item" variants={item}>
              <FaVuejs size={50} title="Vue" />
            </motion.li>
            <motion.li className="item" variants={item}>
              <FaAngular size={50} title="Angular" />
            </motion.li>
          <motion.li className="item" variants={item}>
            <SiSymfony size={50} title="Symfony" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <SiLaravel size={55} title="Laravel" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <SiSpring size={50} title="SiSpring" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <SiAndroidstudio size={50} title="Android Studio" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <SiUnity size={50} title="Unity" />
            </motion.li>
          </div>

        </motion.ul>

        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h2>Autres :</h2>

          <div className="wrapper">
          <motion.li className="item" variants={item}>
            <SiGit size={50} title="Git" />
          </motion.li>
          <motion.li className="item" variants={item}>
            <FaNode size={60} title="Node.js" />
            </motion.li>
          </div>
        </motion.ul>
        
      </div>
    </div>
  );

};

export default transition(Competences);
