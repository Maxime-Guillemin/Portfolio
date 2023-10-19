import React from 'react';
import './Competence.css'
import {
  SiTypescript, SiJavascript, SiCsharp, SiCplusplus, SiReact, SiSymfony, SiLaravel, SiAndroidstudio, SiUnity, SiGit, SiSpring
} from "react-icons/si";

import{FaJava, FaNode} from "react-icons/fa"

import {TbBrandKotlin, TbSql} from "react-icons/tb"

const Competences = () => {
  
    return (
      <div className="mainContainer">
        <div className="competenceContainer">
          <h2>Languages :</h2>

          <SiTypescript size={50} title="TypeScript" />
          <SiJavascript size={50} title="JavaScript" />
          <TbBrandKotlin size={55} title="Kotlin" />
          <FaJava size={50} title="Java" />
          <SiCplusplus size={50} title="C++" />
          <SiCsharp size={50} title="C#" />
          <TbSql size={50} title="SQL" />

          <h2>Framework et logiciels :</h2>

          <SiReact size={50} title="React" />
          <SiSymfony size={50} title="Symfony" />
          <SiLaravel size={55} title="Laravel" />
          <SiSpring size={50} title="SiSpring" />
          <SiAndroidstudio size={50} title="Android Studio" />
          <SiUnity size={50} title="Unity" />


          <h2>Autres :</h2>

          <SiGit size={50} title="Git" />
          <FaNode size={60} title="Node.js" />
        </div>
      </div>
    );
    
};

export default Competences;
